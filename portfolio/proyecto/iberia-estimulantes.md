<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import elementorIcon from 'simple-icons/icons/elementor.svg?raw'
import woocommerceIcon from 'simple-icons/icons/woocommerce.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'Elementor', icon: elementorIcon },
  { name: 'WooCommerce', icon: woocommerceIcon },
  { name: 'Contact Form 7' },
  { name: 'Polylang' },
  { name: 'Google Site Kit' },
]
</script>

# <span class="project-logo"><img src="/assets/img/favicons/iberiaestimulantes-com.png" alt="" aria-hidden="true" width="48" height="48" /></span> Iberia Estimulantes


## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://iberiaestimulantes.com/" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Sitio web corporativo para presentar soluciones agrícolas especializadas orientadas a mejorar el rendimiento, la calidad y el desarrollo de los cultivos.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| Abril de 2026 | En desarrollo |

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
| Abril–octubre de 2026 | Desarrollo del sitio corporativo | Web para presentar las soluciones agrícolas de Iberia Estimulantes. |

## Dominios

| Dominio | Alta (WHOIS/RDAP) | Fin de uso |
|---|---|---|
| [iberiaestimulantes.com](https://iberiaestimulantes.com/) | [11/02/2026](https://rdap.verisign.com/com/v1/domain/iberiaestimulantes.com) | — |
