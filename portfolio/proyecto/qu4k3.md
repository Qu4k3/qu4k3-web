[![Netlify Status](https://api.netlify.com/api/v1/badges/3417b1ae-2b1d-49fc-835c-8a020085d355/deploy-status)](https://app.netlify.com/sites/qu4k3/deploys)

<script setup>
import vitepressIcon from 'simple-icons/icons/vitepress.svg?raw'
import vueIcon from 'simple-icons/icons/vuedotjs.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'

const technologies = [
  { name: 'VitePress', icon: vitepressIcon },
  { name: 'Vue.js', icon: vueIcon },
  { name: 'Netlify', icon: netlifyIcon },
]
</script>

# Qu4k3

<div class="project-logo"><img src="/assets/img/favicons/qu4k3-com.png" alt="Qu4k3" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://qu4k3.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/qu4k3-web" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Portfolio personal de Paul Guillamón para presentar proyectos, experiencia y trabajos realizados.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2015 | En desarrollo |

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
| Desde el 23 de septiembre de 2024 | v3 | VitePress 1.3.4 ya aparece en el primer commit disponible del repositorio actual. La fecha exacta de migración no está en el historial consultado. |
| 2017 | v2 | El portfolio organiza los proyectos y trabajos mediante tarjetas. El [repositorio de esta etapa](https://github.com/Qu4k3/qu4k3-web-2017) conserva la página de 2017. |
| 2015 | v1 | Se añaden secciones desplegables y accesos directos. |
| 2015 | v0 | Primera versión del portfolio, organizada con tablas y una estética hacker. |

## Dominios

| Dominio | Alta | Fin |
|---|---|---|
| [qu4k3.com](https://qu4k3.com) | 11/2015 | — |
| [qu4k3.dev](https://qu4k3.dev) | 03/2023 | 03/2025 |
