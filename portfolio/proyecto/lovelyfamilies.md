<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import googleAnalyticsIcon from 'simple-icons/icons/googleanalytics.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'Google Analytics', icon: googleAnalyticsIcon },
]
</script>

# Lovely Families

<div class="project-logo"><img src="/assets/img/favicons/lovelyfamilies-com.png" alt="Lovely Families" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://lovelyfamilies.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Auditoría de marketing del sitio WordPress de Lovely Families.

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
| 2016 | Auditoría de marketing | Revisión de marketing para el sitio WordPress de Lovely Families, con Google Analytics entre las herramientas relacionadas. |
