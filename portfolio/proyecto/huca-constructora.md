<img src="/assets/img/favicons/hucaconstructora-com.png" alt="HUCA Constructora" width="35" height="35" />

<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import elementorIcon from 'simple-icons/icons/elementor.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'Elementor', icon: elementorIcon },
  { name: 'Contact Form 7' },
  { name: 'Polylang' },
  { name: 'Google Site Kit' },
]
</script>

# HUCA Constructora

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://hucaconstructora.com/" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web para una empresa constructora, con información de sus proyectos de construcción y reforma.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| Julio de 2025 | En desarrollo |

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
| Desde julio de 2025 | Desarrollo del sitio web | Web corporativa para presentar los trabajos de construcción y reforma de HUCA. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [hucaconstructora.com](https://hucaconstructora.com/) | [12/05/2025](https://rdap.verisign.com/com/v1/domain/hucaconstructora.com) | — |
