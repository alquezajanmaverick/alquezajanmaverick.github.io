<template>
  <section id="capabilities" class="section caps">
    <div class="container">
      <header class="section__head reveal">
        <span class="section__marker mono">02 / Capabilities</span>
        <h2 class="section__title">What I can take from idea to launch</h2>
        <p class="section__sub">
          Design and the code that ships it, handled by one person — so nothing
          gets lost between the wireframe and the deploy.
        </p>
      </header>

      <div class="caps__grid">
        <article
          v-for="(cap, i) in caps"
          :key="cap.title"
          class="cap reveal"
          :style="{ transitionDelay: `${i * 60}ms` }"
        >
          <i :class="['cap__icon', cap.icon]" aria-hidden="true"></i>
          <h3 class="cap__title">{{ cap.title }}</h3>
          <p class="cap__body">{{ cap.body }}</p>
          <p class="cap__tags mono">{{ cap.tags }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const caps = [
  {
    icon: "fa-solid fa-pen-nib",
    title: "UX/UI Design",
    body: "Interfaces and design systems in Figma — from first wireframe to a component set that's ready to hand to code.",
    tags: "Figma · Prototyping · Design systems",
  },
  {
    icon: "fa-solid fa-code",
    title: "Frontend Development",
    body: "Semantic, accessible, responsive builds with HTML5, CSS3, JavaScript, and modern component frameworks.",
    tags: "Vue · Angular · React · Sass",
  },
  {
    icon: "fa-solid fa-server",
    title: "Backend & APIs",
    body: "Server-side logic, databases, and integrations built with established, battle-tested languages.",
    tags: "PHP · Laravel · Node · Python · Java",
  },
  {
    icon: "fa-solid fa-cart-shopping",
    title: "E-commerce & CMS",
    body: "Shopify and WordPress builds — themes, customisation, and stores that launch fast and scale cleanly.",
    tags: "Shopify · WordPress",
  },
];
</script>

<style scoped>
.caps__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

.cap {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.cap:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-md);
  border-color: color-mix(in srgb, var(--accent) 45%, var(--line));
}

.cap__icon {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: var(--radius);
  background: var(--accent-soft);
  color: var(--accent);
  font-size: 1.1rem;
  margin-bottom: var(--space-5);
}

.cap__title {
  margin: 0 0 var(--space-2);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.01em;
}

.cap__body {
  margin: 0;
  color: var(--ink-2);
  line-height: 1.55;
}

.cap__tags {
  margin: var(--space-4) 0 0;
  color: var(--ink-3);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

@media (min-width: 720px) {
  .caps__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5);
  }
}
</style>
