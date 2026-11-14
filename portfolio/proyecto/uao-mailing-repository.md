<script setup>
import nextIcon from 'simple-icons/icons/nextdotjs.svg?raw'
import reactIcon from 'simple-icons/icons/react.svg?raw'
import tailwindIcon from 'simple-icons/icons/tailwindcss.svg?raw'
import vercelIcon from 'simple-icons/icons/vercel.svg?raw'

const technologies = [
  { name: 'Next.js', icon: nextIcon },
  { name: 'React', icon: reactIcon },
  { name: 'Tailwind CSS', icon: tailwindIcon },
  { name: 'Vercel', icon: vercelIcon },
]
</script>

# UAO Mailing Repository

<div class="project-logo"><img src="/assets/img/projects/proyecto-uao-mailing-repository.png" alt="UAO Mailing Repository" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://mailing-repo.vercel.app" target="_blank" rel="noopener noreferrer">Repositorio de campañas <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Repositorio web para consultar, organizar y reutilizar campañas de email de la UAO.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2020 | Finalizado en 2021 |

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
| 2020–2021 | Repositorio de campañas de email | Aplicación web para consultar campañas anteriores y reutilizar sus contenidos y diseños. |
