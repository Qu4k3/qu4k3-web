<script setup>
import cssIcon from 'simple-icons/icons/css.svg?raw'
import betterDiscordIcon from 'simple-icons/icons/betterdiscord.svg?raw'
import discordIcon from 'simple-icons/icons/discord.svg?raw'

const technologies = [
  { name: 'CSS', icon: cssIcon },
  { name: 'BetterDiscord', icon: betterDiscordIcon },
  { name: 'Discord', icon: discordIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/projects/logos/notanotheranimetheme.webp" alt="" aria-hidden="true" width="48" height="48" /></span> NotAnotherAnimeTheme

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://betterdiscord.app/theme/NotAnotherAnimeTheme" target="_blank" rel="noopener noreferrer">Ver tema en BetterDiscord <span aria-hidden="true">→</span></a>
  <a class="about-action" href="https://github.com/puckzxz/NotAnotherAnimeTheme" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">→</span></a>
</div>

## Sobre el proyecto

Tema altamente personalizable para Discord, compatible con **BetterDiscord**, que renueva la interfaz del cliente y permite controlar desde la imagen de fondo hasta los colores de las barras de desplazamiento y el número de columnas de servidores.

Colaboré con su autor, puckzxz, ayudando a resolver incidencias del tema entre 2017 y 2019. El propio repositorio recoge esta colaboración en sus agradecimientos.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2017 | Abandonado |

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
| 2017–2019 | Tema personalizable para Discord | Tema para BetterDiscord con fondos, columnas y colores configurables. Mi colaboración en el proyecto terminó en septiembre de 2019. |
