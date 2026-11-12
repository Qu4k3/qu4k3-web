<script setup>
import nodeIcon from 'simple-icons/icons/nodedotjs.svg?raw'
import expressIcon from 'simple-icons/icons/express.svg?raw'
import discordIcon from 'simple-icons/icons/discord.svg?raw'

const technologies = [
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Express', icon: expressIcon },
  { name: 'Discord.js', icon: discordIcon },
  { name: 'Webhooks' },
  { name: 'Glitch' },
  { name: 'Fly.io' },
]
</script>

# Lakitu (Discord Bot)

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://github.com/Qu4k3/lakitu-bot" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Bot independiente para apoyar la moderación de la comunidad española de Mario Kart. Permitía a representantes de equipos controlar algunas acciones de moderación y enviaba un mensaje automático de bienvenida a los nuevos miembros.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| Noviembre de 2018 | Finalizado (abril de 2019) |

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
| Abril de 2019 | Fin del proyecto | Finaliza el desarrollo y uso del bot. |
| Noviembre de 2018 | Inicio del proyecto | Primera etapa del bot de moderación y bienvenida para la comunidad. |
