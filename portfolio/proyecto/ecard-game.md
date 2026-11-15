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

# <span class="project-logo"><img src="/assets/img/favicons/ecardgame-io.png" alt="" aria-hidden="true" width="48" height="48" /></span> E-Card Game


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://qu4k3.com/archive/ecardgame/" target="_blank" rel="noopener noreferrer">Demo archivada <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Juego web de E-Card, inspirado en el anime *Gyakkyou Burai Kaiji: Ultimate Survivor*, para jugar una partida de cartas psicológica contra otras personas.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 16/01/2017 | Finalizado |

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
| 16/01/2017 | Juego web de E-Card | Versión web del juego de cartas de Kaiji, desarrollada con HTML, CSS y JavaScript. |

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [ecardgame.io](https://ecardgame.io) | 16/01/2017 | — |
