import { defineConfig } from 'vitepress'
import projects from '../data/projects.json'
import { buildProjectSidebar } from './sidebar.mjs'

const siteUrl = 'https://qu4k3.com'
const defaultTitle = 'Qu4k3 — Portfolio de Paul Guillamón'
const defaultDescription = 'Portfolio de Paul Guillamón con proyectos web, móviles y de infraestructura.'
const defaultImage = `${siteUrl}/assets/img/qu4k3-og.png`
const excludedSitemapPaths = new Set()

const normalizePath = (value) => {
  if (!value) return '/'

  try {
    return new URL(value).pathname.replace(/\/$/, '') || '/'
  } catch {
    return value.replace(/\/$/, '') || '/'
  }
}

const getRoute = (relativePath = '') => {
  const route = relativePath
    .replace(/\.md$/, '')
    .replace(/^\/+/, '')
    .replace(/\/index$/, '')

  return route === 'index' ? '/' : normalizePath(`/${route}`)
}

const getProject = (route) => projects.find((project) => project.link === route)

const getProjectImage = (project) => project?.headerBackgroundImg
  ? `${siteUrl}/assets/img/projects/${project.headerBackgroundImg}`
  : defaultImage

const author = {
  '@type': 'Person',
  name: 'Paul Guillamón Thiéry',
  givenName: 'Paul',
  familyName: 'Guillamón Thiéry',
  jobTitle: 'Desarrollador web y móvil',
  url: siteUrl,
  sameAs: [
    'https://www.linkedin.com/in/paulguillamon',
    'https://github.com/Qu4k3'
  ]
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  transformPageData(pageData) {
    if (pageData.frontmatter?.sitemap === false) {
      excludedSitemapPaths.add(normalizePath(pageData.url || getRoute(pageData.relativePath)))
    }
  },
  transformHead({ pageData }) {
    const frontmatter = pageData.frontmatter || {}
    const route = getRoute(pageData.relativePath)
    const project = getProject(route)
    const url = `${siteUrl}${route === '/' ? '/' : route}`
    const title = frontmatter.title || pageData.title || (project?.title ? `${project.title} — Qu4k3` : defaultTitle)
    const description = frontmatter.description || project?.description || defaultDescription
    const image = frontmatter.image || getProjectImage(project)
    const imageAlt = frontmatter.imageAlt || `${title} — Qu4k3`
    const isProject = Boolean(project)
    const jsonLd = {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'WebSite',
          '@id': `${siteUrl}/#website`,
          name: 'Qu4k3',
          url: siteUrl,
          description: defaultDescription,
          author: { '@id': `${siteUrl}/#paul-guillamon` }
        },
        {
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          name: title,
          description,
          url,
          image,
          isPartOf: { '@id': `${siteUrl}/#website` },
          author: { '@id': `${siteUrl}/#paul-guillamon` }
        },
        { ...author, '@id': `${siteUrl}/#paul-guillamon` },
        ...(isProject ? [{
          '@type': 'CreativeWork',
          '@id': `${url}#project`,
          name: project.title,
          description,
          url,
          image,
          dateCreated: project.yearStart,
          dateModified: project.yearEnd || project.yearStart,
          keywords: project.tech?.join(', '),
          author: { '@id': `${siteUrl}/#paul-guillamon` }
        }] : [])
      ]
    }

    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { name: 'description', content: description }],
      ['meta', { name: 'author', content: 'Paul Guillamón Thiéry' }],
      ['meta', { name: 'robots', content: frontmatter.robots || 'index, follow' }],
      ['meta', { property: 'og:site_name', content: 'Qu4k3' }],
      ['meta', { property: 'og:locale', content: 'es_ES' }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { property: 'og:type', content: frontmatter.metaType || (isProject ? 'article' : 'website') }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:image', content: image }],
      ['meta', { property: 'og:image:width', content: '1200' }],
      ['meta', { property: 'og:image:height', content: '630' }],
      ['meta', { property: 'og:image:alt', content: imageAlt }],
      ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
      ['meta', { name: 'twitter:url', content: url }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: image }],
      ['meta', { name: 'twitter:image:alt', content: imageAlt }],
      ['script', { type: 'application/ld+json' }, JSON.stringify(jsonLd)]
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/jpeg', href: '/assets/img/qu4k3.jpg' }],
    ['link', { rel: 'apple-touch-icon', sizes: '512x512', href: '/assets/img/qu4k3.jpg' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#212121' }],
    ...(process.env.NODE_ENV === 'production'
      ? [['script', { defer: '', 'data-website-id': '6e819f92-206d-47ea-b9fd-a8db66a02366', 'data-host-url': 'https://umami.qu4k3.com', src: '/js/umami/script.js' }]]
      : []),
  ],
  lang: 'es',
  title: "Qu4k3",
  titleTemplate: 'Portfolio de Paul Guillamón',
  description: "Portfolio personal con mis proyectos y trabajos :)",
  cleanUrls: true,
  lastUpdated: false,
  appearance: {
    initialValue: 'light'
  },
  /*locales: {
    root: {
      label: 'Español',
      lang: 'es'
    },
    en: {
      label: 'English',
      lang: 'en'
    },
    fr: {
      label: 'Français',
      lang: 'fr'
    }
  },*/
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon-32x32.png',

    /*search: {
      provider: 'local'
    },*/

    nav: [
      {
        text: 'Sobre mí',
        link: '/sobre-mi',
        activeMatch: '/sobre-mi'
      },
      {
        text: 'Proyectos',
        link: '/proyectos',
        activeMatch: '/proyectos'
      },
      {
        text: 'CV',
        link: '/cv/CV_Paul_Guillamon.pdf',
        target: '_blank',
        rel: 'alternate'
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/paulguillamon' },
      { icon: 'github', link: 'https://github.com/Qu4k3' }
    ],

    outline: {
      "label": "Contenido de la página"
    },
    docFooter: {
      "prev": "Anterior",
      "next": "Siguiente"
    },
    sidebarMenuLabel: "Proyectos",
    darkModeSwitchLabel: "Apariencia",
    returnToTopLabel: "Volver arriba ↑",

    sidebar: {
      '/proyectos': buildProjectSidebar(projects)
    },

    footer: {
      message: 'Paul Guillamón aka Qu4k3',
      copyright: '© 2015-2026'
    }
  },
  sitemap: {
    hostname: siteUrl,
    transformItems(items) {
      return items.filter((item) => !excludedSitemapPaths.has(normalizePath(item.url)))
    }
  }
})
