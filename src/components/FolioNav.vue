<template>
  <header class="nav">
    <div class="nav__inner container">
      <a class="nav__brand" href="#hero" aria-label="Back to top">
        Mavs<span class="nav__brand-dot">.</span>
      </a>

      <nav class="nav__links" aria-label="Primary">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="{ 'is-active': active === link.id }"
          class="nav__link mono"
        >
          {{ link.label }}
        </a>
      </nav>

      <button
        class="nav__theme mono"
        type="button"
        :aria-pressed="isNegative"
        @click="toggle"
      >
        <i :class="isNegative ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"></i>
        <span class="nav__theme-label">{{ isNegative ? "Light" : "Dark" }}</span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { useTheme } from "../theme";

defineProps({
  active: { type: String, required: true },
});

const links = [
  { id: "capabilities", label: "Capabilities" },
  { id: "skills", label: "Skills" },
  { id: "process", label: "Process" },
  { id: "contact", label: "Contact" },
];

const { isNegative, toggle } = useTheme();
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  height: var(--nav-h);
  background: color-mix(in srgb, var(--bg) 82%, transparent);
  -webkit-backdrop-filter: blur(14px) saturate(1.4);
  backdrop-filter: blur(14px) saturate(1.4);
  border-bottom: 1px solid var(--line);
}

.nav__inner {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-5);
}

.nav__brand {
  font-family: var(--font);
  font-size: 1.35rem;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.nav__brand-dot {
  color: var(--accent);
}

.nav__links {
  display: none;
  align-items: center;
  gap: var(--space-5);
}

.nav__link {
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-2);
  padding: 6px 2px;
  border-bottom: 2px solid transparent;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.nav__link:hover {
  color: var(--ink);
}

.nav__link.is-active {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

.nav__theme {
  display: inline-flex;
  align-items: center;
  gap: var(--space-2);
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
  color: var(--ink);
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 8px 14px;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.nav__theme i {
  font-size: 0.85rem;
}

.nav__theme:hover,
.nav__theme:focus-visible {
  border-color: var(--accent);
  color: var(--accent);
}

@media (min-width: 820px) {
  .nav__links {
    display: flex;
  }
}

@media (max-width: 420px) {
  .nav__theme-label {
    display: none;
  }
}
</style>
