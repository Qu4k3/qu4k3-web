<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/clinicaabedentpodologia-com.png" alt="" aria-hidden="true" width="48" height="48" /></span> Clínica Abedent Podología


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://clinicaabedentpodologia.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web informativo para una clínica especializada en podología y atención sanitaria.

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
| 2019 | Sitio web informativo | Web para presentar la clínica, sus servicios y su atención especializada en podología. |
