<template>
  <section class="spread cover" ref="root">
    <RegistrationMarks />

    <p class="cover__eyebrow label">Brand Guidelines — Vol. 01</p>

    <div class="cover__lockup">
      <div class="cover__guide">
        <span class="cover__guide-tick cover__guide-tick--t" aria-hidden="true"></span>
        <span class="cover__guide-tick cover__guide-tick--r" aria-hidden="true"></span>
        <span class="cover__guide-tick cover__guide-tick--b" aria-hidden="true"></span>
        <span class="cover__guide-tick cover__guide-tick--l" aria-hidden="true"></span>
        <h1 class="cover__wordmark">
          Jan Maverick<br />
          Alqueza
        </h1>
      </div>
      <p class="cover__clearspace label" aria-hidden="true">Clear space: 1× cap-height, all sides</p>
    </div>

    <p class="cover__role">UX/UI Designer &amp; Web Developer</p>

    <div class="cover__meta">
      <p class="cover__version label">Portfolio Edition — v1.0 — 2026</p>
      <div class="cover__stamp">
        <span>Status:<br />Available</span>
      </div>
    </div>

    <p class="cover__scroll label">Scroll — Page 02 ↓</p>
  </section>
</template>

<script setup>
import RegistrationMarks from "./RegistrationMarks.vue";
</script>

<style scoped>
.spread {
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--space-xl) var(--space-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.cover {
  align-items: flex-start;
  gap: var(--space-md);
}

.cover__eyebrow {
  color: var(--ink-secondary);
}

.cover__lockup {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.cover__guide {
  position: relative;
  padding: var(--space-md) var(--space-lg);
  border: 1px dashed var(--hairline);
  width: fit-content;
}

.cover__guide-tick {
  position: absolute;
  background: var(--hairline);
}

.cover__guide-tick--t,
.cover__guide-tick--b {
  left: 50%;
  width: 1px;
  height: var(--space-sm);
  transform: translateX(-50%);
}

.cover__guide-tick--t {
  top: calc(var(--space-sm) * -1);
}

.cover__guide-tick--b {
  bottom: calc(var(--space-sm) * -1);
}

.cover__guide-tick--l,
.cover__guide-tick--r {
  top: 50%;
  height: 1px;
  width: var(--space-sm);
  transform: translateY(-50%);
}

.cover__guide-tick--l {
  left: calc(var(--space-sm) * -1);
}

.cover__guide-tick--r {
  right: calc(var(--space-sm) * -1);
}

.cover__wordmark {
  margin: 0;
  font-size: clamp(2.75rem, 6vw, 5.5rem);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.01em;
}

.cover__clearspace {
  color: var(--ink-secondary);
  padding-left: var(--space-xs);
}

.cover__role {
  font-size: clamp(1.75rem, 3.2vw, 2.75rem);
  font-weight: 500;
  line-height: 1.05;
  color: var(--accent);
  margin: 0;
}

.cover__meta {
  display: flex;
  align-items: center;
  gap: var(--space-lg);
  margin-top: var(--space-sm);
}

.cover__version {
  color: var(--ink-secondary);
}

.cover__stamp {
  position: relative;
  border: 2px solid var(--accent);
  border-radius: 50%;
  width: 96px;
  height: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  transform: rotate(-8deg);
  color: var(--accent);
  font-family: var(--font-label);
  font-size: 0.65rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  flex-shrink: 0;
  outline: 1px solid var(--accent);
  outline-offset: 4px;
}

.cover__scroll {
  position: absolute;
  bottom: var(--space-lg);
  right: var(--space-lg);
  color: var(--ink-secondary);
}

@media (max-width: 640px) {
  .spread {
    padding: var(--space-lg) var(--space-md);
  }

  .cover__meta {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-sm);
  }

  .cover__scroll {
    display: none;
  }
}
</style>
