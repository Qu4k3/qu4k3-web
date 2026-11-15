<script setup>
import vueIcon from 'simple-icons/icons/vuedotjs.svg?raw'

const technologies = [
  { name: 'Vue.js', icon: vueIcon },
]
</script>

# qk3.io

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="https://qk3.io" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="https://github.com/Qu4k3/qk3.io" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Era un repositorio de proyectos y de hosting de proyectos, como indica la descripción de GitHub. También fue un entrenamiento o toma de contacto con Vue.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| 03/04/2019 | Abandonado (03/04/2020) |

## Tecnologías

<ul class="about-tags">
  <li v-for="technology in technologies" :key="technology.name">
    <span v-if="technology.icon" class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
    <span>{{ technology.name }}</span>
  </li>
</ul>

## Dominios

| Dominio | Alta | Fin de uso |
|---|---|---|
| [qk3.io](https://qk3.io) | 03/04/2019 | 03/04/2020 |
