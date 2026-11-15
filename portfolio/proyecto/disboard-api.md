<script setup>
import nodeIcon from 'simple-icons/icons/nodedotjs.svg?raw'
import mongooseIcon from 'simple-icons/icons/mongoose.svg?raw'
import mongodbIcon from 'simple-icons/icons/mongodb.svg?raw'

const technologies = [
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express' },
  { name: 'Mongoose', icon: mongooseIcon },
  { name: 'MongoDB Atlas', icon: mongodbIcon },
  { name: 'Nano ID' },
  { name: 'Heroku' },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/api-disboard-team.png" alt="" aria-hidden="true" width="48" height="48" /></span> Disboard API


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://api.disboard.team" target="_blank" rel="noopener noreferrer">API <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/disboard-team/disboard-api" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

API REST para servir los datos de servidores, usuarios y comunidades de Disboard. Se conectaba a MongoDB Atlas mediante Mongoose y estaba desplegada en Heroku.

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
| 6 de febrero de 2023 | Mantenimiento del repositorio | El repositorio recibió cambios de mantenimiento después del fin del proyecto. [Historial](https://github.com/disboard-team/disboard-api/commits/master/). |
| 2018–2020 | v0 | API de la plataforma original de Disboard, desarrollada con Node.js, Express y MongoDB Atlas. [Código](https://github.com/disboard-team/disboard-api). |

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [api.disboard.team](https://api.disboard.team) | Subdominio de `disboard.team` | - |
