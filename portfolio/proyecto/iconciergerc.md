<img src="/assets/img/favicons/iconciergerc-com.png" alt="iconciergeRC" width="35" height="35" />

<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import ovhIcon from 'simple-icons/icons/ovh.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'OVH', icon: ovhIcon },
]
</script>

# iconciergeRC

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://iconciergerc.com" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web independiente para servicios de conserjería premium y atención personalizada, encargado por la misma persona que Go To iKoncierge.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2018 | Finalizado |

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
| 2018 | Sitio web de conserjería | Web independiente con dominio y plantilla propios para presentar servicios de conserjería premium y atención personalizada. |
