<script setup>
import laravelIcon from 'simple-icons/icons/laravel.svg?raw'
import nodeIcon from 'simple-icons/icons/nodedotjs.svg?raw'

const technologies = [
  { name: 'Adobe XD' },
  { name: 'MJML' },
  { name: 'GrapeJS' },
  { name: 'Laravel', icon: laravelIcon },
  { name: 'Node.js', icon: nodeIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/inone.svg" alt="" aria-hidden="true" width="48" height="48" /></span> inOne


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://inone.es" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sistema de plantillas y contenidos para crear comunicaciones digitales y campañas de email, con un sistema de diseño, maquetación de correos y un editor MJML con GrapeJS.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2021 | Finalizado en 2022 |

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
| 2021–2022 | Sistema de plantillas y campañas | Desarrollo del sistema de diseño, la maquetación de emails y un editor MJML basado en GrapeJS. |
