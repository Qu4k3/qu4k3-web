<script setup>
import wordpressIcon from 'simple-icons/icons/wordpress.svg?raw'
import woocommerceIcon from 'simple-icons/icons/woocommerce.svg?raw'

const technologies = [
  { name: 'WordPress', icon: wordpressIcon },
  { name: 'WooCommerce', icon: woocommerceIcon },
]
</script>

# Wanda T-Shirt

<div class="project-logo"><img src="/assets/img/favicons/wandat-shirt-com.png" alt="Wanda T-Shirt" width="48" height="48" /></div>

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://wandat-shirt.com" target="_blank" rel="noopener noreferrer">Tienda online <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Tienda online para presentar y vender la colección de camisetas de Wanda.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 2019 | Finalizado |

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
| 2019 | Tienda online | Catálogo y venta online de la colección de camisetas de Wanda, con WordPress y WooCommerce. |
