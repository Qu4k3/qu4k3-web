<script setup>
import reactIcon from 'simple-icons/icons/react.svg?raw'
import expoIcon from 'simple-icons/icons/expo.svg?raw'

const technologies = [
  { name: 'React Native', icon: reactIcon },
  { name: 'Expo', icon: expoIcon },
  { name: 'API' },
]
</script>

# MEDI lens — App

<div class="project-logo"><img src="/assets/img/projects/logos/medilens.svg" alt="MEDI lens" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://play.google.com/store/apps/details?id=es.medilens.app" target="_blank" rel="noopener noreferrer">Google Play <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://medilens.es" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/medi-lens/medilens-app" target="_blank" rel="noopener noreferrer">Repositorio privado en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Aplicación móvil de MEDI lens para consultar información oficial sobre medicamentos y gestionar un botiquín digital. Permite buscar y escanear medicamentos, consultar información y disponibilidad, guardar favoritos e historial, y recibir avisos de caducidad.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2024 | En desarrollo |

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
| 23 de octubre de 2025 | Actualización | Se añaden accesos para enviar sugerencias e incidencias, se rediseña el detalle del medicamento y se corrigen errores de compatibilidad con algunos dispositivos Xiaomi. [Novedades en Google Play](https://play.google.com/store/apps/details?id=es.medilens.app). |
| 28 de agosto de 2025 | Lanzamiento | Primera publicación de MEDI lens para dispositivos móviles, con búsqueda y escaneo de medicamentos y gestión de un botiquín digital. [Nota de prensa](https://medilens.es/docs/NOTA_PRENSA_MEDILENS_N.pdf). |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [medilens.es](https://medilens.es) | No publicada | — |

La ficha de la aplicación se distribuye desde Google Play; la landing y la aplicación comparten `medilens.es` como dominio del proyecto.
