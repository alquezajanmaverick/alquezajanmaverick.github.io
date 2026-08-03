<template>
  <section class="spread usage">
    <RegistrationMarks />

    <header class="spread__header">
      <h2 class="spread__title">04 — Usage</h2>
      <p class="spread__subhead">Rules of engagement — how this mark is applied in collaboration.</p>
    </header>

    <div class="usage__columns">
      <div class="usage__column">
        <p class="label usage__column-title usage__column-title--do">Do</p>
        <ol class="usage__list">
          <li v-for="(item, i) in dos" :key="i">
            <span class="label usage__index">{{ String(i + 1).padStart(2, "0") }}</span>
            <span>{{ item }}</span>
          </li>
        </ol>
      </div>
      <div class="usage__column">
        <p class="label usage__column-title usage__column-title--dont">Don't</p>
        <ol class="usage__list">
          <li v-for="(item, i) in donts" :key="i">
            <span class="label usage__index">{{ String(i + 1).padStart(2, "0") }}</span>
            <span>{{ item }}</span>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import RegistrationMarks from "./RegistrationMarks.vue";

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

.usage__columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
}

.usage__column-title {
  margin: 0 0 var(--space-md);
  padding-bottom: var(--space-xs);
  border-bottom: 1px solid var(--hairline);
}

.usage__column-title--do {
  color: var(--accent);
}

.usage__column-title--dont {
  color: var(--ink-secondary);
}

.usage__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
}

.usage__list li {
  display: flex;
  gap: var(--space-sm);
  align-items: baseline;
  font-size: 1.0625rem;
  line-height: 1.5;
}

.usage__index {
  color: var(--ink-secondary);
  flex-shrink: 0;
}

@media (max-width: 768px) {
  .usage__columns {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}

@media (max-width: 640px) {
  .spread {
    padding: var(--space-lg) var(--space-md);
  }
}
</style>
