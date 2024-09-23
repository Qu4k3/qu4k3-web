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
      label: 'English',
      lang: 'en'
    },
    es: {
      label: 'Español',
      lang: 'es'
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
      { text: 'Home', link: '/' },
      { text: 'Projects', link: '/projects' }
    ],

    sidebar: [
      {
        text: 'Projects',
        items: [
          /*{ text: 'Project A', link: '/markdown-examples' },
          { text: 'Project B', link: '/api-examples' }*/
        ]
      },
      {
        text: 'Achieved Projects',
        collapsed: true,
        items: [
          /*{ text: 'Project A', link: '/markdown-examples' },
          { text: 'Project B', link: '/api-examples' }*/
        ]
      }
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/paulguillamon' },
      { icon: 'github', link: 'https://github.com/Qu4k3' }
    ]
  }
})
