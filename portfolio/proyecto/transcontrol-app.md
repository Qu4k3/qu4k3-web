<script setup>
import reactIcon from 'simple-icons/icons/react.svg?raw'
import muiIcon from 'simple-icons/icons/mui.svg?raw'

const technologies = [
  { name: 'React', icon: reactIcon },
  { name: 'MUI', icon: muiIcon },
  { name: 'SPA' },
  { name: 'Dashboard' },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/transcontrol-logo.svg" alt="" aria-hidden="true" width="196" height="48" /></span> Transcontrol App


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://app.transcontrol.es" target="_blank" rel="noopener noreferrer">Aplicación <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://transcontrol.es" target="_blank" rel="noopener noreferrer">Sitio web de Transcontrol <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Aplicación web para centralizar la operativa diaria de una empresa de transporte: vehículos y remolques, conductores, servicios, viajes, documentación y métricas de flota.

La SPA está construida con **React y MUI**, con una interfaz de dashboard orientada a consultar información rápidamente y trabajar con los distintos equipos y permisos de la empresa.

### Funcionalidades principales

- Gestión de vehículos, remolques y disponibilidad.
- Fichas de conductores, asignaciones y permisos por equipos.
- Planificación y seguimiento de viajes y servicios.
- Panel de control con KPIs de la actividad.
- Generación de documentación DeCA a partir de los datos del servicio.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2026 | En Desarrollo |

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
| 2026 | Aplicación de gestión | SPA para administrar vehículos, conductores, servicios, viajes, documentación y métricas de flota. |

## Dominios

La aplicación funciona en `app.transcontrol.es`, un subdominio de `transcontrol.es` sin registro independiente.
