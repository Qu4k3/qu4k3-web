<script setup>
import reactIcon from 'simple-icons/icons/react.svg?raw'
import nextIcon from 'simple-icons/icons/nextdotjs.svg?raw'
import postmanIcon from 'simple-icons/icons/postman.svg?raw'
import nodeIcon from 'simple-icons/icons/nodedotjs.svg?raw'
import vercelIcon from 'simple-icons/icons/vercel.svg?raw'
import bootstrapIcon from 'simple-icons/icons/bootstrap.svg?raw'

const technologies = [
  { name: 'React', icon: reactIcon },
  { name: 'Next.js', icon: nextIcon },
  { name: 'React Hooks' },
  { name: 'Postman', icon: postmanIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Vercel', icon: vercelIcon },
  { name: 'Bootstrap 5', icon: bootstrapIcon },
  { name: 'qrcode.react' },
  { name: 'react-hook-form' },
  { name: 'react-toast-notifications' },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/uao-app-eventos.png" alt="" aria-hidden="true" width="174" height="48" /></span> UAO App Eventos


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://eventos.uao.es" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">→</span></a>
  <a class="about-action" href="https://github.com/Qu4k3/uao-app-eventos" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">→</span></a>
</div>

## Sobre el proyecto

Aplicación web para la gestión de eventos y acciones promocionales en los centros de la UAO. Permite generar códigos QR y recoger datos mediante formularios multiidioma, y se conecta con la API de Microsoft Dynamics para centralizar las inscripciones y los leads.

Me encargué del diseño y del desarrollo fullstack, desde la interfaz hasta la integración con los servicios de la universidad.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 11/03/2021 | Finalizado en 2021 |

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
| 2021 | v1.1.0 | Aplicación web de eventos con generación de QR, formularios multiidioma e integración con la API de Microsoft Dynamics. |
