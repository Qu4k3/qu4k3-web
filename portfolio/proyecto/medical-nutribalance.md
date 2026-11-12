<img src="/assets/img/favicons/medicalnutribalance-com.png" alt="Medical Nutribalance" width="35" height="35" />

<script setup>
import html5Icon from 'simple-icons/icons/html5.svg?raw'
import css3Icon from 'simple-icons/icons/css3.svg?raw'

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
]
</script>

# Medical Nutribalance

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://medicalnutribalance.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web informativo para servicios relacionados con nutrición y bienestar.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2015 | Finalizado |

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
| 2015 | Sitio web informativo | Sitio para presentar servicios relacionados con nutrición y bienestar, construido con HTML5 y CSS3. |
