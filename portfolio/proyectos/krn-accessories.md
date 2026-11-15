<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/krn-accessories.jpg" alt="" aria-hidden="true" width="48" height="48" /></span> KRN Accessories


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://krnaccessories.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web para presentar una colección de accesorios y productos de moda.

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
| 2016 | Sitio de presentación | Web para presentar una colección de accesorios y productos de moda, desarrollada con WordPress. |
