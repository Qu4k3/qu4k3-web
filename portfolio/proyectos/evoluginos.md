<script setup>
import html5Icon from 'simple-icons/icons/html5.svg?raw'
import css3Icon from 'simple-icons/icons/css.svg?raw'
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/evoluginos.png" alt="" aria-hidden="true" width="48" height="48" /></span> Evoluginos


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://evoluginos.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web para presentar la actividad y los servicios de Evoluginos.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2016 | Finalizado |

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
| 2016 | Sitio de presentación | Web para presentar la actividad y los servicios de Evoluginos, desarrollada con HTML, CSS y JavaScript. |
