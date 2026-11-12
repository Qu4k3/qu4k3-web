<img src="/assets/img/favicons/disboard-team.png" alt="Disboard Web" width="35" height="35" />

<script setup>
import nextIcon from 'simple-icons/icons/nextdotjs.svg?raw'
import reactIcon from 'simple-icons/icons/react.svg?raw'

const technologies = [
  { name: 'Next.js', icon: nextIcon },
  { name: 'React', icon: reactIcon },
]
</script>

# Disboard Web

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://disboard.team/v0/" target="_blank" rel="noopener noreferrer">Archivo del directorio <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/disboard-team/disboard-website" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Directorio web de servidores de Discord para explorar comunidades mediante navegación y búsqueda.

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
| 28 de octubre de 2022 | Registro posterior del repositorio | Aparece una configuración para Next.js 13 y React 18, aunque el proyecto se considera finalizado en 2020. [Historial](https://github.com/disboard-team/disboard-website/commit/bd39827988e14f1f969c677aafbb2249c1d82004). |
| 11 de mayo de 2020 | Migración técnica | El sitio pasa de su implementación inicial a Next.js. [Historial](https://github.com/disboard-team/disboard-website/commit/bd8a420c174b4bc3757c34c276ac084158975edb). |
| 2018 | v0 | Primera versión del directorio de servidores de Discord. [Historial](https://github.com/disboard-team/disboard-website/commits/main/). |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [disboard.team](https://disboard.team) | 07/02/2018 | — |
