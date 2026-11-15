<script setup>
import rubyOnRailsIcon from 'simple-icons/icons/rubyonrails.svg?raw'

const technologies = [
  { name: 'Ruby on Rails', icon: rubyOnRailsIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/mundolibros.svg" alt="" aria-hidden="true" width="48" height="48" /></span> Mundolibros

## Sobre el proyecto

<div class="project-logo project-logo-alt"><img src="/assets/img/projects/logos/mundolibros.svg" alt="Insofting" height="56" /></div>

Era un repositorio de descarga gratuita de libros nutrido de colecciones de terceros, desarrollado con Ruby on Rails.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 10/02/2018 | Abandonado (10/02/2021) |

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
| mundolibros.net | 10/02/2018 | 10/02/2021 |
