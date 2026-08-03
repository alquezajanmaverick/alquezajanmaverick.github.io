<template>
  <div id="top">
    <FolioNav :active="active" />
    <main>
      <CoverSpread />
      <CapabilitiesSpread />
      <MarksSpread />
      <UsageSpread />
      <SignOffSpread />
    </main>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import FolioNav from "./components/FolioNav.vue";
import CoverSpread from "./components/CoverSpread.vue";
import CapabilitiesSpread from "./components/CapabilitiesSpread.vue";
import MarksSpread from "./components/MarksSpread.vue";
import UsageSpread from "./components/UsageSpread.vue";
import SignOffSpread from "./components/SignOffSpread.vue";

const sections = ["hero", "capabilities", "skills", "process", "contact"];
const active = ref("hero");

let spyObserver;
let revealObserver;

onMounted(() => {
  spyObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = entry.target.id;
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (el) spyObserver.observe(el);
  });

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
});

onUnmounted(() => {
  spyObserver?.disconnect();
  revealObserver?.disconnect();
});
</script>
