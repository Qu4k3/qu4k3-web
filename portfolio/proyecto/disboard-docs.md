[![Netlify Status](https://api.netlify.com/api/v1/badges/b2f37b31-a4f7-479a-b9f9-204c9a07b194/deploy-status)](https://app.netlify.com/projects/disboard-docs/deploys)

<img src="/assets/img/favicons/docs-disboard-team.png" alt="Disboard Docs" width="35" height="35" />

<script setup>
import vitepressIcon from 'simple-icons/icons/vitepress.svg?raw'
import vueIcon from 'simple-icons/icons/vuedotjs.svg?raw'
import nodeIcon from 'simple-icons/icons/nodedotjs.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'

const technologies = [
  { name: 'VitePress', icon: vitepressIcon },
  { name: 'Vue.js', icon: vueIcon },
  { name: 'Node.js', icon: nodeIcon },
  { name: 'Netlify', icon: netlifyIcon },
]
</script>

# Disboard Documentación

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://docs.disboard.team" target="_blank" rel="noopener noreferrer">Documentación actual <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/disboard-team/disboard-docs" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://docs.disboard.team/v0/" target="_blank" rel="noopener noreferrer">Documentación archivada v0 <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://docs.disboard.team/es/" target="_blank" rel="noopener noreferrer">Versión en español <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Documentación técnica y guía de uso de la plataforma y los servicios de Disboard, organizada por idiomas y versiones.

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
| 8 de octubre de 2026 | v1 | Migración a VitePress 1.6.4; se conservó la versión anterior en `/v0/` y se añadió soporte de idiomas. [Código](https://github.com/disboard-team/disboard-docs). |
| 2018–2020 | v0 | Primera etapa de la documentación, generada con VuePress y archivada en `/v0/`. [Código](https://github.com/disboard-team/disboard-docs). |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [docs.disboard.team](https://docs.disboard.team) | Subdominio de `disboard.team` (registrado el 07/02/2018) | — |
