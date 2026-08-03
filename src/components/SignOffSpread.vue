<template>
  <section id="contact" class="section contact">
    <div class="container">
      <div class="contact__card reveal">
        <span class="section__marker mono">05 / Contact</span>
        <h2 class="contact__title">Let's build something together</h2>
        <p class="contact__sub">
          Have a project in mind? My inbox is open — send a note and we'll take
          it from there.
        </p>
        <a class="btn btn--primary contact__cta" href="mailto:alquezajanmaverick@gmail.com">
          Start a project&nbsp;&rarr;
        </a>
        <p class="contact__email mono">alquezajanmaverick@gmail.com</p>
      </div>
    </div>

    <footer class="contact__footer">
      <div class="container contact__footer-inner mono">
        <span>&copy; 2026 Jan Maverick Alqueza</span>
        <span>Design &amp; code by Maverick</span>
      </div>
    </footer>
  </section>
</template>

<script setup></script>

<style scoped>
.contact {
  padding-bottom: var(--space-8);
}

.contact__card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius-lg);
  padding: clamp(3rem, 7vw, 5.5rem) var(--space-5);
  box-shadow: var(--shadow-sm);
}

.contact__title {
  margin: var(--space-3) 0 0;
  max-width: 18ch;
  font-size: clamp(2rem, 4.5vw, 3.25rem);
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.02;
}

.contact__sub {
  margin: var(--space-4) 0 0;
  max-width: 44ch;
  color: var(--ink-2);
  font-size: 1.125rem;
  line-height: 1.55;
}

.contact__cta {
  margin-top: var(--space-6);
}

.contact__email {
  margin: var(--space-5) 0 0;
  color: var(--ink-3);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
}

.contact__footer {
  margin-top: var(--space-8);
  border-top: 1px solid var(--line);
  padding-top: var(--space-5);
}

.contact__footer-inner {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-3);
  justify-content: space-between;
  color: var(--ink-3);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}
</style>
