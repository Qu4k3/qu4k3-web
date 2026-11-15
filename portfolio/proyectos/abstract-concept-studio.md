<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/abstract-concept.webp" alt="" aria-hidden="true" width="48" height="48" /></span> Abstract Concept

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="http://abstractconcept.studio" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Ayudé a montar la web de Abstract Concept Studio en WordPress.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2018 | Finalizado (2018) |

## Tecnologías

<ul class="about-tags">
  <li v-for="technology in technologies" :key="technology.name">
    <span v-if="technology.icon" class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
    <span>{{ technology.name }}</span>
  </li>
</ul>
