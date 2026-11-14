<script setup>
import nextIcon from 'simple-icons/icons/nextdotjs.svg?raw'
import mantineIcon from 'simple-icons/icons/mantine.svg?raw'
import vercelIcon from 'simple-icons/icons/vercel.svg?raw'
import postgresqlIcon from 'simple-icons/icons/postgresql.svg?raw'

const technologies = [
  { name: 'Next.js', icon: nextIcon },
  { name: 'Mantine', icon: mantineIcon },
  { name: 'Vercel', icon: vercelIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/inefable-day.png" alt="" aria-hidden="true" width="48" height="48" /></span> Inefable Day


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://inefable.day" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/Qu4k3/inefable" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Aplicación web para crear y compartir páginas personales con una experiencia visual cuidada.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2024 | Finalizado |

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
| Septiembre de 2026 | Mantenimiento | Se restaura la web original y se incorporan analítica con Umami y medición de métricas web con `web-vitals`. [Historial del repositorio](https://github.com/Qu4k3/inefable/commits/main). |
| 2024 | Lanzamiento del proyecto | Se publica Inefable Day, una aplicación para crear y compartir páginas personales. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [inefable.day](https://inefable.day) | [28/08/2023](https://pubapi.registry.google/rdap/domain/inefable.day) | — |
