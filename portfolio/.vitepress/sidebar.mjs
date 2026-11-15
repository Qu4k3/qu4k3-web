const GROUP_TITLES = {
  disboard: 'Disboard',
  mariokart: 'Mario Kart',
  iba: 'IBA',
  accelgrow: 'AccelGrow'
}

const GROUP_COLLAPSED = {
  mariokart: true
}

const projectText = (project) => {
  const label = project.text || project.title
  return project.favicon
    ? `<img src="${project.favicon}" alt="" width="16"> ${label}`
    : label
}

const linkItem = (project) => ({
  text: projectText(project),
  link: project.link
})

const buildYearBucket = (year, items) => {
  const sorted = [...items]
  const entries = []
  let currentGroup = null
  let currentItems = []

  const flushGroup = () => {
    if (currentGroup && currentItems.length) {
      entries.push({
        text: GROUP_TITLES[currentGroup] || currentGroup,
        collapsed: GROUP_COLLAPSED[currentGroup] ?? false,
        items: currentItems
      })
    }
    currentGroup = null
    currentItems = []
  }

  for (const project of sorted) {
    if (project.group) {
      if (currentGroup !== project.group) {
        flushGroup()
        currentGroup = project.group
      }
      currentItems.push(linkItem(project))
    } else {
      flushGroup()
      entries.push(linkItem(project))
    }
  }
  flushGroup()

  return {
    text: `${year}`,
    collapsed: false,
    items: entries
  }
}

const byYear = (list) => {
  const map = new Map()
  for (const p of list) {
    const year = p.yearStart || ''
    if (!map.has(year)) map.set(year, [])
    map.get(year).push(p)
  }
  return [...map.entries()]
    .sort((a, b) => String(b[0]).localeCompare(String(a[0])))
    .map(([year, items]) => buildYearBucket(year, items))
}

const buildTypeSidebar = (typeProjects) => {
  const active = typeProjects.filter((p) => p.status === 'En Desarrollo')
  const archived = typeProjects.filter((p) => p.status !== 'En Desarrollo')

  const items = []
  if (active.length) {
    items.push({ text: '⚡ Activos', collapsed: false, items: byYear(active) })
  }
  if (archived.length) {
    items.push({ text: '🗃️ Archivados', collapsed: true, items: byYear(archived) })
  }
  if (!active.length && !archived.length) {
    items.push(...byYear(typeProjects))
  }
  return items
}

export const buildProjectSidebar = (allProjects) => ([
  {
    text: 'Proyectos Personales',
    collapsed: false,
    items: buildTypeSidebar(allProjects.filter((p) => p.type === 'personal'))
  },
  {
    text: 'Proyectos Colaborativos',
    collapsed: false,
    items: buildTypeSidebar(allProjects.filter((p) => p.type === 'colaborativo'))
  },
  {
    text: 'Proyectos para Clientes',
    collapsed: false,
    items: buildTypeSidebar(allProjects.filter((p) => p.type === 'cliente'))
  }
])
