<!--
Plantilla común para las fichas de portfolio.
Quita los bloques opcionales si no aplican. Ordena la evolución de la versión más reciente a la más antigua.
En “Inicio” conserva la fecha inicial del proyecto; registra relanzamientos y cambios de tecnología en “Evolución”.
En “Tecnologías” indica el stack actual; menciona cambios de stack en la fila de la versión correspondiente.
-->

<!-- Opcional: badges de despliegue, hosting o calidad. -->
[![Estado del despliegue](URL_DEL_BADGE)](URL_DEL_DESPLIEGUE)

# <span class="project-logo"><img src="/assets/img/projects/logo.svg" alt="" aria-hidden="true" width="48" height="48" /></span> Nombre del proyecto

<!-- El logo es decorativo: alt vacío y aria-hidden para no duplicar el título en el H1 (mejor para SEO). -->

## Enlaces

<div class="about-actions">
  <a class="about-action about-action--primary" href="URL_DEL_SITIO" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="URL_DEL_REPOSITORIO" target="_blank" rel="noopener noreferrer">Código en GitHub <span aria-hidden="true">↗</span></a>
  <a class="about-action" href="URL_DEMO_OPCIONAL" target="_blank" rel="noopener noreferrer">Demo o tienda <span aria-hidden="true">↗</span></a>
</div>

## Sobre el proyecto

Resumen breve: qué es, para quién y qué necesidad resuelve.

## Datos del proyecto

| Inicio | Estado |
|---|---|
| Año inicial | En desarrollo / Finalizado / Archivado |

<!-- Opcional: incluye las tecnologías conocidas; si el stack no está documentado, omite esta sección. -->
## Tecnologías

Reutiliza el formato de etiquetas del perfil. Los elementos usan `{ name, icon }`; si una tecnología no tiene icono, omite `icon`.

```md
<script setup>
import astroIcon from 'simple-icons/icons/astro.svg?raw'
import netlifyIcon from 'simple-icons/icons/netlify.svg?raw'

const technologies = [
  { name: 'Astro', icon: astroIcon },
  { name: 'Netlify', icon: netlifyIcon },
]
</script>

<ul class="about-tags">
  <li v-for="technology in technologies" :key="technology.name">
    <span v-if="technology.icon" class="about-tag-icon" aria-hidden="true" v-html="technology.icon"></span>
    <span>{{ technology.name }}</span>
  </li>
</ul>
```

Si el stack cambió entre versiones, indica cada cambio también en la evolución.

## Evolución

| Fecha | Versión o hito | Cambios |
|---|---|---|
| Fecha más reciente | vN | Resumen del cambio. |
| Fecha anterior | vN-1 | Resumen del cambio. |

<!-- Opcional: inclúyela en proyectos personales/propios; omítela en proyectos de cliente salvo que la historia del dominio sea relevante. -->
## Dominios

La fecha de alta corresponde al registro del dominio según WHOIS/RDAP, no necesariamente al primer uso de la web. Si el registro no publica la fecha, indícalo como “No publicada”; no la infieras. Si la fecha actual es posterior al inicio del proyecto, aclara que se trata del registro vigente y no de la fecha histórica original.

| Dominio | Alta | Fin de uso |
|---|---|---|
| ejemplo.com | DD/MM/AAAA | — |

<!-- Opcional: concreta qué hiciste en el proyecto. -->
## Mi contribución

Responsabilidades, decisiones o partes desarrolladas.

<!-- Opcional: capturas, vídeo o enlaces a demos. -->
## Capturas

<!-- Opcional: métricas o resultados verificables. -->
## Resultados

