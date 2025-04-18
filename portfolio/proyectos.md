# Listado de Proyectos

### (*Pendiente de completar todos los proyectos*)

Aquí encontrarás un avance de todos los proyectos

<script setup>
import projects from './data/projects.json';

// Group projects by type
const groupProjectsByType = projects.reduce((groups, project) => {
  if (!groups[project.type]) {
    groups[project.type] = [];
  }
  groups[project.type].push(project);
  groups[project.type].sort((a, b) => b.yearStart - a.yearStart); // Sort by yearStart
  return groups;
}, {});
</script>

<template>
  <div v-for="(group, type) in groupProjectsByType" :key="type">
    <h2 v-if="type === 'personal'" id="personales" tabindex="-1">Personales <a class="header-anchor" href="#personales" aria-label="Permalink to &quot;Personales&quot;">&ZeroWidthSpace;</a></h2>
    <h2 v-else-if="type === 'cliente'" id="para-clientes" tabindex="-1">Para clientes <a class="header-anchor" href="#para-clientes" aria-label="Permalink to &quot;Para&quot;Clientes&quot;">&ZeroWidthSpace;</a></h2>
    <h2 v-else-if="type === 'otros'" id="otros" tabindex="-1">Otros <a class="header-anchor" href="#otros" aria-label="Permalink to &quot;Otrosquot;">&ZeroWidthSpace;</a></h2>
    <div class="projects-container">
      <div v-for="project in group" :key="project.title" class="project-card">
        <div class="project-header">
          <img v-if="project.headerBackgroundImg" :src="`/assets/img/projects/${project.headerBackgroundImg}`" alt="`${project.title}` Image" />  
          <p :class="[
            'status',
            {
              'status-in-progress': project.status === 'En Desarrollo',
              'status-completed': project.status === 'Finalizado',
              'status-abandoned': project.status === 'Abandonado'
            }
          ]">
            {{ project.status }}
          </p> 
          <p class="projects-activity">
            {{ project.yearStart }}
            <span v-if="project.yearEnd"> - {{ project.yearEnd }}</span>
            <span v-else> - Actualidad</span>
          </p>     
        </div>
        <div class="project-title">
          <img v-if="project.favicon" :src="project.favicon" alt="`${project.title}` Favicon" width="24" />
          <h3>{{ project.title }}</h3>
        </div>
        <div class="project-content">
          <p class="project-tech" v-if="project.tech && project.tech.length > 0">
            <strong>Stack:</strong>
            <span v-for="(tech, index) in project.tech" :key="index">{{ tech }}</span>
          </p>
          <div class="project-links">
            <a :href="project.link">Ver Proyecto <img src="/assets/img/move-up-right.svg" alt="Proyecto" width="16" /></a>
            <a v-if="project.github" class="github" :href="project.github" target="_blank">GitHub <img src="/assets/img/github.svg" alt="GitHub" width="16" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
template {
  display: block;
  margin-top: 25px;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
}

.project-card {
  background-color: var(--vp-sidebar-bg-color);
  /*border: 1px solid var(--vp-c-divider);*/
  border-radius: 8px;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  position: relative;
}

.project-header img {
  border-radius: 8px;
}

.project-header:not(:has(img)) {
  position: relative;
  /*padding-top: 85px;*/
  padding-top: 227px;
  background-color: var(--vp-c-brand-soft);
}

.project-header:not(:has(img))::after {
  content: "Sin vista previa";
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translate(-50%);
  font-style: italic;
}

.project-title {
  padding-top: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-title img {
  border-radius: 4px;
}

.project-title h3 {
  margin: 0;
}

.project-content {
  padding: 1rem;
}

.status {
  font-size: .875rem;
  font-weight: bold;
  width: fit-content;
  padding: 0 8px;
  border-radius: 4px;
  margin: 0;
  position: absolute;
  bottom: 45px;
  left: 10px;
  color: #fff;
}

.status-in-progress {
  background-color: rgba(45, 255, 123, 0.6);
}

.status-completed {
  background-color: rgba(0, 191, 255, 0.6);
}

.status-abandoned {
  background-color: rgba(255, 127, 80, 0.6);
}

.projects-activity {
  background-color: rgba(0, 0, 0, 0.6);
  font-size: .875rem;
  font-weight: bold;
  width: fit-content;
  padding: 0 8px;
  border-radius: 4px;
  margin: 0;
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #ffffff;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 0;
}

.project-tech span {
  font-size: .8rem;
  background-color: var(--vp-c-default-3);
  padding: 0px 8px;
  border-radius: 4px;
}

.project-links {
  display: flex;
  gap: 1rem;
}

.project-links a {
  font-size: .8rem;
  background-color: var(--vp-button-brand-bg);
  color: var(--vp-button-brand-text);
  text-decoration: none;
  padding: 0px 8px;
  border-radius: 4px;
  display: flex;
  gap: 4px;
}

.project-links a.github {
  background-color: #000;
  gap: 8px;
}

.project-links a img {
  filter: invert(1);
}

</style>
