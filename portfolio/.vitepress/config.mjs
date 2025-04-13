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
                { text: '<img src="https://www.google.com/s2/favicons?domain=medilens.es&amp;sz=20" alt="Killing Floor Zone" width="20"> MediLens', link: '/proyecto/medilens' },
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
                    { text: '<img src="https://www.google.com/s2/favicons?domain=disboard.team&amp;sz=20" alt="Disboard" width="20"> Web', link: '/proyecto/disboard-web' },
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
                  { text: '<img src="https://www.google.com/s2/favicons?domain=ceu.es&amp;sz=20" alt="CEU Eventos" width="20"> CEU Eventos', link: '/proyecto/ceu-events-scanner' },
                ]
              },
              {
                text: '[2018]',
                collapsed: false,
                items: [
                  { text: '<img src="https://www.google.com/s2/favicons?domain=animeinstitute.net&amp;sz=20" alt="Anime Institute" width="20"> Anime Institute', link: '/proyecto/animeinstitute' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=nversus.com&amp;sz=20" alt="" width="20"> NVersus', link: '/proyecto/nversus' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=discordthemes.net&amp;sz=20" alt="" width="20"> Discord Themes', link: '/proyecto/dthemes' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=iceforce.team&amp;sz=20" alt="" width="20"> iForce Team', link: '/proyecto/iforce-team' },
                ]
              },
              {
                text: '[2017]',
                collapsed: false,
                items: [
                  {
                    text: '<img src="https://www.google.com/s2/favicons?domain=mariokart8.nintendo.com&amp;sz=20" alt="" width="20"> Mario Kart',
                    items: [
                      { text: '<img src="https://www.google.com/s2/favicons?domain=bot.mariokartworld.com&amp;sz=20" alt="" width="20"> Discord Bot (Lakitu)', link: '/proyecto/mk-lakitu' },
                      { text: '<img src="https://www.google.com/s2/favicons?domain=mariokartworld.com&amp;sz=20" alt="" width="20"> Mario Kart World', link: '/proyecto/mk-mkw' },
                      { text: '<img src="https://www.google.com/s2/favicons?domain=cemk.es&amp;sz=20" alt="" width="20"> CEMK', link: '/proyecto/mk-cemk' },
                      { text: '<img src="https://www.google.com/s2/favicons?domain=femk.es&amp;sz=20" alt="" width="20"> FEMK', link: '/proyecto/mk-femk' },
                      { text: '<img src="https://www.google.com/s2/favicons?domain=mariokartworld.com&amp;sz=20" alt="" width="20"> Torneo Interautonómico', link: '/proyecto/mk-torneo-interautonomico' },
                      { text: '<img src="https://www.google.com/s2/favicons?domain=mariokartworld.com&amp;sz=20" alt="" width="20"> SNL', link: '/proyecto/mk-snl' }
                    ]
                  },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=mhwguild.com&amp;sz=20" alt="Fibers" width="20"> MHW Guild', link: '/proyecto/mhw-guild' },
                  { text: 'Zerg Pulse', link: '/proyecto/zerg-pulse' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=fibers.cat&amp;sz=20" alt="Fibers" width="20"> Fibers v1', link: '/proyecto/fibers-v2017' },
                  { text: 'Pong', link: '/proyecto/pong' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=ecardgame.io&amp;sz=20" alt="Qu4k3" width="20"> Ecard Game', link: '/proyecto/ecard-game' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=asciiart.io&amp;sz=20" alt="Qu4k3" width="20"> ASCII Art', link: '/proyecto/ascii-art' },
                  { text: '<img src="https://www.google.com/s2/favicons?domain=qu4k3.com&amp;sz=20" alt="Qu4k3" width="20"> Qu4k3 v1', link: '/proyecto/qu4k3-v2017' }
                ]
              },
              {
                text: '[2016]',
                collapsed: false,
                items: [
                  { text: '<img src="https://www.google.com/s2/favicons?domain=fibers.cat&amp;sz=20" alt="Fibers" width="20"> Fibers v0', link: '/proyecto/fibers-v2016' },
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
                { text: '<img src="https://www.google.com/s2/favicons?domain=ceu.es&amp;sz=20" alt="" width="20"> UAO App Eventos', link: '/proyecto/uao-app-events' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=esmena.cat&amp;sz=20" alt="" width="20"> L\'Esmena', link: '/proyecto/esmena' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=llibrenet.com&amp;sz=20" alt="" width="20"> Llibrenet', link: '/proyecto/llibrenet' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=inone.es&amp;sz=20" alt="" width="20"> InOne', link: '/proyecto/inone' }
              ]
            },
            {
              text: '[2020]',
              collapsed: false,
              items: [
                { text: '<img src="https://www.google.com/s2/favicons?domain=ceu.es&amp;sz=20" alt="" width="20"> UAO Mailing Repository', link: '/proyecto/uao-mailing-repository' },
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
                    { text: '<img src="https://www.google.com/s2/favicons?domain=panoramadart.com&amp;sz=20" alt="" width="20"> Panorama d\'Art', link: '/proyecto/iba-panoramadart' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=b151barcelona.com&amp;sz=20" alt="" width="20"> B151 Barcelona', link: '/proyecto/iba-b151-barcelona' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=iba.cat&amp;sz=20" alt="" width="20"> Institut Barcelonés d\'Art', link: '/proyecto/iba-institutbarcelonesdart' },
                  ]
                },
                { text: '<img src="https://www.google.com/s2/favicons?domain=evoluginos.com&amp;sz=20" alt="" width="20"> Evoluginos', link: '/proyecto/evoluginos' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=marketplacebarcelona.com&amp;sz=20" alt="" width="20"> Marketplace Barcelona', link: '/proyecto/marketplace-barcelona' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=krnaccessories.com&amp;sz=20" alt="" width="20"> KRN Accessories', link: '/proyecto/krn-accessories' },
                { text: '<img src="https://www.google.com/s2/favicons?domain=lovelyfamilies.com&amp;sz=20" alt="" width="20"> Lovely Families', link: '/proyecto/lovelyfamilies' },
                {
                  text: 'AccelGrow',
                  items: [
                    { text: '<img src="https://www.google.com/s2/favicons?domain=accelgrow.com&amp;sz=20" alt="" width="20"> AccelGrow', link: '/proyecto/accelgrow' },
                    { text: '<img src="https://www.google.com/s2/favicons?domain=boostartup.es&amp;sz=20" alt="" width="20"> Boostartup', link: '/proyecto/boostartup' }
                  ]
                },
              ]
            },
            {
              text: '[2015]',
              collapsed: false,
              items: [
                { text: '<img src="https://www.google.com/s2/favicons?domain=medicalnutribalance.com&amp;sz=20" alt="" width="20"> Medical Nutribalance', link: '/proyecto/medical-nutribalance' },
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
