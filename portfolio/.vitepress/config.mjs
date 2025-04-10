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
    logo: '/assets/img/favicon-32x32.png',

    /*search: {
      provider: 'local'
    },*/

    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],

    nav: [
      { text: 'Sobre mí', link: '/sobre-mi' },
      { text: 'Proyectos', link: '/proyectos' },
      { text: 'CV', link: '/cv/CV_Paul_Guillamon.pdf' }
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
                { text: '<img src="https://www.google.com/s2/favicons?domain=killingfloor.zone&amp;sz=20" alt="Killing Floor Zone" width="20"> Killing Floor Zone', link: '/proyecto/killingfloor-zone' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=pckt.link&amp;sz=20" alt="Pocket Link" width="20"> Pocket Link', link: '/proyecto/pckt-link' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=fibers.cat&amp;sz=20" alt="Fibers" width="20"> Fibers v2', link: '/proyecto/fibers' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=qu4k3.com&amp;sz=20" alt="Qu4k3" width="20"> Qu4k3 v2', link: '/proyecto/qu4k3' }
              ]
            },
            {
              text: '[2019]',
              collapsed: false,
              items: [
                {
                  text: 'Disboard',
                  items: [
                    { text: '<img src="https://www.google.com/s2/favicons?domain=disboard.team&amp;sz=20" alt="Disboard" width="20"> Web', link: '/proyecto/disboard-website' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=api.disboard.team&amp;sz=20" alt="Disboard" width="20"> API', link: '/proyecto/disboard-api' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=docs.disboard.team&amp;sz=20" alt="Disboard" width="20"> Documentación', link: '/proyecto/disboard-docs' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=bot.disboard.team&amp;sz=20" alt="Disboard" width="20"> Discord Bot', link: '/proyecto/disboard-bot' }
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
                  { text: '<img src="https://www.google.com/s2/favicons?domain=inefable.day&amp;sz=20" alt="Inefable" width="20"> Inefable', link: '/proyecto/inefable' },
                ]
              },
              {
                text: '[2021]',
                collapsed: false,
                items: [
                  { text: '<img src="https://www.google.com/s2/favicons?domain=app-eventos.vercel.app&amp;sz=20" alt="CEU Eventos" width="20"> CEU Eventos', link: '/proyecto/ceu-events-scanner' },
                ]
              },
              {
                text: '[2018]',
                collapsed: false,
                items: [
                  { text: '<img src="https://www.google.com/s2/favicons?domain=animeinstitute.net&amp;sz=20" alt="Anime Institute" width="20"> Anime Institute', link: '/proyecto/animeinstitute' },
                  { text: 'NVersus', link: '/proyecto/nversus' },
                  { text: 'Discord Themes', link: '/proyecto/dthemes' },
                ]
              },
              {
                text: '[2017]',
                collapsed: false,
                items: [
                  {
                    text: 'Mario Kart',
                    items: [
                      { text: 'Discord Bot (Lakitu)', link: '/proyecto/mk-lakitu' },
                      { text: 'Mario Kart World', link: '/proyecto/mk-mkw' },
                      { text: 'CEMK', link: '/proyecto/mk-cemk' },
                      { text: 'FEMK', link: '/proyecto/mk-femk' },
                      { text: 'Torneo Interautonómico', link: '/proyecto/mk-torneo-interautonomico' },
                      { text: 'SNL', link: '/proyecto/mk-snl' }
                    ]
                  },
                  { text: 'MHW Guild', link: '/proyecto/mhw-guild' },
                  { text: 'Zerg Pulse', link: '/proyecto/zerg-pulse' },
                  { text: 'Fibers v1', link: '/proyecto/fibers-v2017' },
                  { text: 'Pong', link: '/proyecto/pong' },
                  { text: 'Ecard Game', link: '/proyecto/ecard-game' },
                  { text: 'ASCII Art', link: '/proyecto/ascii-art' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=qu4k3.com&amp;sz=20" alt="Qu4k3" width="20"> Qu4k3 v1', link: '/proyecto/qu4k3-v2017' }
                ]
              },
              {
                text: '[2016]',
                collapsed: false,
                items: [
                  { text: 'Fibers v0', link: '/proyecto/fibers-v2016' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=kiznaiver.net&amp;sz=20" alt="" width="20"> Kiznaiver', link: '/proyecto/kiznaiver' },
                ]
              },
              {
                text: '[2015]',
                collapsed: false,
                items: [
                  { text: '<img src="https://www.google.com/s2/favicons?domain=qu4k3.com&amp;sz=20" alt="" width="20"> Qu4k3 v0', link: '/proyecto/qu4k3-v2015' },
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
                { text: '<img src="https://www.google.com/s2/favicons?domain=cms.tratar.es&amp;sz=20" alt="" width="20"> Tratar', link: '/proyecto/tratar' },
              ]
            },
            {
              text: '[2021]',
              collapsed: false,
              items: [
                { text: 'UAO App Eventos', link: '/proyecto/uao-app-events' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=esmena.cat&amp;sz=20" alt="" width="20"> L\'Esmena', link: '/proyecto/esmena' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=llibrenet.com&amp;sz=20" alt="" width="20"> Llibrenet', link: '/proyecto/llibrenet' },
                {
                  text: '<img src="https://www.google.com/s2/favicons?domain=inone.es&amp;sz=20" alt="" width="20"> InOne',
                  items: [
                    { text: 'Design System', link: '/proyecto/inone-design-system' },
                    { text: 'Maquetación de Mails', link: '/proyecto/inone-mailing-designs' },
                    { text: 'MJML Editor', link: '/proyecto/inone-grapejs-mjml' },
                  ]
                },
              ]
            },
            {
              text: '[2020]',
              collapsed: false,
              items: [
                { text: '<img src="https://www.google.com/s2/favicons?domain=mailing-repo.vercel.app&amp;sz=20" alt="" width="20"> UAO Mailing Repository', link: '/proyecto/uao-mailing-repository' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=farelleditors.cat&amp;sz=20" alt="" width="20"> Farell Editors', link: '/proyecto/farell-editors' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=pmglobalex.com&amp;sz=20" alt="" width="20"> Globalex', link: '/proyecto/globalex' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=lei-network.com&amp;sz=20" alt="" width="20"> LEI Network', link: '/proyecto/lei-network' },
              ]
            },
            {
              text: '[2019]',
              collapsed: false,
              items: [
                { text: '<img src="https://www.google.com/s2/favicons?domain=js-arquitecto.com&amp;sz=20" alt="" width="20"> JS Arquitecto', link: '/proyecto/js-arquitecto' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=gotoikoncierge.com&amp;sz=20" alt="" width="20"> GoToikoncierge', link: '/proyecto/gotoikoncierge' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=lei-network.com&amp;sz=20" alt="" width="20"> Wanda t-shirt', link: '/proyecto/wanda-t-shirt' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=clinicaabedentpodologia.com&amp;sz=20" alt="" width="20"> Clínica Abedent Podología', link: '/proyecto/clinica-abedent-podologia' },
              ]
            },
            {
              text: '[2018]',
              collapsed: false,
              items: [
                { text: '<img src="https://www.google.com/s2/favicons?domain=lfb.es&amp;sz=20" alt="" width="20"> Liceo Francés de Barcelona (LFB)', link: '/proyecto/lfb' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=iconciergerc.com&amp;sz=20" alt="" width="20"> iConcierge Red Carpet', link: '/proyecto/iconciergerc' },
              ]
            },
            {
              text: '[2016]',
              collapsed: false,
              items: [
                {
                  text: 'IBA',
                  items: [
                    { text: 'Panorama d\'Art', link: '/proyecto/iba-panoramadart' },
                    { text: 'B151 Barcelona', link: '/proyecto/iba-b151-barcelona' },
                    { text: 'Institut Barcelonés d\'Art', link: '/proyecto/iba-institutbarcelonesdart' },
                  ]
                },
                { text: 'Evoluginos', link: '/proyecto/evoluginos' },
                { text: 'Marketplace Barcelona', link: '/proyecto/marketplace-barcelona' },
                { text: 'KRN Accessories', link: '/proyecto/krn-accessories' },
                { text: 'Lovely Families', link: '/proyecto/lovelyfamilies' },
                {
                  text: 'AccelGrow',
                  items: [
                    { text: 'AccelGrow', link: '/proyecto/accelgrow' },
                    { text: 'Boostartup', link: '/proyecto/boostartup' }
                  ]
                },
              ]
            },
            {
              text: '[2015]',
              collapsed: false,
              items: [
                { text: 'Medical Nutribalance', link: '/proyecto/medical-nutribalance' },
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
