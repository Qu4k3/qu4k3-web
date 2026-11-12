<img src="/assets/img/favicons/evoluginos-com.png" alt="Evoluginos" width="35" height="35" />

<script setup>
import html5Icon from 'simple-icons/icons/html5.svg?raw'
import css3Icon from 'simple-icons/icons/css3.svg?raw'
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
]
</script>

# Evoluginos

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
