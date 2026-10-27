---
title: Sobre mí — Paul Guillamón
description: "Conoce a Paul Guillamón: desarrollador web y móvil con más de 10 años de experiencia en diseño, SEO, marketing y desarrollo."
image: https://qu4k3.com/assets/img/qu4k3-og.png
imageAlt: Paul Guillamón — desarrollador web y móvil
---

<script setup>
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'
import typescriptIcon from 'simple-icons/icons/typescript.svg?raw'
import reactIcon from 'simple-icons/icons/react.svg?raw'
import nextIcon from 'simple-icons/icons/nextdotjs.svg?raw'
import htmlIcon from 'simple-icons/icons/html5.svg?raw'
import cssIcon from 'simple-icons/icons/css.svg?raw'
import sassIcon from 'simple-icons/icons/sass.svg?raw'
import cssModulesIcon from 'simple-icons/icons/cssmodules.svg?raw'
import tailwindIcon from 'simple-icons/icons/tailwindcss.svg?raw'
import muiIcon from 'simple-icons/icons/mui.svg?raw'
import mantineIcon from 'simple-icons/icons/mantine.svg?raw'
import viteIcon from 'simple-icons/icons/vite.svg?raw'
import figmaIcon from 'simple-icons/icons/figma.svg?raw'
import gitIcon from 'simple-icons/icons/git.svg?raw'
import postmanIcon from 'simple-icons/icons/postman.svg?raw'
import googleSearchConsoleIcon from 'simple-icons/icons/googlesearchconsole.svg?raw'
import googleAnalyticsIcon from 'simple-icons/icons/googleanalytics.svg?raw'
import googleTagManagerIcon from 'simple-icons/icons/googletagmanager.svg?raw'
import lookerIcon from 'simple-icons/icons/looker.svg?raw'
import umamiIcon from 'simple-icons/icons/umami.svg?raw'
import matomoIcon from 'simple-icons/icons/matomo.svg?raw'
import nodeIcon from 'simple-icons/icons/nodedotjs.svg?raw'
import dockerIcon from 'simple-icons/icons/docker.svg?raw'
import expoIcon from 'simple-icons/icons/expo.svg?raw'
import prismaIcon from 'simple-icons/icons/prisma.svg?raw'
import drizzleIcon from 'simple-icons/icons/drizzle.svg?raw'
import vitestIcon from 'simple-icons/icons/vitest.svg?raw'
import jestIcon from 'simple-icons/icons/jest.svg?raw'
import vercelIcon from 'simple-icons/icons/vercel.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'
import cloudflareIcon from 'simple-icons/icons/cloudflare.svg?raw'
import cloudflareWorkersIcon from 'simple-icons/icons/cloudflareworkers.svg?raw'
import mailchimpIcon from 'simple-icons/icons/mailchimp.svg?raw'
import ovhIcon from 'simple-icons/icons/ovh.svg?raw'
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import vitepressIcon from 'simple-icons/icons/vitepress.svg?raw'
import directusIcon from 'simple-icons/icons/directus.svg?raw'
import strapiIcon from 'simple-icons/icons/strapi.svg?raw'
import contentfulIcon from 'simple-icons/icons/contentful.svg?raw'
import phpIcon from 'simple-icons/icons/php.svg?raw'
import vueIcon from 'simple-icons/icons/vuedotjs.svg?raw'
import mysqlIcon from 'simple-icons/icons/mysql.svg?raw'
import mariadbIcon from 'simple-icons/icons/mariadb.svg?raw'
import postgresqlIcon from 'simple-icons/icons/postgresql.svg?raw'
import mongodbIcon from 'simple-icons/icons/mongodb.svg?raw'
import firebaseIcon from 'simple-icons/icons/firebase.svg?raw'
import supabaseIcon from 'simple-icons/icons/supabase.svg?raw'
import mongooseIcon from 'simple-icons/icons/mongoose.svg?raw'
import opencodeIcon from 'simple-icons/icons/opencode.svg?raw'
import claudeCodeIcon from 'simple-icons/icons/claudecode.svg?raw'
import copilotIcon from 'simple-icons/icons/githubcopilot.svg?raw'
import mcpIcon from 'simple-icons/icons/modelcontextprotocol.svg?raw'
import drupalIcon from 'simple-icons/icons/drupal.svg?raw'
import prestashopIcon from 'simple-icons/icons/prestashop.svg?raw'
import laravelIcon from 'simple-icons/icons/laravel.svg?raw'
import codeigniterIcon from 'simple-icons/icons/codeigniter.svg?raw'
import angularIcon from 'simple-icons/icons/angular.svg?raw'
import openjdkIcon from 'simple-icons/icons/openjdk.svg?raw'
import bootstrapIcon from 'simple-icons/icons/bootstrap.svg?raw'

const technologyGroups = [
  {
    title: 'Frontend',
    technologies: [
      { name: 'JavaScript', icon: javascriptIcon }, { name: 'TypeScript', icon: typescriptIcon },
      { name: 'React', icon: reactIcon },
      { name: 'Next.js', icon: nextIcon }, { name: 'HTML', icon: htmlIcon },
      { name: 'CSS', icon: cssIcon }, { name: 'Sass', icon: sassIcon },
      { name: 'CSS Modules', icon: cssModulesIcon }, { name: 'Tailwind CSS', icon: tailwindIcon },
      { name: 'MUI', icon: muiIcon }, { name: 'Mantine', icon: mantineIcon },
      { name: 'Vue.js', icon: vueIcon }, { name: 'Vite', icon: viteIcon },
      { name: 'React Native', icon: reactIcon }, { name: 'Expo', icon: expoIcon },
    ],
  },
  {
    title: 'Diseño y colaboración',
    technologies: [
      { name: 'Figma', icon: figmaIcon }, { name: 'Adobe XD' },
      { name: 'Photoshop' }, { name: 'Illustrator' },
      { name: 'Diseño visual' }, { name: 'Prototipado' },
      { name: 'Git', icon: gitIcon }, { name: 'Postman', icon: postmanIcon },
    ],
  },
  {
    title: 'SEO y analítica digital',
    technologies: [
      { name: 'SEO técnico' }, { name: 'Google Search Console', icon: googleSearchConsoleIcon },
      { name: 'Google Analytics 4', icon: googleAnalyticsIcon },
      { name: 'Google Tag Manager', icon: googleTagManagerIcon },
      { name: 'Umami', icon: umamiIcon }, { name: 'Matomo', icon: matomoIcon },
    ],
  },
  {
    title: 'Backend y datos',
    technologies: [
      { name: 'PHP', icon: phpIcon }, { name: 'Node.js', icon: nodeIcon },
      { name: 'REST APIs' }, { name: 'Prisma', icon: prismaIcon },
      { name: 'Drizzle ORM', icon: drizzleIcon }, { name: 'MySQL', icon: mysqlIcon },
      { name: 'MariaDB', icon: mariadbIcon }, { name: 'PostgreSQL', icon: postgresqlIcon },
      { name: 'MongoDB', icon: mongodbIcon }, { name: 'Amazon DynamoDB' },
      { name: 'Firebase', icon: firebaseIcon }, { name: 'Supabase', icon: supabaseIcon },
      { name: 'Mongoose', icon: mongooseIcon },
    ],
  },
  {
    title: 'Cloud e infraestructura',
    technologies: [
      { name: 'Vercel', icon: vercelIcon }, { name: 'Netlify', icon: netlifyIcon },
      { name: 'Cloudflare', icon: cloudflareIcon }, { name: 'OVH', icon: ovhIcon },
      { name: 'Cloudflare Workers', icon: cloudflareWorkersIcon },
      { name: 'Docker', icon: dockerIcon }, { name: 'CI/CD' },
    ],
  },
  {
    title: 'CMS, email y contenido',
    technologies: [
      { name: 'WordPress', icon: wordpressIcon }, { name: 'VitePress', icon: vitepressIcon },
      { name: 'Directus', icon: directusIcon }, { name: 'Strapi', icon: strapiIcon },
      { name: 'MJML' }, { name: 'Mailchimp', icon: mailchimpIcon },
      { name: 'Integración de emails' },
    ],
  },
  {
    title: 'Desarrollo asistido por IA',
    technologies: [
      { name: 'OpenCode', icon: opencodeIcon }, { name: 'Claude Code', icon: claudeCodeIcon },
      { name: 'GitHub Copilot', icon: copilotIcon }, { name: 'Codex' },
      { name: 'MCP', icon: mcpIcon }, { name: 'OpenAI API' },
      { name: 'Antigravity' },
    ],
  },
  {
    title: 'Testing y calidad',
    technologies: [
      { name: 'Vitest', icon: vitestIcon }, { name: 'Jest', icon: jestIcon },
    ],
  },
]

const previousTechnologies = [
  { name: 'Drupal', icon: drupalIcon }, { name: 'PrestaShop', icon: prestashopIcon },
  { name: 'Laravel', icon: laravelIcon }, { name: 'CodeIgniter', icon: codeigniterIcon },
  { name: 'Angular', icon: angularIcon }, { name: 'Java', icon: openjdkIcon },
  { name: 'Bootstrap', icon: bootstrapIcon }, { name: 'Contentful', icon: contentfulIcon },
]
</script>

<div class="about-intro">
  <img class="about-intro__portrait" src="/assets/img/paul-guillamon.jpeg" alt="Paul Guillamón" width="240" height="240" />
  <div class="about-intro__copy">
    <p class="about-eyebrow"><span></span> Sobre mí</p>
    <h1>Hola, soy Paul Guillamón.</h1>
    <p>Desarrollador web y móvil con <strong>más de 10 años de experiencia</strong> en UI/UX, SEO técnico, analítica digital, marketing y desarrollo. Me gusta unir visión de producto y atención al detalle para crear experiencias digitales que sean útiles y fáciles de usar.</p>
    <p>Empecé mi recorrido con PHP y fui orientándome hacia JavaScript y React. Hoy trabajo especialmente en interfaces, aplicaciones web y diseño de emails responsive, desde la definición visual hasta su implementación y puesta en marcha.</p>
    <div class="about-actions">
      <a class="about-action about-action--primary" href="/cv/CV_Paul_Guillamon.pdf" target="_blank" rel="noopener noreferrer">Descargar CV <span aria-hidden="true">↗</span></a>
      <a class="about-action" href="https://www.linkedin.com/in/paulguillamon/" target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
      <a class="about-action" href="https://github.com/Qu4k3" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
    </div>
  </div>
</div>

<div class="about-stats" aria-label="Experiencia en cifras">
  <div><strong>10+</strong><span>años de experiencia</span></div>
  <div><strong>50+</strong><span>proyectos realizados</span></div>
  <div><strong>15+</strong><span>clientes y equipos</span></div>
</div>

## Mi enfoque

Me interesa participar en todo el proceso: entender el problema, ordenar prioridades y aplicar principios de **UI/UX** para convertir una solución clara en un producto sólido. La experiencia en marketing, SEO técnico y analítica digital también me ayuda a pensar en cómo se descubre y utiliza cada proyecto, no solo en cómo se ve.

<div class="about-principles">
  <section>
    <span class="about-principles__number">01</span>
    <h3>UI/UX con intención</h3>
    <p>Interfaces claras, coherentes y centradas en las personas que las usan.</p>
  </section>
  <section>
    <span class="about-principles__number">02</span>
    <h3>Desarrollo cuidado</h3>
    <p>Soluciones mantenibles, accesibles y adaptadas a cada producto.</p>
  </section>
  <section>
    <span class="about-principles__number">03</span>
    <h3>Visión de conjunto</h3>
    <p>Diseño, tecnología, contenido y objetivos trabajando en la misma dirección.</p>
  </section>
</div>

## Proyectos

Aquí puedes ver una selección de mis proyectos y trabajos realizados.

<div class="about-actions" style="margin: 8px 0 48px;">
  <a class="about-action about-action--primary" href="/proyectos">Ver proyectos <span aria-hidden="true">→</span></a>
</div>

## Tecnologías y herramientas

Estas son algunas de las herramientas y tecnologías con las que he trabajado a lo largo de mi trayectoria. Mi foco actual está en el desarrollo de interfaces y aplicaciones web.

<div class="about-stack">
  <section v-for="group in technologyGroups" :key="group.title">
    <h3>{{ group.title }}</h3>
    <ul class="about-tags">
      <li v-for="technology in group.technologies" :key="technology.name">
        <span v-if="technology.icon" class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
        <span>{{ technology.name }}</span>
      </li>
    </ul>
  </section>
</div>

<details class="about-previous-stack">
  <summary>Tecnologías que ya no uso o no mantengo al día</summary>
  <ul class="about-tags">
    <li v-for="technology in previousTechnologies" :key="technology.name">
      <span class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
      <span>{{ technology.name }}</span>
    </li>
  </ul>
</details>

<div class="about-closing">
  <p>¿Tienes una idea o un proyecto entre manos?</p>
  <a href="https://www.linkedin.com/in/paulguillamon/" target="_blank" rel="noopener noreferrer">Conectemos en LinkedIn <span aria-hidden="true">↗</span></a>
</div>
