<script setup>
import reactIcon from 'simple-icons/icons/react.svg?raw'
import expoIcon from 'simple-icons/icons/expo.svg?raw'

const technologies = [
  { name: 'React Native', icon: reactIcon },
  { name: 'Expo', icon: expoIcon },
  { name: 'Async Storage' },
  { name: 'Microsoft Dynamics API' },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/ceu-es.png" alt="" aria-hidden="true" width="48" height="48" /></span> CEU Eventos (App)


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://ceu.es" target="_blank" rel="noopener noreferrer">Sitio de CEU <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/Qu4k3/ceu-events-scanner" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Prueba de concepto y MVP móvil para escanear invitaciones a eventos y registrar la asistencia. Se conectaba con Microsoft Dynamics para que, al finalizar cada evento, se pudieran enviar correos y encuestas de valoración solo a las personas asistentes.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2021 | Abandonado |

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
| 2021 | Prueba de concepto / MVP | Escaneo de invitaciones y registro de asistencia, con integración en Microsoft Dynamics para gestionar comunicaciones y encuestas posteriores al evento. El desarrollo se abandonó antes de convertirse en un producto completo. |
