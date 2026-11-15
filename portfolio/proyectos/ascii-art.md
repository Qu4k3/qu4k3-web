<script setup>
import rubyOnRailsIcon from 'simple-icons/icons/rubyonrails.svg?raw'

const technologies = [
  { name: 'Ruby on Rails', icon: rubyOnRailsIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/ascii-art.gif" alt="" aria-hidden="true" width="48" height="48" /></span> ASCII Art


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://asciiart.io" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/Qu4k3/asciiart" target="_blank" rel="noopener noreferrer">Código privado en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Plataforma para subir y compartir diseños y dibujos en ASCII.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 09/01/2017 | Finalizado (09/01/2021) |

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
| 09/01/2021 | Fin del proyecto | Finaliza la etapa de la plataforma para compartir diseños y dibujos en ASCII. |
| 09/01/2017 | Inicio del proyecto | Comienza el desarrollo con Ruby on Rails. |

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [asciiart.io](https://asciiart.io) | 09/01/2017 | 09/01/2021 |

Dominio propio utilizado del 09/01/2017 al 09/01/2021, según el periodo aportado.
