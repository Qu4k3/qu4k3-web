[![Netlify Status](https://api.netlify.com/api/v1/badges/2d6ac58f-f8a7-4637-8912-384c684cd946/deploy-status)](https://app.netlify.com/sites/medilens/deploys)

<img src="/assets/img/favicons/medilens-es.png" alt="MEDI lens" width="35" height="35" />

<script setup>
import astroIcon from 'simple-icons/icons/astro.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'

const technologies = [
  { name: 'Astro', icon: astroIcon },
  { name: 'Netlify', icon: netlifyIcon },
]
</script>

# MEDI lens — Landing

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://medilens.es" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/medi-lens/medilens-landing" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Landing informativa de MEDI lens, una aplicación móvil para consultar medicamentos y gestionar un botiquín digital.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2024 | En desarrollo |

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
| Noviembre de 2026 | Migración a Astro | La landing pasa de VitePress a Astro. |
| 2025 | Lanzamiento inicial | Publicación de la landing informativa de MEDI lens desarrollada con VitePress. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [medilens.es](https://medilens.es) | No publicada | — |
