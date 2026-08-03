<template>
  <section class="spread signoff">
    <RegistrationMarks />

    <div class="signoff__body">
      <div class="signoff__stamp">
        <span>Approved<br />for use</span>
      </div>

      <h2 class="spread__title">05 — Sign-off</h2>
      <p class="signoff__lede">
        Guidelines reviewed. Ready to put them to work on your project.
      </p>

      <a class="signoff__cta" href="mailto:alquezajanmaverick@gmail.com">
        Start a project →
      </a>
      <p class="signoff__contact">
        <span class="label">Contact</span>
        <span class="signoff__email">alquezajanmaverick@gmail.com</span>
      </p>
    </div>

    <p class="label signoff__footer">
      © 2026 Jan Maverick Alqueza — All marks reserved — End of document, 05/05
    </p>
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
  padding: var(--space-xl) var(--space-lg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: var(--space-xl);
  text-align: center;
}

.spread__title {
  margin: 0;
  font-size: clamp(1.75rem, 3.2vw, 2.75rem);
  font-weight: 500;
  line-height: 1.05;
  color: var(--ink-secondary);
}

.signoff__body {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-md);
  max-width: 640px;
}

.signoff__stamp {
  border: 2px solid var(--accent);
  border-radius: 50%;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(-6deg);
  color: var(--accent);
  font-family: var(--font-label);
  font-size: 0.8rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  outline: 1px solid var(--accent);
  outline-offset: 6px;
  margin-bottom: var(--space-sm);
}

.signoff__lede {
  font-size: 1.25rem;
  line-height: 1.5;
  margin: 0;
}

.signoff__cta {
  margin-top: var(--space-sm);
  background: var(--accent);
  color: var(--accent-ink);
  font-family: var(--font-label);
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  text-decoration: none;
  padding: 16px 32px;
  border: 1px solid var(--accent);
  transition: background 0.2s ease, color 0.2s ease;
}

.signoff__cta:hover {
  background: var(--ink);
  border-color: var(--ink);
}

.signoff__cta:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

.signoff__contact {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: var(--space-xs);
  color: var(--ink-secondary);
}

.signoff__email {
  font-family: var(--font-label);
  font-size: 0.8rem;
  letter-spacing: 0.02em;
}

.signoff__footer {
  color: var(--ink-secondary);
}

@media (max-width: 640px) {
  .spread {
    padding: var(--space-lg) var(--space-md);
  }
}
</style>
