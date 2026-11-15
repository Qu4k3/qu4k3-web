<script setup>
import nodeIcon from 'simple-icons/icons/nodedotjs.svg?raw'
import expressIcon from 'simple-icons/icons/express.svg?raw'
import discordIcon from 'simple-icons/icons/discord.svg?raw'

const technologies = [
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'Discord.js v14', icon: discordIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/disboard-bot.png" alt="" aria-hidden="true" width="48" height="48" /></span> Disboard Discord Bot


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://bot.disboard.team" target="_blank" rel="noopener noreferrer">Bot <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/Qu4k3/disboard-bot" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Bot de Discord creado para facilitar tareas de gestión del equipo, consultar información rápidamente y ejecutar comandos útiles.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2018 | En desarrollo |

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
| 2026 | v1 | Actualización del código de Discord.js v11 a Discord.js v14. [Código](https://github.com/Qu4k3/disboard-bot). |
| 2018–2020 | v0 | Primera etapa del bot para la gestión del equipo y la consulta rápida de información. Construido con Express y Discord.js v11. [Código](https://github.com/Qu4k3/disboard-bot). |

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [bot.disboard.team](https://bot.disboard.team) | Subdominio de `disboard.team` | - |
