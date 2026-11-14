[![Netlify Status](https://api.netlify.com/api/v1/badges/3ff9d576-2500-4d64-8cb8-7a36244138c0/deploy-status)](https://app.netlify.com/sites/fibers/deploys)

<script setup>
import astroIcon from 'simple-icons/icons/astro.svg?raw'
import muiIcon from 'simple-icons/icons/mui.svg?raw'
import supabaseIcon from 'simple-icons/icons/supabase.svg?raw'

const technologies = [
  { name: 'Astro', icon: astroIcon },
  { name: 'MUI', icon: muiIcon },
  { name: 'Supabase', icon: supabaseIcon },
]
</script>

# Fibers

<div class="project-logo"><img src="/assets/img/projects/logos/fibers.svg" alt="Fibers" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://fibers.cat" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/fibers-cat/fibers" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Plataforma educativa para organizar recursos, apuntes y contenidos de estudiantes de informática.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2016 | En desarrollo |

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
| 2 de octubre de 2026 | v3 | Reinicio del proyecto con Astro, MUI y Supabase. |
| 20 de septiembre de 2022 | Intento de relanzamiento | Se intenta relanzar Fibers con Next.js, MUI y Firebase, pero el proyecto no llega a materializarse. |
| 8 de julio de 2017 | v2 | Se intenta crear una nueva web en PHP con un sistema de publicación que muestra a los colaboradores como autores y deja atrás las aportaciones por correo electrónico. Se trabaja en una nueva navegación y forma de interactuar. |
| 8 de octubre de 2016 | v1 | Fibers retoma el proyecto con una primera versión pública, gratuita y abierta, hecha con Bootstrap. |
| 22 de septiembre de 2016 | v0 | Fibers retoma el proyecto con una primera versión pública, gratuita y abierta, hecha con Bootstrap. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [fibers.cat](https://fibers.cat) | [21/09/2016 (RDAP)](https://rdap.nic.cat/domain/fibers.cat) | — |
