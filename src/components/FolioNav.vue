<template>
  <div class="folio">
    <span class="folio__count label">
      <span class="folio__current">{{ String(active).padStart(2, "0") }}</span>
      / {{ String(total).padStart(2, "0") }}
    </span>
    <button
      class="folio__toggle label"
      type="button"
      :aria-pressed="isNegative"
      @click="toggle"
    >
      {{ isNegative ? "NEGATIVE" : "PAPER" }}
    </button>
  </div>
</template>

<script setup>
import { useTheme } from "../theme";

defineProps({
  active: { type: Number, required: true },
  total: { type: Number, required: true },
});

const { isNegative, toggle } = useTheme();
</script>

<style scoped>
.folio {
  position: fixed;
  bottom: var(--space-sm);
  left: var(--space-sm);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  background: var(--page);
  padding: 6px 10px;
  border: 1px solid var(--hairline);
}

.folio__count {
  color: var(--ink-secondary);
}

.folio__current {
  color: var(--accent);
}

.folio__toggle {
  background: none;
  border: 1px solid var(--hairline);
  color: var(--ink);
  padding: 4px 10px;
  transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
}

.folio__toggle:hover,
.folio__toggle:focus-visible {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--accent-ink);
}

.folio__toggle:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}
</style>
