<script setup>
import html5Icon from 'simple-icons/icons/html5.svg?raw'
import css3Icon from 'simple-icons/icons/css3.svg?raw'
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Canvas' },
]
</script>

# Pong

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://qu4k3.com/pong" target="_blank" rel="noopener noreferrer">Demo del juego <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/Qu4k3/pong" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Juego clásico de Pong para navegador, dibujado con HTML5 Canvas y programado en JavaScript.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2017 | Finalizado |

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
| 18/02/2017 | Juego de Pong en Canvas | Primera versión disponible en GitHub del juego clásico para navegador. |
