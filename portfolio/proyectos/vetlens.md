<script setup>
import astroIcon from 'simple-icons/icons/astro.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'
import expoIcon from 'simple-icons/icons/expo.svg?raw'

const technologies = [
  { name: 'Astro', icon: astroIcon },
  { name: 'Netlify', icon: netlifyIcon },
  { name: 'Expo', icon: expoIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/vetlens.png" alt="" aria-hidden="true" width="48" height="48" /></span> VET lens

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://vetlens.es" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Versión de MEDI lens para medicamentos veterinarios.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2025 | En desarrollo |

## Tecnologías

<ul class="about-tags">
  <li v-for="technology in technologies" :key="technology.name">
    <span v-if="technology.icon" class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
    <span>{{ technology.name }}</span>
  </li>
</ul>

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [vetlens.es](https://vetlens.es) | 31/07/2025 | - |
