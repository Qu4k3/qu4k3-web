<script setup>
import expoIcon from 'simple-icons/icons/expo.svg?raw'

const technologies = [
  { name: 'Expo', icon: expoIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/vetlens.png" alt="" aria-hidden="true" width="48" height="48" /></span> VET lens — App

## Sobre el proyecto

Versión de MEDI lens para medicamentos veterinarios (app).

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2025 | En desarrollo |

## Tecnologías

<ul class="about-tags">
  <li v-for="technology in technologies" :key="technology.name">
    <span v-if="technology.icon" class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
    <span>{{ technology.name }}</span>
  </li>
</ul>
