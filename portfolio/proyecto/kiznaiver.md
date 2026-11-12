<img src="/assets/img/favicons/kiznaiver-net.png" alt="Kiznaiver" width="35" height="35" />

<script setup>
import html5Icon from 'simple-icons/icons/html5.svg?raw'
import css3Icon from 'simple-icons/icons/css3.svg?raw'
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'Video.js' },
]
</script>

# Kiznaiver

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://qu4k3.com/archive/kiznaiver/" target="_blank" rel="noopener noreferrer">Landing archivada <span aria-hidden="true">↗</span></a>
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

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [kiznaiver.net](https://kiznaiver.net) | 25/05/2016 (dato aportado) | 25/05/2022 |
