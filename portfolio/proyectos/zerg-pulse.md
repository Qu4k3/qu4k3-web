<script setup>
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'
import nodejsIcon from 'simple-icons/icons/nodedotjs.svg?raw'

const technologies = [
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Node.js', icon: nodejsIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/zerg-pulse.gif" alt="" aria-hidden="true" width="48" height="48" /></span> Zerg Pulse

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://github.com/Qu4k3/zerg-pulse" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Prueba de juego multijugador en línea para navegador, con salas y control del personaje mediante el teclado.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2017 | Abandonado |

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
| 09/02/2017 | Primera versión en GitHub | Repositorio inicial de una prueba de juego multijugador web. |
