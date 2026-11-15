[![Netlify Status](https://api.netlify.com/api/v1/badges/7f149fce-dcd9-45d3-83f5-d8e794768a1e/deploy-status)](https://app.netlify.com/projects/disboard/deploys)

<script setup>
import astroIcon from 'simple-icons/icons/astro.svg?raw'
import sassIcon from 'simple-icons/icons/sass.svg?raw'
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'

const technologies = [
  { name: 'Astro', icon: astroIcon },
  { name: 'Sass (SCSS)', icon: sassIcon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'JSON' },
  { name: 'Netlify', icon: netlifyIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/disboard-team.png" alt="" aria-hidden="true" width="48" height="48" /></span> Disboard Team


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://disboard.team" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/disboard-team/disboard-team" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio oficial del equipo competitivo Disboard Team para consultar miembros, equipos y resultados de partidas. Calcula estadísticas durante la compilación y publica endpoints JSON para jugadores, equipos y wars.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2018 | En desarrollo |

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
| 13 de octubre de 2026 | v1 | Migración a Astro, con páginas para jugadores, equipos y wars, estadísticas generadas al compilar y endpoints JSON públicos. [Código](https://github.com/disboard-team/disboard-team). |
| 1 de abril de 2019 | Inicio del repositorio | El repositorio se inicia como `disboard-dashboard`. [Commit inicial](https://github.com/disboard-team/disboard-team/commit/a4c31272ecadb6eef8209afceb4c0a79ee8f3e8d). |

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [disboard.team](https://disboard.team) | 07/02/2018 | — |
| [disboard.jp](https://disboard.jp) | 08/02/2019 | 25/02/2022 |