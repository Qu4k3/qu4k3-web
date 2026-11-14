<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import ovhIcon from 'simple-icons/icons/ovh.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'OVH', icon: ovhIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/js-arquitecto-com.png" alt="" aria-hidden="true" width="48" height="48" /></span> JS Arquitecto


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://js-arquitecto.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web profesional para mostrar los servicios y proyectos de un estudio de arquitectura.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2019 | Finalizado |

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
| 2019 | Sitio web profesional | Web para presentar los servicios y proyectos del estudio de arquitectura. |
