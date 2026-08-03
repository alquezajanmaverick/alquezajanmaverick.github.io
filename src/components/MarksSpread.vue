<template>
  <section class="spread marks">
    <RegistrationMarks />

    <header class="spread__header">
      <h2 class="spread__title">03 — Approved Marks</h2>
      <p class="spread__subhead">For use across all applications. Reversed variant shown on hover or focus.</p>
    </header>

    <div class="marks__grid">
      <div class="marks__cell" v-for="mark in marks" :key="mark.name" tabindex="0">
        <i :class="['fa-brands', mark.icon]" aria-hidden="true"></i>
        <span class="label marks__cell-caption">{{ mark.name }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
import RegistrationMarks from "./RegistrationMarks.vue";

const marks = [
  { name: "HTML5", icon: "fa-html5" },
  { name: "JavaScript", icon: "fa-square-js" },
  { name: "CSS3", icon: "fa-css3-alt" },
  { name: "PHP", icon: "fa-php" },
  { name: "Python", icon: "fa-python" },
  { name: "Java", icon: "fa-java" },
  { name: "Laravel", icon: "fa-laravel" },
  { name: "Sass", icon: "fa-sass" },
  { name: "Figma", icon: "fa-figma" },
  { name: "Angular", icon: "fa-angular" },
  { name: "Vue", icon: "fa-vuejs" },
  { name: "React", icon: "fa-react" },
  { name: "Node", icon: "fa-node" },
  { name: "Git", icon: "fa-square-git" },
  { name: "Shopify", icon: "fa-shopify" },
  { name: "WordPress", icon: "fa-wordpress" },
];
</script>

<style scoped>
.spread {
  position: relative;
  min-height: 100vh;
  scroll-snap-align: start;
  padding: var(--space-xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: var(--space-lg);
  max-width: 1200px;
  margin: 0 auto;
}

.spread__header {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.spread__title {
  margin: 0;
  font-size: clamp(1.75rem, 3.2vw, 2.75rem);
  font-weight: 500;
  line-height: 1.05;
}

.spread__subhead {
  margin: 0;
  color: var(--ink-secondary);
}

.marks__grid {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  border-top: 1px solid var(--hairline);
  border-left: 1px solid var(--hairline);
}

.marks__cell {
  border-right: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
  background: var(--surface);
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xs);
  color: var(--ink);
  transition: background 0.15s ease, color 0.15s ease;
}

.marks__cell i {
  font-size: 1.75rem;
}

.marks__cell-caption {
  color: inherit;
  opacity: 0.7;
  font-size: 0.625rem;
}

.marks__cell:hover,
.marks__cell:focus-visible {
  background: var(--accent);
  color: var(--accent-ink);
}

.marks__cell:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: -4px;
}

.marks__cell:focus:not(:focus-visible) {
  outline: none;
}

@media (max-width: 900px) {
  .marks__grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 640px) {
  .spread {
    padding: var(--space-lg) var(--space-md);
  }

  .marks__cell i {
    font-size: 1.25rem;
  }
}
</style>
