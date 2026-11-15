<script setup>
import astroIcon from 'simple-icons/icons/astro.svg?raw'
import muiIcon from 'simple-icons/icons/mui.svg?raw'

const technologies = [
  { name: 'Astro', icon: astroIcon },
  { name: 'MUI', icon: muiIcon },
  { name: 'SEO técnico' },
  { name: 'SEO on-page' },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/transcontrol-logo.svg" alt="" aria-hidden="true" width="196" height="48" /></span> Transcontrol


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://transcontrol.es" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://app.transcontrol.es" target="_blank" rel="noopener noreferrer">Aplicación <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Landing pública para presentar Transcontrol, una plataforma de gestión pensada para autónomos, microflotas y empresas de transporte.

Desarrollada con **Astro y MUI**, combina una experiencia rápida y responsive con una arquitectura de contenidos preparada para buscadores. El trabajo incluye la estructura de la propuesta de valor, páginas de funcionalidades y DeCA, llamadas a la acción para solicitar una demo y optimización de **SEO técnico y on-page**.

### Objetivos

- Explicar la plataforma de forma clara a distintos perfiles de empresa.
- Mejorar la velocidad de carga y la experiencia en dispositivos móviles.
- Facilitar el posicionamiento orgánico para búsquedas relacionadas con la gestión de flotas y transporte.
- Convertir las visitas cualificadas en solicitudes de demo.

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
| 2026 | Landing comercial | Sitio público para presentar la plataforma, sus funcionalidades y facilitar solicitudes de demo. |

## Dominios

La aplicación funciona en `app.transcontrol.es`, un subdominio de `transcontrol.es` sin registro independiente.
