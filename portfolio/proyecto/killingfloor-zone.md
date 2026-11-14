<script setup>
import nextIcon from 'simple-icons/icons/nextdotjs.svg?raw'
import tailwindIcon from 'simple-icons/icons/tailwindcss.svg?raw'
import vercelIcon from 'simple-icons/icons/vercel.svg?raw'
import steamIcon from 'simple-icons/icons/steam.svg?raw'

const technologies = [
  { name: 'Next.js', icon: nextIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Vercel', icon: vercelIcon },
  { name: 'Steam API', icon: steamIcon },
]
</script>

# Killing Floor Zone

<div class="project-logo"><img src="/assets/img/favicons/killingfloor-zone.png" alt="Killing Floor Zone" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://killingfloor.zone" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Plataforma para consultar estadísticas, logros y contenido de Killing Floor, conectada con Steam. La versión actual continúa la evolución del proyecto con una base renovada en Next.js y Tailwind CSS, integrada con Steam API.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2023 | En desarrollo |

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
| 2026 | Plataforma actual | Sitio para consultar estadísticas, logros y contenido de Killing Floor mediante Steam API, con Next.js y Tailwind CSS. |
| 2023 | Inicio del proyecto | Comienza el proyecto Killing Floor Zone. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [killingfloor.zone](https://killingfloor.zone) | [19/11/2023](https://rdap.identitydigital.services/rdap/domain/killingfloor.zone) | — |
