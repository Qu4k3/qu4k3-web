<img src="/assets/img/favicons/esmena-cat.png" alt="L'Esmena" width="35" height="35" />

<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import elementorIcon from 'simple-icons/icons/elementor.svg?raw'
import analyticsIcon from 'simple-icons/icons/googleanalytics.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'Elementor', icon: elementorIcon },
  { name: 'OceanWP' },
  { name: 'Contact Form 7' },
  { name: 'Polylang' },
  { name: 'Google Site Kit', icon: analyticsIcon },
]
</script>

# L'Esmena

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://esmena.cat" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web corporativo multilingüe para L'Esmena, desarrollado con WordPress y herramientas de edición visual.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2021 | Finalizado |

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
| 2021 | Sitio web corporativo | Web multilingüe para presentar L'Esmena, basada en WordPress con Elementor, OceanWP y Polylang. |
