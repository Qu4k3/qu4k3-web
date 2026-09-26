import { defineConfig } from 'vitepress'
import projects from '../data/projects.json'

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
    [
      'script',
      { defer: '', src: 'https://umami.qu4k3.com/script.js', 'data-website-id': '6e819f92-206d-47ea-b9fd-a8db66a02366' }
    ]
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
      '/proyecto': [
        {
          text: 'Proyectos Personales',
          collapsed: false,
          items: [{
            text: '⚡ Activos',
            collapsed: false,
            items: [{
              text: '[2025]',
              collapsed: false,
              items: [
                { text: '<img src="/assets/img/favicons/killingfloor-zone.png" alt="Killing Floor Zone" width="16"> Killing Floor Zone', link: '/proyecto/killingfloor-zone' },
                { text: '<img src="/assets/img/favicons/medilens-es.png" alt="MEDI lens" width="16"> MEDI lens', link: '/proyecto/medilens' },
                { text: '<img src="/assets/img/favicons/pckt-link.png" alt="Pocket Link" width="16"> Pocket Link', link: '/proyecto/pckt-link' },
                { text: '<img src="/assets/img/favicons/fibers-cat.png" alt="Fibers" width="16"> Fibers v2', link: '/proyecto/fibers' },
                { text: '<img src="/assets/img/favicons/qu4k3-com.png" alt="Qu4k3" width="16"> Qu4k3 v2', link: '/proyecto/qu4k3' }
              ]
            },
            {
              text: '[2019]',
              collapsed: false,
              items: [
                {
                  text: 'Disboard',
                  items: [
                    { text: '<img src="/assets/img/favicons/disboard-team.png" alt="Disboard" width="16"> Web', link: '/proyecto/disboard-web' },
                    { text: '<img src="/assets/img/favicons/api-disboard-team.png" alt="Disboard" width="16"> API', link: '/proyecto/disboard-api' },
                    { text: '<img src="/assets/img/favicons/docs-disboard-team.png" alt="Disboard" width="16"> Documentación', link: '/proyecto/disboard-docs' },
                    { text: '<img src="/assets/img/favicons/bot-disboard-team.png" alt="Disboard" width="16"> Discord Bot', link: '/proyecto/disboard-bot' }
                  ]
                }
              ]
            }
            ]
          }, {
            text: '🗃️ Archivados',
            collapsed: true,
            items: [
              {
                text: '[2024]',
                collapsed: false,
                items: [
                  { text: '<img src="/assets/img/favicons/inefable-day.png" alt="Inefable" width="16"> Inefable', link: '/proyecto/inefable' },
                ]
              },
              {
                text: '[2021]',
                collapsed: false,
                items: [
                  { text: '<img src="/assets/img/favicons/ceu-es.png" alt="CEU Eventos" width="16"> CEU Eventos', link: '/proyecto/ceu-events-scanner' },
                ]
              },
              {
                text: '[2018]',
                collapsed: false,
                items: [
                  { text: '<img src="/assets/img/favicons/animeinstitute-net.png" alt="Anime Institute" width="16"> Anime Institute', link: '/proyecto/animeinstitute' },
                  { text: '<img src="/assets/img/favicons/nversus-com.png" alt="" width="16"> NVersus', link: '/proyecto/nversus' },
                  { text: '<img src="/assets/img/favicons/discordthemes-net.png" alt="" width="16"> Discord Themes', link: '/proyecto/dthemes' },
                  { text: '<img src="/assets/img/favicons/iceforce-team.png" alt="" width="16"> iForce Team', link: '/proyecto/iforce-team' },
                ]
              },
              {
                text: '[2017]',
                collapsed: false,
                items: [
                  {
                    text: '<img src="/assets/img/favicons/mariokart8-nintendo-com.png" alt="" width="16"> Mario Kart',
                    collapsed: true,
                    items: [
                      { text: '<img src="/assets/img/favicons/bot-mariokartworld-com.png" alt="" width="16"> Discord Bot (Lakitu)', link: '/proyecto/mk-lakitu' },
                      { text: '<img src="/assets/img/favicons/mariokartworld-com.png" alt="" width="16"> Mario Kart World', link: '/proyecto/mk-mkw' },
                      { text: '<img src="/assets/img/favicons/cemk-es.png" alt="" width="16"> CEMK', link: '/proyecto/mk-cemk' },
                      { text: '<img src="/assets/img/favicons/femk-es.png" alt="" width="16"> FEMK', link: '/proyecto/mk-femk' },
                      { text: '<img src="/assets/img/favicons/mariokartworld-com.png" alt="" width="16"> Torneo Interautonómico', link: '/proyecto/mk-torneo-interautonomico' },
                      { text: '<img src="/assets/img/favicons/mariokartworld-com.png" alt="" width="16"> SNL', link: '/proyecto/mk-snl' }
                    ]
                  },
                  { text: '<img src="/assets/img/favicons/mhwguild-com.png" alt="Fibers" width="16"> MHW Guild', link: '/proyecto/mhw-guild' },
                  { text: 'Zerg Pulse', link: '/proyecto/zerg-pulse' },
                  { text: '<img src="/assets/img/favicons/fibers-cat.png" alt="Fibers" width="16"> Fibers v1', link: '/proyecto/fibers-v2017' },
                  { text: 'Pong', link: '/proyecto/pong' },
                  { text: '<img src="/assets/img/favicons/ecardgame-io.png" alt="Qu4k3" width="16"> Ecard Game', link: '/proyecto/ecard-game' },
                  { text: '<img src="/assets/img/favicons/asciiart-io.png" alt="Qu4k3" width="16"> ASCII Art', link: '/proyecto/ascii-art' },
                  { text: '<img src="/assets/img/favicons/qu4k3-com.png" alt="Qu4k3" width="16"> Qu4k3 v1', link: '/proyecto/qu4k3-v2017' }
                ]
              },
              {
                text: '[2016]',
                collapsed: false,
                items: [
                  { text: '<img src="/assets/img/favicons/fibers-cat.png" alt="Fibers" width="16"> Fibers v0', link: '/proyecto/fibers-v2016' },
                  { text: '<img src="/assets/img/favicons/kiznaiver-net.png" alt="" width="16"> Kiznaiver', link: '/proyecto/kiznaiver' },
                ]
              },
              {
                text: '[2015]',
                collapsed: false,
                items: [
                  { text: '<img src="/assets/img/favicons/qu4k3-com.png" alt="" width="16"> Qu4k3 v0', link: '/proyecto/qu4k3-v2015' },
                ]
              }
            ]
          }],
        },
        {
          text: 'Proyectos para Clientes',
          collapsed: false,
          items: [
            {
              text: '[2024]',
              collapsed: false,
              items: [
                { text: '<img src="/assets/img/favicons/cms-tratar-es.png" alt="" width="16"> Tratar', link: '/proyecto/tratar' },
              ]
            },
            {
              text: '[2021]',
              collapsed: false,
              items: [
                { text: '<img src="/assets/img/favicons/ceu-es.png" alt="" width="16"> UAO App Eventos', link: '/proyecto/uao-app-events' },
                { text: '<img src="/assets/img/favicons/esmena-cat.png" alt="" width="16"> L\'Esmena', link: '/proyecto/esmena' },
                { text: '<img src="/assets/img/favicons/llibrenet-com.png" alt="" width="16"> Llibrenet', link: '/proyecto/llibrenet' },
                { text: '<img src="/assets/img/favicons/inone-es.png" alt="" width="16"> InOne', link: '/proyecto/inone' }
              ]
            },
            {
              text: '[2020]',
              collapsed: false,
              items: [
                { text: '<img src="/assets/img/favicons/ceu-es.png" alt="" width="16"> UAO Mailing Repository', link: '/proyecto/uao-mailing-repository' },
                { text: '<img src="/assets/img/favicons/farelleditors-cat.png" alt="" width="16"> Farell Editors', link: '/proyecto/farell-editors' },
                { text: '<img src="/assets/img/favicons/pmglobalex-com.png" alt="" width="16"> Globalex', link: '/proyecto/globalex' },
                { text: '<img src="/assets/img/favicons/lei-network-com.png" alt="" width="16"> LEI Network', link: '/proyecto/lei-network' },
              ]
            },
            {
              text: '[2019]',
              collapsed: false,
              items: [
                { text: '<img src="/assets/img/favicons/js-arquitecto-com.png" alt="" width="16"> JS Arquitecto', link: '/proyecto/js-arquitecto' },
                { text: '<img src="/assets/img/favicons/gotoikoncierge-com.png" alt="" width="16"> GoToikoncierge', link: '/proyecto/gotoikoncierge' },
                { text: '<img src="/assets/img/favicons/lei-network-com.png" alt="" width="16"> Wanda t-shirt', link: '/proyecto/wanda-t-shirt' },
                { text: '<img src="/assets/img/favicons/clinicaabedentpodologia-com.png" alt="" width="16"> Clínica Abedent Podología', link: '/proyecto/clinica-abedent-podologia' },
              ]
            },
            {
              text: '[2018]',
              collapsed: false,
              items: [
                { text: '<img src="/assets/img/favicons/lfb-es.png" alt="" width="16"> Liceo Francés de Barcelona (LFB)', link: '/proyecto/lfb' },
                { text: '<img src="/assets/img/favicons/iconciergerc-com.png" alt="" width="16"> iConcierge Red Carpet', link: '/proyecto/iconciergerc' },
              ]
            },
            {
              text: '[2016]',
              collapsed: false,
              items: [
                {
                  text: 'IBA',
                  items: [
                    { text: '<img src="/assets/img/favicons/panoramadart-com.png" alt="" width="16"> Panorama d\'Art', link: '/proyecto/iba-panoramadart' },
                    { text: '<img src="/assets/img/favicons/b151barcelona-com.png" alt="" width="16"> B151 Barcelona', link: '/proyecto/iba-b151-barcelona' },
                    { text: '<img src="/assets/img/favicons/iba-cat.png" alt="" width="16"> Institut Barcelonés d\'Art', link: '/proyecto/iba-institutbarcelonesdart' },
                  ]
                },
                { text: '<img src="/assets/img/favicons/evoluginos-com.png" alt="" width="16"> Evoluginos', link: '/proyecto/evoluginos' },
                { text: '<img src="/assets/img/favicons/marketplacebarcelona-com.png" alt="" width="16"> Marketplace Barcelona', link: '/proyecto/marketplace-barcelona' },
                { text: '<img src="/assets/img/favicons/krnaccessories-com.png" alt="" width="16"> KRN Accessories', link: '/proyecto/krn-accessories' },
                { text: '<img src="/assets/img/favicons/lovelyfamilies-com.png" alt="" width="16"> Lovely Families', link: '/proyecto/lovelyfamilies' },
                {
                  text: 'AccelGrow',
                  items: [
                    { text: '<img src="/assets/img/favicons/accelgrow-com.png" alt="" width="16"> AccelGrow', link: '/proyecto/accelgrow' },
                    { text: '<img src="/assets/img/favicons/boostartup-es.png" alt="" width="16"> Boostartup', link: '/proyecto/boostartup' }
                  ]
                },
              ]
            },
            {
              text: '[2015]',
              collapsed: false,
              items: [
                { text: '<img src="/assets/img/favicons/medicalnutribalance-com.png" alt="" width="16"> Medical Nutribalance', link: '/proyecto/medical-nutribalance' },
              ]
            },
          ]
        }
      ]
    },

    footer: {
      message: 'Paul Guillamón aka Qu4k3',
      copyright: '© 2015-2025'
    }
  },
  sitemap: {
    hostname: siteUrl,
    transformItems(items) {
      return items.filter((item) => !excludedSitemapPaths.has(normalizePath(item.url)))
    }
  }
})
