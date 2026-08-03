<template>
  <section id="hero" class="hero">
    <div class="container hero__inner">
      <div class="hero__content reveal">
        <p class="hero__eyebrow mono">UX/UI Designer &amp; Web Developer</p>
        <h1 class="hero__title">
          Jan Maverick<br />
          Alqueza
        </h1>
        <p class="hero__lede">
          Designer and developer based in Zambales, Philippines — raised in the
          90s, building for the web since 2019.
        </p>
        <div class="hero__actions">
          <a class="btn btn--primary" href="mailto:alquezajanmaverick@gmail.com">
            Start a project&nbsp;&rarr;
          </a>
          <a class="btn btn--ghost" href="#capabilities">See capabilities</a>
        </div>
      </div>

      <dl class="hero__meta reveal">
        <div class="hero__meta-item">
          <dt class="mono">Status</dt>
          <dd>
            <span class="hero__status-dot" aria-hidden="true"></span>
            Available for freelance work
          </dd>
        </div>
        <div class="hero__meta-item">
          <dt class="mono">Based in</dt>
          <dd>Zambales, Philippines</dd>
        </div>
        <div class="hero__meta-item">
          <dt class="mono">Since</dt>
          <dd>2019</dd>
        </div>
        <div class="hero__meta-item">
          <dt class="mono">Experience</dt>
          <dd>{{ experience }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

const experience = computed(() => dayjs("2019-06-01").toNow(true));
</script>

<style scoped>
.hero {
  min-height: 100dvh;
  display: flex;
  align-items: center;
  padding: calc(var(--nav-h) + var(--space-8)) 0 var(--space-8);
}

.hero__inner {
  display: flex;
  flex-direction: column;
  gap: var(--space-8);
}

.hero__content {
  max-width: 760px;
}

.hero__eyebrow {
  color: var(--accent);
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin: 0 0 var(--space-4);
}

.hero__title {
  margin: 0;
  font-size: clamp(3rem, 9vw, 6.5rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 0.95;
}

.hero__lede {
  margin: var(--space-5) 0 0;
  max-width: 46ch;
  font-size: 1.25rem;
  line-height: 1.55;
  color: var(--ink-2);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  margin-top: var(--space-6);
}

.hero__meta {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-5) var(--space-6);
  border-top: 1px solid var(--line);
  padding-top: var(--space-6);
  max-width: 760px;
}

.hero__meta-item dt {
  color: var(--ink-3);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin-bottom: var(--space-1);
}

.hero__meta-item dd {
  margin: 0;
  font-weight: 500;
}

.hero__status-dot {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--accent);
  margin-right: var(--space-2);
  vertical-align: 1px;
}

@media (min-width: 768px) {
  .hero__meta {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
