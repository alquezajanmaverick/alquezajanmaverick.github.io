<template>
  <section id="skills" class="section skills">
    <div class="container">
      <header class="section__head reveal">
        <span class="section__marker mono">03 / Skill Set</span>
        <h2 class="section__title">Tools I design and build with</h2>
        <p class="section__sub">
          A working stack, grouped by discipline — frontend to backend to the
          platforms I ship on.
        </p>
      </header>

      <div class="skills__grid">
        <div
          v-for="(group, g) in groups"
          :key="group.name"
          class="skill-group reveal"
          :style="{ transitionDelay: `${g * 70}ms` }"
        >
          <h3 class="skill-group__label mono">{{ group.name }}</h3>
          <div class="skill-group__chips">
            <span v-for="mark in group.marks" :key="mark.name" class="chip">
              <i :class="['fa-brands', mark.icon]" aria-hidden="true"></i>
              <span class="chip__name">{{ mark.name }}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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
.skills__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

.skill-group__label {
  margin: 0 0 var(--space-3);
  color: var(--accent);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.skill-group__chips {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  padding: 9px 16px;
  border-radius: 999px;
  background: var(--surface);
  border: 1px solid var(--line);
  font-size: 0.95rem;
  transition: transform 0.15s ease, border-color 0.2s ease, box-shadow 0.2s ease;
}

.chip:hover {
  transform: translateY(-2px);
  border-color: var(--accent);
  box-shadow: var(--shadow-sm);
}

.chip i {
  color: var(--ink-2);
  font-size: 1.05rem;
}

.chip:hover i {
  color: var(--accent);
}

@media (min-width: 720px) {
  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-7) var(--space-6);
  }
}
</style>
