import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    [
      'script',
      { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-HG4RJR1M0Z' }
    ],
    [
      'script',
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-HG4RJR1M0Z');`
    ]
  ],
  lang: 'es',
  title: "Qu4k3",
  titleTemplate: 'Portfolio de Qu4k3',
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
    logo: '/assets/img/favicon-32x32.png',

    /*search: {
      provider: 'local'
    },*/

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    nav: [
      { text: 'Sobre mí', link: '/about' },
      { text: 'Proyectos', link: '/projects' }
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
      '/project': [
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
                { text: '<img src="https://www.google.com/s2/favicons?domain=killingfloor.zone&amp;sz=20" alt="Killing Floor Zone" width="20"> Killing Floor Zone', link: '/project/killingfloor-zone' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=pckt.link&amp;sz=20" alt="Pocket Link" width="20"> Pocket Link', link: '/project/pckt-link' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=fibers.cat&amp;sz=20" alt="Fibers" width="20"> Fibers v2', link: '/project/fibers' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=qu4k3.com&amp;sz=20" alt="Qu4k3" width="20"> Qu4k3 v2', link: '/project/qu4k3' }
              ]
            },
            {
              text: '[2019]',
              collapsed: false,
              items: [
                {
                  text: 'Disboard',
                  items: [
                    { text: '<img src="https://www.google.com/s2/favicons?domain=disboard.team&amp;sz=20" alt="Disboard" width="20"> Web', link: '/project/disboard-website' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=api.disboard.team&amp;sz=20" alt="Disboard" width="20"> API', link: '/project/disboard-api' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=docs.disboard.team&amp;sz=20" alt="Disboard" width="20"> Documentación', link: '/project/disboard-docs' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=bot.disboard.team&amp;sz=20" alt="Disboard" width="20"> Discord Bot', link: '/project/disboard-bot' }
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
                  { text: '<img src="https://www.google.com/s2/favicons?domain=inefable.day&amp;sz=20" alt="Inefable" width="20"> Inefable', link: '/project/inefable' },
                ]
              },
              {
                text: '[2021]',
                collapsed: false,
                items: [
                  { text: '<img src="https://www.google.com/s2/favicons?domain=app-eventos.vercel.app&amp;sz=20" alt="CEU Eventos" width="20"> CEU Eventos', link: '/project/ceu-events-scanner' },
                ]
              },
              {
                text: '[2018]',
                collapsed: false,
                items: [
                  { text: '<img src="https://www.google.com/s2/favicons?domain=animeinstitute.net&amp;sz=20" alt="Anime Institute" width="20"> Anime Institute', link: '/project/animeinstitute' },
                  { text: 'NVersus', link: '/project/nversus' },
                  { text: 'Discord Themes', link: '/project/dthemes' },
                ]
              },
              {
                text: '[2017]',
                collapsed: false,
                items: [
                  {
                    text: 'Mario Kart',
                    items: [
                      { text: 'Discord Bot (Lakitu)', link: '/project/mk-lakitu' },
                      { text: 'Mario Kart World', link: '/project/mk-mkw' },
                      { text: 'CEMK', link: '/project/mk-cemk' },
                      { text: 'FEMK', link: '/project/mk-femk' },
                      { text: 'Torneo Interautonómico', link: '/project/mk-torneo-interautonomico' },
                      { text: 'SNL', link: '/project/mk-snl' }
                    ]
                  },
                  { text: 'MHW Guild', link: '/project/mhw-guild' },
                  { text: 'Zerg Pulse', link: '/project/zerg-pulse' },
                  { text: 'Fibers v1', link: '/project/fibers-v2017' },
                  { text: 'Pong', link: '/project/pong' },
                  { text: 'Ecard Game', link: '/project/ecard-game' },
                  { text: 'ASCII Art', link: '/project/ascii-art' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=qu4k3.com&amp;sz=20" alt="Qu4k3" width="20"> Qu4k3 v1', link: '/project/qu4k3-v2017' }
                ]
              },
              {
                text: '[2016]',
                collapsed: false,
                items: [
                  { text: 'Fibers v0', link: '/project/fibers-v2016' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=kiznaiver.net&amp;sz=20" alt="" width="20"> Kiznaiver', link: '/project/kiznaiver' },
                ]
              },
              {
                text: '[2015]',
                collapsed: false,
                items: [
                  { text: '<img src="https://www.google.com/s2/favicons?domain=qu4k3.com&amp;sz=20" alt="" width="20"> Qu4k3 v0', link: '/project/qu4k3-v2015' },
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
                { text: '<img src="https://www.google.com/s2/favicons?domain=cms.tratar.es&amp;sz=20" alt="" width="20"> Tratar', link: '/project/tratar' },
              ]
            },
            {
              text: '[2021]',
              collapsed: false,
              items: [
                { text: 'UAO App Eventos', link: '/project/uao-app-events' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=esmena.cat&amp;sz=20" alt="" width="20"> L\'Esmena', link: '/project/esmena' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=llibrenet.com&amp;sz=20" alt="" width="20"> Llibrenet', link: '/project/llibrenet' },
                {
                  text: '<img src="https://www.google.com/s2/favicons?domain=inone.es&amp;sz=20" alt="" width="20"> InOne',
                  items: [
                    { text: 'Design System', link: '/project/inone-design-system' },
                    { text: 'Maquetación de Mails', link: '/project/inone-mailing-designs' },
                    { text: 'MJML Editor', link: '/project/inone-grapejs-mjml' },
                  ]
                },
              ]
            },
            {
              text: '[2020]',
              collapsed: false,
              items: [
                { text: '<img src="https://www.google.com/s2/favicons?domain=mailing-repo.vercel.app&amp;sz=20" alt="" width="20"> UAO Mailing Repository', link: '/project/uao-mailing-repository' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=farelleditors.cat&amp;sz=20" alt="" width="20"> Farell Editors', link: '/project/farell-editors' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=pmglobalex.com&amp;sz=20" alt="" width="20"> Globalex', link: '/project/globalex' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=lei-network.com&amp;sz=20" alt="" width="20"> LEI Network', link: '/project/lei-network' },
              ]
            },
            {
              text: '[2019]',
              collapsed: false,
              items: [
                { text: '<img src="https://www.google.com/s2/favicons?domain=js-arquitecto.com&amp;sz=20" alt="" width="20"> JS Arquitecto', link: '/project/js-arquitecto' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=gotoikoncierge.com&amp;sz=20" alt="" width="20"> GoToikoncierge', link: '/project/gotoikoncierge' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=lei-network.com&amp;sz=20" alt="" width="20"> Wanda t-shirt', link: '/project/wanda-t-shirt' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=clinicaabedentpodologia.com&amp;sz=20" alt="" width="20"> Clínica Abedent Podología', link: '/project/clinica-abedent-podologia' },
              ]
            },
            {
              text: '[2018]',
              collapsed: false,
              items: [
                { text: '<img src="https://www.google.com/s2/favicons?domain=lfb.es&amp;sz=20" alt="" width="20"> Liceo Francés de Barcelona (LFB)', link: '/project/lfb' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=iconciergerc.com&amp;sz=20" alt="" width="20"> iConcierge Red Carpet', link: '/project/iconciergerc' },
              ]
            },
            {
              text: '[2016]',
              collapsed: false,
              items: [
                {
                  text: 'IBA',
                  items: [
                    { text: 'Panorama d\'Art', link: '/project/iba-panoramadart' },
                    { text: 'B151 Barcelona', link: '/project/iba-b151-barcelona' },
                    { text: 'Institut Barcelonés d\'Art', link: '/project/iba-institutbarcelonesdart' },
                  ]
                },
                { text: 'Evoluginos', link: '/project/evoluginos' },
                { text: 'Marketplace Barcelona', link: '/project/marketplace-barcelona' },
                { text: 'KRN Accessories', link: '/project/krn-accessories' },
                { text: 'Lovely Families', link: '/project/lovelyfamilies' },
                {
                  text: 'AccelGrow',
                  items: [
                    { text: 'AccelGrow', link: '/project/accelgrow' },
                    { text: 'Boostartup', link: '/project/boostartup' }
                  ]
                },
              ]
            },
            {
              text: '[2015]',
              collapsed: false,
              items: [
                { text: 'Medical Nutribalance', link: '/project/medical-nutribalance' },
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
  }
})
