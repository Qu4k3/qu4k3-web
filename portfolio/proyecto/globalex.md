<img src="/assets/img/favicons/pmglobalex-com.png" alt="Globalex Consulting" width="35" height="35" />

<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'Adobe XD' },
]
</script>

# Globalex Consulting

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://pmglobalex.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web corporativo para presentar los servicios de consultoría de Globalex.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2020 | Finalizado en 2021 |

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
| 2020–2021 | Sitio web corporativo | Diseño en Adobe XD y desarrollo del sitio en WordPress para explicar los servicios de consultoría de Globalex. |
