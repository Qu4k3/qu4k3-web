<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import ovhIcon from 'simple-icons/icons/ovh.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'OVH', icon: ovhIcon },
]
</script>

# Go To iKoncierge

<div class="project-logo"><img src="/assets/img/favicons/gotoikoncierge-com.png" alt="Go To iKoncierge" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://gotoikoncierge.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web para presentar servicios de conserjería y experiencias personalizadas para clientes.

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
| 2019 | Sitio web de servicios de conserjería | Web para presentar servicios personalizados y experiencias para clientes. |
