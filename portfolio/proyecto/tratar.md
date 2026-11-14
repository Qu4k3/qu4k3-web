<script setup>
import directusIcon from 'simple-icons/icons/directus.svg?raw'
import googleCloudIcon from 'simple-icons/icons/googlecloud.svg?raw'
import dockerIcon from 'simple-icons/icons/docker.svg?raw'
import postgresqlIcon from 'simple-icons/icons/postgresql.svg?raw'

const technologies = [
  { name: 'Directus', icon: directusIcon },
  { name: 'Google Cloud', icon: googleCloudIcon },
  { name: 'Docker', icon: dockerIcon },
  { name: 'PostgreSQL', icon: postgresqlIcon },
]
</script>

# Tratar CMS

<div class="project-logo"><img src="/assets/img/favicons/cms-tratar-es.png" alt="Tratar CMS" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://cms.tratar.es" target="_blank" rel="noopener noreferrer">CMS <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/webmaster-tratar/recordar-cms-directus" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

CMS para gestionar los contenidos de Tratar, con una infraestructura contenerizada sobre Google Cloud y una base de datos PostgreSQL.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2023 | Finalizado en 2024 |

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
| 2023–2024 | Implantación del CMS | Configuración de Directus y su infraestructura con Docker, Google Cloud y PostgreSQL para gestionar los contenidos de Tratar. |
