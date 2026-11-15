<script setup>
import html5Icon from 'simple-icons/icons/html5.svg?raw'
import css3Icon from 'simple-icons/icons/css.svg?raw'
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/kiznaiver.png" alt="" aria-hidden="true" width="48" height="48" /></span> Kiznaiver


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://qu4k3.com/archive/kiznaiver/" target="_blank" rel="noopener noreferrer">Landing archivada <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/Qu4k3/kiznaiver" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Landing dedicada a *Kiznaiver*, con la introducción del anime como vídeo de fondo.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 25/05/2016 | Finalizado (25/05/2022) |

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
| 25/05/2016–25/05/2022 | Landing de Kiznaiver | Sitio temático con la introducción del anime como vídeo de fondo. |

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [kiznaiver.net](https://kiznaiver.net) | 25/05/2016 | 25/05/2022 |
