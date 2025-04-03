import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Qu4k3",
  description: "Personal page, showing my projects and works :)",
  cleanUrls: true,
  lastUpdated: true,
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
      { text: 'Inicio', link: '/' },
      { text: 'Proyectos', link: '/projects' }
    ],

    sidebar: [
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
              { text: 'Fibers v2', link: '/projects/fibers' },
              { text: 'Killing Floor Zone', link: '/projects/killingfloor-zone' },
              { text: 'Pocket Link', link: '/projects/pckt-link' },
            ]
          },
          {
            text: '[2020]',
            collapsed: false,
            items: [
              {
                text: 'Disboard',
                items: [
                  { text: 'Web', link: '/projects/disboard-website' },
                  { text: 'API', link: '/projects/disboard-api' },
                  { text: 'Documentación', link: '/projects/disboard-docs' },
                  { text: 'Discord Bot', link: '/projects/disboard-bot' }
                ]
              }
            ]
          },
          {
            text: '[2017]',
            collapsed: false,
            items: [
              { text: 'Fibers v1', link: '/projects/fibers-v2017' },
            ]
          },
          {
            text: '[2016]',
            collapsed: false,
            items: [
              { text: 'Fibers v0', link: '/projects/fibers-v2016' },
            ]
          }
          ]
        }, {
          text: '🗃️ Archivados',
          collapsed: true,
          items: [
            { text: 'Inefable', link: '/archive/inefable' },
            { text: 'CEU Eventos', link: '/archive/ceu-events-scanner' },
            { text: 'CSGO Numbers', link: '/archive/xxx' },
            { text: 'Ecard Game', link: '/archive/xxx' },
            { text: 'Ecard Game', link: '/archive/xxx' },
            { text: 'Case Converter', link: '/archive/xxx' },
            {
              text: 'Mario Kart',
              items: [
                { text: 'Discord Bot (Lakitu)', link: '/archive/mk-lakitu' },
                { text: 'Mario Kart World', link: '/archive/mk-mkw' },
                { text: 'CEMK', link: '/archive/mk-cemk' },
                { text: 'FEMK', link: '/archive/mk-femk' },
                { text: 'Torneo Interautonómico', link: '/archive/mk-torneo' }
              ]
            },
            { text: 'NVersus', link: '/archive/nversus' },
            { text: 'Discord Themes', link: '/archive/dthemes' },
            { text: 'MHW Guild', link: '/archive/mhw-guild' },
            { text: 'ASCII Art', link: '/archive/ascii-art' },
            { text: 'Kiznaiver', link: '/archive/kiznaiver' },
            { text: 'Pong', link: '/archive/pong' },
            { text: 'Zerg Pulse', link: '/archive/zerg-pulse' },
          ]
        }],
      },
      {
        text: 'Proyectos para Clientes',
        collapsed: false,
        items: [
          { text: 'JS Arquitecto', link: '/projects/js-arquitecto' },
          { text: 'Tratar', link: '/projects/tratar' },
          { text: 'L\'Esmena', link: '/projects/esmena' },
          { text: 'Llibrenet', link: '/projects/llibrenet' },
          { text: 'LFB', link: '/projects/lfb' },
          { text: 'LEInternational', link: '/projects/leinternacional' },
          { text: 'Farell Editors', link: '/projects/farell-editors' },
          { text: 'Globalex', link: '/projects/globalex' },
          { text: 'iConcierge Red Carpet', link: '/projects/iconciergerc' },
          { text: 'GoToikoncierge', link: '/projects/gotoikoncierge' },
          { text: 'Clínica Abedent Podología', link: '/projects/clinica-abedent-podologia' },
          { text: 'Evoluginos', link: '/projects/evoluginos' },
          { text: 'Marketplace Barcelona', link: '/projects/marketplace-barcelona' },
          { text: 'KRN Accessories', link: '/projects/krn-accessories' },
          { text: 'Lovely Families', link: '/projects/lovelyfamilies' },
          {
            text: 'UAO CEU',
            items: [
              { text: 'UAO Mailing Repository', link: '/projects/uao-mailing-repository' },
              { text: 'UAO App Eventos', link: '/projects/uao-app-events' },
            ]
          },
          {
            text: 'IBA',
            items: [
              { text: 'Panorama d\'Art', link: '/projects/iba-panoramadart' },
              { text: 'B151 Barcelona', link: '/projects/iba-b151-barcelona' },
              { text: 'Institut Barcelonés d\'Art', link: '/projects/iba-institutbarcelonesdart' },
            ]
          },
          {
            text: 'InOne',
            items: [
              { text: 'Design System', link: '/projects/inone-design-system' },
              { text: 'Maquetación de Mails', link: '/projects/inone-mailing-designs' },
              { text: 'MJML Editor', link: '/projects/inone-grapejs-mjml' },
            ]
          },
          {
            text: 'AccelGrow',
            items: [
              { text: 'AccelGrow', link: '/projects/accelgrow' },
              { text: 'Boostartup', link: '/projects/accelgrow-boostartup' },
              { text: 'Loquer', link: '/projects/accelgrow-loquer' },
            ]
          }
        ]
      }],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/paulguillamon' },
      { icon: 'github', link: 'https://github.com/Qu4k3' }
    ]
  }
})
