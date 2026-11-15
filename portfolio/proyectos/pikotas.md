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

# Pikotas

## Sobre el proyecto

Iba a ser una landing divertida como ejercicio práctico de entrenamiento al diseño y animación con HTML, CSS y JS para la famosa marca de caramelos.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 02/06/2016 | Abandonado (03/06/2017) |

## Tecnologías

<ul class="about-tags">
  <li v-for="technology in technologies" :key="technology.name">
    <span v-if="technology.icon" class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
    <span>{{ technology.name }}</span>
  </li>
</ul>

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| pikotas.com | 02/06/2016 | 02/06/2017 |
| pikotas.es | 03/06/2016 | 03/06/2017 |
