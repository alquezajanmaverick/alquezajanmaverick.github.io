<template>
  <section id="process" class="section process">
    <div class="container">
      <header class="section__head reveal">
        <span class="section__marker mono">04 / How I Work</span>
        <h2 class="section__title">A clear thread, start to finish</h2>
        <p class="section__sub">
          No black boxes, no radio silence. These are the working rules I keep
          on every project.
        </p>
      </header>

      <div class="process__grid">
        <div class="process__col reveal">
          <h3 class="process__col-title mono">
            <i class="fa-solid fa-check" aria-hidden="true"></i>
            Always
          </h3>
          <ol class="process__list">
            <li v-for="(item, i) in dos" :key="i">
              <span class="process__index mono">{{ String(i + 1).padStart(2, "0") }}</span>
              <span class="process__item">{{ item }}</span>
            </li>
          </ol>
        </div>

        <div class="process__col reveal" style="transition-delay: 120ms">
          <h3 class="process__col-title process__col-title--muted mono">
            <i class="fa-solid fa-xmark" aria-hidden="true"></i>
            Off the table
          </h3>
          <ol class="process__list">
            <li v-for="(item, i) in donts" :key="i">
              <span class="process__index mono">{{ String(i + 1).padStart(2, "0") }}</span>
              <span class="process__item">{{ item }}</span>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const dos = [
  "Bring the real problem, not just the deliverable you think you need.",
  "Expect design and the code that ships it — same person, one thread.",
  "Iterate in the open: fast replies, visible work in progress.",
];

const donts = [
  "Expect a template reskin.",
  "Expect scope to grow without a conversation first.",
  "Expect radio silence between milestones.",
];
</script>

<style scoped>
.process__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-6);
}

.process__col {
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  box-shadow: var(--shadow-sm);
}

.process__col-title {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  margin: 0 0 var(--space-5);
  color: var(--accent);
  font-size: 0.75rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.process__col-title i {
  font-size: 0.85rem;
}

.process__col-title--muted {
  color: var(--ink-3);
}

.process__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.process__list li {
  display: flex;
  gap: var(--space-4);
  padding: var(--space-4) 0;
  border-top: 1px solid var(--line);
  font-size: 1.0625rem;
  line-height: 1.5;
}

.process__list li:first-child {
  border-top: none;
  padding-top: 0;
}

.process__list li:last-child {
  padding-bottom: 0;
}

.process__index {
  color: var(--ink-3);
  font-size: 0.72rem;
  letter-spacing: 0.08em;
  padding-top: 5px;
  flex-shrink: 0;
}

.process__item {
  color: var(--ink-2);
}

@media (min-width: 720px) {
  .process__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-5);
  }
}
</style>
