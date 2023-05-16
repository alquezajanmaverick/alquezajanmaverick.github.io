<script setup>
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const diff = dayjs("2019-06-01").toNow(true);
</script>
<template>
  <div
    class="py-8 px-4 container mx-auto flex md:flex-row flex-col items-center gap-4 md:gap-8"
  >
    <div class="flex flex-col gap-4 flex-1">
      <h1
        class="leading-tight poppins font-semibold text-3xl text-slate-700 dark:text-slate-200"
      >
        UX/UI
        <span class="text-fuchsia-400 uppercase text-4xl md:text-5xl font-bold"
          >Designer</span
        >
      </h1>
      <h1
        class="leading-tight poppins font-semibold text-3xl text-slate-700 dark:text-slate-200"
      >
        Born in
        <span class="text-fuchsia-500 uppercase text-4xl md:text-5xl font-bold"
          >Philippines</span
        >, living in
        <span class="text-fuchsia-600 uppercase text-4xl md:text-5xl font-bold"
          >Zambales</span
        >
      </h1>
      <h1
        class="leading-tight poppins font-semibold text-3xl text-slate-700 dark:text-slate-200"
      >
        Raised by the
        <span class="text-purple-600 uppercase text-4xl md:text-5xl font-bold"
          >90's</span
        >
      </h1>
      <h1
        class="leading-tight poppins font-semibold text-3xl text-slate-700 dark:text-slate-200"
      >
        {{ diff }} of
        <span class="text-violet-600 uppercase text-4xl md:text-5xl font-bold"
          >experience</span
        >
        from current job
      </h1>
    </div>
    <div class="flex-1 w-full md:w-auto">
      <img class="block mx-auto w-full" src="./../assets/hero.svg" />
    </div>
  </div>
</template>
