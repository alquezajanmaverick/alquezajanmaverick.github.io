<template>
  <span class="reg-mark reg-mark--tl" aria-hidden="true"><RegMarkSvg /></span>
  <span class="reg-mark reg-mark--tr" aria-hidden="true"><RegMarkSvg /></span>
  <span class="reg-mark reg-mark--bl" aria-hidden="true"><RegMarkSvg /></span>
  <span class="reg-mark reg-mark--br" aria-hidden="true"><RegMarkSvg /></span>
</template>

<script setup>
import { h } from "vue";

const RegMarkSvg = () =>
  h(
    "svg",
    { viewBox: "0 0 24 24", width: "16", height: "16" },
    [
      h("circle", {
        cx: 12,
        cy: 12,
        r: 7,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": 1,
      }),
      h("line", { x1: 12, y1: 0, x2: 12, y2: 24, stroke: "currentColor", "stroke-width": 1 }),
      h("line", { x1: 0, y1: 12, x2: 24, y2: 12, stroke: "currentColor", "stroke-width": 1 }),
    ]
  );
</script>

<style scoped>
.reg-mark {
  position: absolute;
  color: var(--hairline);
  z-index: 2;
}

.reg-mark--tl {
  top: var(--space-sm);
  left: var(--space-sm);
}

.reg-mark--tr {
  top: var(--space-sm);
  right: var(--space-sm);
}

.reg-mark--bl {
  bottom: var(--space-sm);
  left: var(--space-sm);
}

.reg-mark--br {
  bottom: var(--space-sm);
  right: var(--space-sm);
}
</style>
