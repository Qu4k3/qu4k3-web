<img src="/assets/img/favicons/llibrenet-com.png" alt="Llibrenet" width="35" height="35" />

<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# Llibrenet

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://llibrenet.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Auditoría de seguridad del sitio de Llibrenet y revisión de su planteamiento de actualizaciones.

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
| 2021 | Auditoría y planificación | Revisión de seguridad y planteamiento de actualizaciones para el sitio de Llibrenet. |
