<script setup>
import { Lighting } from './../index'
import { ref } from 'vue'
const toggleMenu = ref(false)

const toggle = () => {
  toggleMenu.value = !toggleMenu.value
}

</script>

<template>
  <div class="shadow-md backdrop-filter backdrop-blur-sm bg-slate-200 dark:bg-slate-500  bg-opacity-25 dark:bg-opacity-10">
    <div class="flex justify-between items-center w-full px-4 md:px-8 py-4">
      <h2 class="great-vibes text-5xl text-slate-600 dark:text-slate-300"><span class="hidden md:inline">Maverick</span><span class="md:hidden inline">Mavs</span></h2>
      <div class="flex flex-row gap-4 items-center">
        <Lighting/>
        <!-- <ul class="poppins md:flex flex-row gap-4 text-lg text-slate-700 dark:text-slate-200 hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Experience</a>
          </li>
        </ul> -->
        <!-- <div class="block md:hidden relative">
          <a href="#" @click="toggle()" v-if="!toggleMenu"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="w-8 h-8 fill-slate-700 dark:fill-slate-300"><path d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/></svg>
          </a>
          <a href="#" @click="toggle()" v-if="toggleMenu" class="w-8 h-8">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 fill-slate-700 dark:fill-slate-300" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></a>
          <div class="absolute right-4 backdrop-filter backdrop-blur-sm bg-slate-100 dark:bg-slate-700 bg-opacity-50 dark:bg-opacity-40 rounded-xl shadow flex z-50 py-2" v-if="toggleMenu">
            <ul class="poppins flex flex-col text-center gap-0 text-lg text-slate-700 dark:text-slate-400">
              <li class="relative">
                <a href="#" class="px-8 py-2 block">Home</a>
              </li>
              <li class="relative">
                <a href="#" class="px-8 py-2 block">About</a>
              </li>
              <li class="relative">
                <a href="#" class="px-8 py-2 block">Experience</a>
              </li>
            </ul>
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>