<script setup>
import html5Icon from 'simple-icons/icons/html5.svg?raw'
import css3Icon from 'simple-icons/icons/css.svg?raw'
import javascriptIcon from 'simple-icons/icons/javascript.svg?raw'
import mysqlIcon from 'simple-icons/icons/mysql.svg?raw'

const technologies = [
  { name: 'HTML5', icon: html5Icon },
  { name: 'CSS3', icon: css3Icon },
  { name: 'JavaScript', icon: javascriptIcon },
  { name: 'MySQL', icon: mysqlIcon },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/mhwguild-com.png" alt="" aria-hidden="true" width="48" height="48" /></span> Monster Hunter World Guild


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://mhwguild.com" target="_blank" rel="noopener noreferrer">Dominio histórico <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Landing de presentación de una nueva plataforma relacionada con *Monster Hunter World*, con un formulario para recibir actualizaciones por correo electrónico.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 12/09/2017 | Finalizado (12/09/2020) |

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
| 12/09/2020 | Fin del proyecto | Finaliza la etapa de la plataforma y de su dominio. |
| 12/09/2017 | Landing de presentación | Presentación de una nueva plataforma con registro por correo para recibir actualizaciones. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [mhwguild.com](https://mhwguild.com) | [11/09/2017 (WHOIS histórico)](https://mhwguild.com.clearwebstats.com/) | 12/09/2020 |
