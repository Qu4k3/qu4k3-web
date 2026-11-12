<img src="/assets/img/projects/animeinstitute.png" alt="Anime Institute" width="35" height="35" />

<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# Anime Institute

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://animeinstitute.net" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web y comunidad dedicada a compartir contenidos y recursos sobre anime.

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
| 2018–2019 | Sitio y comunidad de anime | Sitio web y comunidad para compartir contenidos y recursos sobre anime, desarrollada con WordPress. |
