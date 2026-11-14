<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/lei-network-com.png" alt="" aria-hidden="true" width="48" height="48" /></span> LEI Network


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://lei-network.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web corporativo para la red LEI y la presentación de sus servicios profesionales.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2020 | Finalizado |

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
| 2020 | Sitio web corporativo | Sitio WordPress para presentar la red LEI y sus servicios profesionales. |
