<script setup>
import nextIcon from 'simple-icons/icons/nextdotjs.svg?raw'
import mantineIcon from 'simple-icons/icons/mantine.svg?raw'
import vercelIcon from 'simple-icons/icons/vercel.svg?raw'
import dynamodbIcon from '../icons/amazondynamodb.svg?raw'

const technologies = [
  { name: 'Next.js', icon: nextIcon },
  { name: 'Mantine', icon: mantineIcon },
  { name: 'Vercel', icon: vercelIcon },
  { name: 'Amazon DynamoDB', icon: dynamodbIcon },
]
</script>

# Pocket Link

<div class="project-logo"><img src="/assets/img/favicons/pckt-link.png" alt="Pocket Link" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://pckt.link" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/pckt-link/pckt-link" target="_blank" rel="noopener noreferrer">Repositorio actual <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/pckt-link/pckt-link-nextjs-mantine-aws-dynamodb" target="_blank" rel="noopener noreferrer">Repositorio de v0 <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Herramienta web para guardar, organizar y compartir enlaces desde una interfaz sencilla.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2025 | En desarrollo |

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
| 2026 | v1 | Nueva versión de Pocket Link para guardar, organizar y compartir enlaces desde una interfaz web sencilla. [Código](https://github.com/pckt-link/pckt-link). |
| 2025 | v0 | Primera versión del proyecto, desarrollada con Next.js y Mantine UI. [Código](https://github.com/pckt-link/pckt-link-nextjs-mantine-aws-dynamodb). |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [pckt.link](https://pckt.link) | 31/07/2024 | — |
| [pckt.it](https://pckt.it) | 20/01/2025 | — |
