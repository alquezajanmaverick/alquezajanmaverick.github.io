<template>
  <section class="spread palette">
    <RegistrationMarks />

    <header class="spread__header">
      <h2 class="spread__title">02 — Palette</h2>
      <p class="spread__subhead">Identity specification. Values fixed; do not alter.</p>
    </header>

    <div class="palette__primary card">
      <div class="palette__primary-swatch"></div>
      <dl class="palette__spec label">
        <div><dt>Name</dt><dd>Proof Red</dd></div>
        <div><dt>Hex</dt><dd>#C63A0F</dd></div>
        <div><dt>Usage</dt><dd>Primary accent — CTA, stamps, active state</dd></div>
      </dl>
    </div>

    <div class="palette__grid">
      <div class="palette__fact card">
        <p class="label palette__fact-label">Origin</p>
        <p class="palette__fact-value">Born in the Philippines. Based in Zambales.</p>
      </div>
      <div class="palette__fact card">
        <p class="label palette__fact-label">Era</p>
        <p class="palette__fact-value">Raised in the 90s.</p>
      </div>
      <div class="palette__fact card">
        <p class="label palette__fact-label">Role</p>
        <p class="palette__fact-value">UX/UI Designer.</p>
      </div>
      <div class="palette__fact card">
        <p class="label palette__fact-label">Experience</p>
        <p class="palette__fact-value">{{ experience }} from current job.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from "vue";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import RegistrationMarks from "./RegistrationMarks.vue";

dayjs.extend(relativeTime);

const experience = computed(() => dayjs("2019-06-01").toNow(true));
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

.card {
  background: var(--surface);
  border: 1px solid var(--hairline);
}

.palette__primary {
  display: flex;
  align-items: stretch;
}

.palette__primary-swatch {
  width: 160px;
  background: var(--accent);
  flex-shrink: 0;
}

.palette__spec {
  padding: var(--space-md);
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.palette__spec dt {
  color: var(--ink-secondary);
}

.palette__spec dd {
  margin: 2px 0 0;
  color: var(--ink);
  font-size: 0.8125rem;
}

.palette__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--space-sm);
}

.palette__fact {
  padding: var(--space-md);
}

.palette__fact-label {
  color: var(--ink-secondary);
  margin: 0 0 var(--space-xs);
}

.palette__fact-value {
  margin: 0;
  font-size: 0.8125rem;
  line-height: 1.4;
}

@media (max-width: 900px) {
  .palette__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .spread {
    padding: var(--space-lg) var(--space-md);
  }

  .palette__primary {
    flex-direction: column;
  }

  .palette__primary-swatch {
    width: 100%;
    height: 64px;
  }
}
</style>
