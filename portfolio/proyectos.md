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

const groupMeta = {
  personal: {
    id: 'personales',
    title: 'Proyectos personales',
    description: 'Productos e ideas propias, desde la primera versión hasta su evolución.'
  },
  cliente: {
    id: 'para-clientes',
    title: 'Proyectos para clientes',
    description: 'Trabajos realizados para empresas, equipos y profesionales.'
  },
  otros: {
    id: 'otros',
    title: 'Otros proyectos',
    description: 'Experimentos, comunidades y proyectos de exploración.'
  }
};

const getStatusClass = (status) => ({
  'status-in-progress': status === 'En Desarrollo',
  'status-completed': status === 'Finalizado',
  'status-abandoned': status === 'Abandonado'
});
</script>

<div class="projects-page">
  <div class="projects-intro">
    <div class="projects-intro__copy">
      <p class="about-eyebrow"><span></span> Proyectos</p>
      <h1>Proyectos y trabajos realizados.</h1>
      <p>Una selección de productos e ideas en los que he participado: desde la definición visual y la implementación hasta su evolución y mantenimiento.</p>
      <p class="projects-intro__note">Algunos proyectos están todavía en desarrollo o pendientes de completar su documentación.</p>
      <div class="about-actions">
        <a class="about-action about-action--primary" href="https://github.com/Qu4k3" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
        <a class="about-action" href="/sobre-mi">Sobre mí</a>
      </div>
    </div>
  </div>

  <div class="about-stats" aria-label="Proyectos en cifras">
    <div><strong>70+</strong><span>proyectos realizados</span></div>
    <div><strong>20+</strong><span>clientes y equipos</span></div>
    <div><strong>2015–2026</strong><span>trayectoria</span></div>
  </div>

  <div v-for="(group, type) in groupProjectsByType" :key="type" class="projects-group">
    <h2 :id="groupMeta[type]?.id || type" tabindex="-1">
      {{ groupMeta[type]?.title || type }}
      <a class="header-anchor" :href="`#${groupMeta[type]?.id || type}`" :aria-label="`Permalink to ${groupMeta[type]?.title || type}`">&ZeroWidthSpace;</a>
    </h2>
    <p v-if="groupMeta[type]?.description" class="projects-group__description">{{ groupMeta[type].description }}</p>
    <div class="projects-grid">
      <article v-for="project in group" :key="project.link || project.title" class="project-card">
        <a class="project-card__media" :href="project.link">
          <img
            v-if="project.headerBackgroundImg"
            :src="`/assets/img/projects/${project.headerBackgroundImg}`"
            :alt="`${project.title} — vista previa`"
            loading="lazy"
          />
          <div v-else class="project-card__placeholder" aria-hidden="true">
            <span>Sin vista previa</span>
          </div>
          <span :class="['project-card__status', getStatusClass(project.status)]">{{ project.status }}</span>
          <span class="project-card__date">
            <template v-if="project.dateRange">{{ project.dateRange }}</template>
            <template v-else>
              {{ project.yearStart }}<span v-if="project.yearEnd"> — {{ project.yearEnd }}</span><span v-else> — Actualidad</span>
            </template>
          </span>
        </a>
        <div class="project-card__body">
          <div class="project-card__title">
            <img v-if="project.favicon" :src="project.favicon" :alt="`${project.title} — favicon`" width="20" />
            <h3><a :href="project.link">{{ project.title }}</a></h3>
          </div>
          <p v-if="project.description" class="project-card__description">{{ project.description }}</p>
          <div v-if="project.tech && project.tech.length" class="project-card__tech">
            <span v-for="(tech, index) in project.tech" :key="index">{{ tech }}</span>
          </div>
          <div class="project-card__links">
            <a class="project-card__link project-card__link--primary" :href="project.link">Ver proyecto <span aria-hidden="true">↗</span></a>
            <a v-if="project.url" class="project-card__link" :href="project.url" target="_blank" rel="noopener noreferrer">Sitio web <span aria-hidden="true">↗</span></a>
            <a v-if="project.github" class="project-card__link project-card__link--github" :href="project.github" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
          </div>
        </div>
      </article>
    </div>
  </div>
</div>

<style scoped>
template {
  display: block;
  margin-top: 25px;
}

.projects-intro {
  margin: 20px 0 42px;
}

.projects-intro__copy h1 {
  max-width: 14ch;
  margin: 0 0 18px;
  font-size: clamp(2.3rem, 5vw, 4rem);
  font-weight: 500;
  letter-spacing: -0.065em;
  line-height: 1.02;
}

.projects-intro__copy > p {
  max-width: 42rem;
  margin: 0 0 14px;
  color: var(--vp-c-text-2);
  line-height: 1.8;
}

.projects-intro__copy strong {
  color: var(--vp-c-text-1);
  font-weight: 500;
}

.projects-intro__note {
  color: var(--vp-c-text-3);
  font-size: 0.86rem;
}

.projects-group {
  margin: 48px 0 0;
}

.projects-group h2 {
  padding-top: 1.5rem;
  border-top: 1px solid var(--vp-c-divider);
}

.projects-group__description {
  margin: 0 0 20px;
  color: var(--vp-c-text-2);
  font-size: 0.9rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 16px;
}

.project-card {
  display: flex;
  flex-direction: column;
  min-width: 0;
  border: 1px solid var(--vp-c-divider);
  background: color-mix(in srgb, var(--vp-c-bg-elv) 56%, transparent);
  transition: border-color 0.2s ease, background-color 0.2s ease, transform 0.2s ease;
}

.project-card:hover {
  border-color: rgb(17 24 39 / 28%);
  background: var(--vp-c-bg-elv);
}

.dark .project-card:hover {
  border-color: rgb(249 250 251 / 28%);
}

.project-card__media {
  position: relative;
  display: block;
  aspect-ratio: 336 / 227;
  overflow: hidden;
  background: var(--vp-c-brand-soft);
  text-decoration: none;
}

.project-card__media img:first-child {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0;
  transition: transform 0.35s ease;
}

/* Sin animación de zoom en la miniatura */

.project-card__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: var(--vp-c-text-3);
  font-size: 0.82rem;
  font-style: italic;
  text-align: center;
  padding: 16px;
}

.project-card__placeholder img {
  border: 0;
  opacity: 0.7;
}

.project-card__status,
.project-card__date {
  position: absolute;
  z-index: 1;
  font-size: 0.75rem;
  font-weight: 500;
  padding: 4px 8px;
  line-height: 1.2;
  color: #fff;
  backdrop-filter: blur(2px);
}

.project-card__status {
  top: 10px;
  left: 10px;
}

.project-card__date {
  bottom: 10px;
  left: 10px;
  background-color: rgba(0, 0, 0, 0.6);
}

.status-in-progress {
  background-color: rgba(45, 255, 123, 0.75);
  color: #063b1f;
}

.status-completed {
  background-color: rgba(0, 191, 255, 0.75);
  color: #00334d;
}

.status-abandoned {
  background-color: rgba(255, 127, 80, 0.75);
  color: #5a1f0d;
}

.project-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 12px;
  padding: 16px;
}

.project-card__title {
  display: flex;
  align-items: center;
  gap: 10px;
}

.project-card__title img {
  border: 0;
  flex: 0 0 auto;
}

.project-card__title h3 {
  margin: 0;
  font-size: 1.05rem;
  font-weight: 500;
  letter-spacing: -0.02em;
}

.project-card__title h3 a {
  color: var(--vp-c-text-1);
  text-decoration: none;
}

.project-card__title h3 a:hover {
  color: var(--vp-c-brand-1);
}

.project-card__description {
  margin: 0;
  color: var(--vp-c-text-2);
  font-size: 0.86rem;
  line-height: 1.65;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-card__tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.project-card__tech span {
  font-size: 0.72rem;
  padding: 3px 8px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-2);
  background: color-mix(in srgb, var(--vp-c-bg) 70%, transparent);
}

.project-card__links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: auto;
}

.project-card__link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border: 1px solid var(--vp-c-divider);
  color: var(--vp-c-text-1);
  font-size: 0.78rem;
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s ease, color 0.2s ease, background-color 0.2s ease;
}

.project-card__link:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-brand-1);
  text-decoration: none;
}

.project-card__link--primary {
  border-color: var(--vp-c-brand-1);
  background: var(--vp-c-brand-1);
  color: #fff;
}

.project-card__link--primary:hover {
  border-color: var(--vp-c-brand-2);
  background: var(--vp-c-brand-2);
  color: #fff;
}

.project-card__link--github {
  background: #111827;
  border-color: #111827;
  color: #fff;
}

.dark .project-card__link--github {
  background: #f5f5f5;
  border-color: #f5f5f5;
  color: #111827;
}

.project-card__link--github:hover {
  opacity: 0.9;
  color: #fff;
}

.dark .project-card__link--github:hover {
  color: #111827;
}

@media (max-width: 640px) {
  .projects-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .projects-intro__copy h1 {
    font-size: clamp(2.1rem, 11vw, 3rem);
  }
}
</style>
