<script setup>
import html5Icon from 'simple-icons/icons/html5.svg?raw'
import css3Icon from 'simple-icons/icons/css.svg?raw'
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'
import bootstrapIcon from 'simple-icons/icons/bootstrap.svg?raw'
import jqueryIcon from 'simple-icons/icons/jquery.svg?raw'

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Bootstrap', icon: bootstrapIcon },
  { name: 'jQuery', icon: jqueryIcon },
  { name: 'Flat UI Pro' },
  { name: 'Video.js' },
  { name: 'Google Analytics' },
]
</script>

# Spanish National League (SNL)

<div class="project-logo"><img src="/archive/mk/mariokartworld/snl/assets/images/snllogo.png" alt="Spanish National League" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://qu4k3.com/archive/mk/mariokartworld/snl/index.html" target="_blank" rel="noopener noreferrer">Web archivada de la SNL <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Web de la Liga Española de Mario Kart 8 Deluxe, creada para la comunidad española. Reunía resultados semanales, tablas y clasificaciones.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| Por confirmar | Por confirmar |

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
| 2018 | Resultados de liga archivados | La copia conservada incluye resultados y tablas de partidas de 2018. |
