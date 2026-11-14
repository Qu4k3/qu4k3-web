<script setup>
import astroIcon from 'simple-icons/icons/astro.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'

const technologies = [
  { name: 'Astro', icon: astroIcon },
  { name: 'Netlify', icon: netlifyIcon },
  { name: 'Netlify Forms' },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/kinfelina-org.png" alt="" aria-hidden="true" width="48" height="48" /></span> Kin Felina


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://kinfelina.org/" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/kinfelina/web" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web para Kin Felina.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| Septiembre de 2026 | En desarrollo |

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
| Desde septiembre de 2026 | Desarrollo del sitio web | Sitio web de Kin Felina desarrollado con Astro y desplegado en Netlify. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [kinfelina.org](https://kinfelina.org/) | [17/05/2026](https://rdap.publicinterestregistry.org/rdap/domain/kinfelina.org) | — |
