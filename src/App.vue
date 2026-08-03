<template>
  <div id="scroller" ref="scroller">
    <CoverSpread />
    <PaletteSpread />
    <MarksSpread />
    <UsageSpread />
    <SignOffSpread />
  </div>
  <FolioNav :active="active" :total="5" />
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";
import CoverSpread from "./components/CoverSpread.vue";
import PaletteSpread from "./components/PaletteSpread.vue";
import MarksSpread from "./components/MarksSpread.vue";
import UsageSpread from "./components/UsageSpread.vue";
import SignOffSpread from "./components/SignOffSpread.vue";
import FolioNav from "./components/FolioNav.vue";

const scroller = ref(null);
const active = ref(1);
let observer;

onMounted(() => {
  const sections = scroller.value.querySelectorAll(".spread");
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          active.value = Array.from(sections).indexOf(entry.target) + 1;
        }
      });
    },
    { root: scroller.value, threshold: 0.6 }
  );
  sections.forEach((section) => observer.observe(section));
});

onUnmounted(() => {
  observer?.disconnect();
});
</script>

<style scoped>
#scroller {
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  height: 100vh;
}
</style>
