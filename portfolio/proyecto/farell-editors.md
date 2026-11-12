<img src="/assets/img/favicons/farelleditors-cat.png" alt="Farell Editors" width="35" height="35" />

<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import ovhIcon from 'simple-icons/icons/ovh.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'OVH', icon: ovhIcon },
]
</script>

# Farell Editors

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://farelleditors.cat" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web corporativo para Farell Editors, editorial especializada en edición y contenidos.

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
| 2020 | Sitio web corporativo | Sitio para presentar los servicios editoriales y de contenidos de Farell Editors. |
