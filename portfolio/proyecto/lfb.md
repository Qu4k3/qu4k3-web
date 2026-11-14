<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# Lycée Français de Barcelone (LFB)

<div class="project-logo"><img src="/assets/img/favicons/lfb-es.png" alt="Lycée Français de Barcelone" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://lfb.es" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web institucional del Liceo Francés de Barcelona.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2018 | Finalizado |

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
| 2018–2020 | Web institucional | Sitio web institucional para el Liceo Francés de Barcelona, desarrollado con WordPress. |
