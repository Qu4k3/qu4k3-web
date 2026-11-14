<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
]
</script>

# NVersus

<div class="project-logo"><img src="/assets/img/projects/icons/nversus.png" alt="NVersus" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://nversus.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Proyecto web experimental centrado en una comunidad y contenidos de entretenimiento.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2018 | Abandonado |

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
| 2018 | Proyecto web experimental | Proyecto experimental para una comunidad y contenidos de entretenimiento, creado con WordPress. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [nversus.com](https://nversus.com) | [19/09/2025 (registro consultado)](https://rdap.verisign.com/com/v1/domain/nversus.com); no consta la alta original de 2018 | No documentado |
