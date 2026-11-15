[![Netlify Status](https://api.netlify.com/api/v1/badges/061d6f73-e0da-41c7-97bc-acc0004b02cb/deploy-status)](https://app.netlify.com/sites/tau-studio/deploys)

<script setup>
import astroIcon from 'simple-icons/icons/astro.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'

const technologies = [
  { name: 'Astro', icon: astroIcon },
  { name: 'SEO' },
  { name: 'Netlify', icon: netlifyIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/tau-logo.svg" alt="" aria-hidden="true" width="48" height="48" /></span> Tau Studio

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://tau.studio" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/tau/studio" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web de un estudio digital orientado a crear experiencias web y estrategias para conectar marcas y personas. Presenta servicios de **diseño web**, **desarrollo**, **marketing digital** y **SEO**, con una arquitectura estática desarrollada con **Astro** y optimizada para buscadores.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2019 | En desarrollo |

## Tecnologías

<ul class="about-tags">
  <li v-for="technology in technologies" :key="technology.name">
    <span v-if="technology.icon" class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
    <span>{{ technology.name }}</span>
  </li>
</ul>

## Evolución

| Fecha | Versión o hito | Cambios |
|---|---|---|
| 2026 | v2 | Migración del sitio a Astro. [Código](https://github.com/tau/studio). |
| 2021 | v1 | Desarrollo del sitio con Next.js. [Código](https://github.com/tau/studio-nextjs). |
| 2019 | v0 | Primera versión del sitio con 11ty (Eleventy). [Código](https://github.com/tau/website). |

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [tau.studio](https://tau.studio) | [28/05/2023 (registro RDAP actual)](https://rdap.identitydigital.services/rdap/domain/tau.studio); el proyecto comenzó en 2019 | — |
