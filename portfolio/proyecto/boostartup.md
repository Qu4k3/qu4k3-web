<img src="/assets/img/favicons/boostartup-es.png" alt="Boostartup" width="35" height="35" />

<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# Boostartup

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://boostartup.es" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web para presentar servicios de apoyo, estrategia y crecimiento para startups.

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
| 2016 | Web de servicios para startups | Sitio web para presentar servicios de apoyo, estrategia y crecimiento para startups, desarrollado con WordPress. |
