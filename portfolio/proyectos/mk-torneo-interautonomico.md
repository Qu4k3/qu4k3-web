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
  { name: 'GSAP' },
  { name: 'Flickity' },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/mk-torneo.webp" alt="" aria-hidden="true" width="48" height="48" /></span> Torneo Interautonómico de Mario Kart


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://qu4k3.com/archive/mk/mariokartworld/torneo-interautonomico/index.html" target="_blank" rel="noopener noreferrer">Web archivada del torneo <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Web informativa para un torneo de Mario Kart en el que los jugadores representaban a sus comunidades autónomas. Incluía normas, inscripción, calendario y resultados.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 24/03/2018 (inicio del torneo) | Finalizado |

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
| 24/03/2018 | Inicio del torneo | La competición enfrenta a equipos de las distintas comunidades autónomas españolas. |
