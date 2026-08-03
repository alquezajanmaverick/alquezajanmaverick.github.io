<template>
  <section class="spread marks">
    <RegistrationMarks />

    <header class="spread__header">
      <h2 class="spread__title">03 — Skill Set</h2>
      <p class="spread__subhead">
        The tools and technologies I design and build with, grouped by
        discipline.
      </p>
    </header>

    <div class="marks__groups">
      <div class="marks__group" v-for="group in groups" :key="group.name">
        <p class="label marks__group-label">{{ group.name }}</p>
        <div class="marks__grid" :style="{ '--cols': group.marks.length }">
          <div
            class="marks__cell"
            v-for="mark in group.marks"
            :key="mark.name"
            tabindex="0"
          >
            <i :class="['fa-brands', mark.icon]" aria-hidden="true"></i>
            <span class="label marks__cell-caption">{{ mark.name }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import RegistrationMarks from "./RegistrationMarks.vue";

const groups = [
  {
    name: "Frontend",
    marks: [
      { name: "HTML5", icon: "fa-html5" },
      { name: "CSS3", icon: "fa-css3-alt" },
      { name: "JavaScript", icon: "fa-square-js" },
      { name: "Sass", icon: "fa-sass" },
      { name: "Vue", icon: "fa-vuejs" },
      { name: "Angular", icon: "fa-angular" },
      { name: "React", icon: "fa-react" },
    ],
  },
  {
    name: "Backend",
    marks: [
      { name: "PHP", icon: "fa-php" },
      { name: "Laravel", icon: "fa-laravel" },
      { name: "Node", icon: "fa-node" },
      { name: "Python", icon: "fa-python" },
      { name: "Java", icon: "fa-java" },
    ],
  },
  {
    name: "Design",
    marks: [{ name: "Figma", icon: "fa-figma" }],
  },
  {
    name: "Web Platforms & Tools",
    marks: [
      { name: "WordPress", icon: "fa-wordpress" },
      { name: "Shopify", icon: "fa-shopify" },
      { name: "Git", icon: "fa-square-git" },
    ],
  },
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

.marks__groups {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.marks__group {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
}

.marks__group-label {
  margin: 0;
  color: var(--ink-secondary);
}

.marks__grid {
  display: grid;
  grid-template-columns: repeat(var(--cols, 4), minmax(0, 1fr));
  border-top: 1px solid var(--hairline);
  border-left: 1px solid var(--hairline);
  width: fit-content;
  max-width: 100%;
}

.marks__cell {
  border-right: 1px solid var(--hairline);
  border-bottom: 1px solid var(--hairline);
  background: var(--surface);
  aspect-ratio: 1;
  min-width: 92px;
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
    grid-template-columns: repeat(4, minmax(0, 1fr));
    width: 100%;
  }
}

@media (max-width: 640px) {
  .spread {
    padding: var(--space-lg) var(--space-md);
  }

  .marks__cell {
    min-width: 0;
  }

  .marks__cell i {
    font-size: 1.25rem;
  }
}
</style>
