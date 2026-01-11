<template>
  <section class="w-full bg-violet-50 py-24 relative overflow-hidden">
    <div class="absolute top-0 right-0 opacity-10 pointer-events-none">
      <svg fill="none" height="400" viewBox="0 0 200 200" width="400" xmlns="http://www.w3.org/2000/svg" class="text-violet-400">
        <path d="M100 20C100 20 120 70 180 70C180 70 130 90 130 150C130 150 110 100 50 100C50 100 100 80 100 20Z" fill="currentColor"></path>
      </svg>
    </div>
    <div class="w-full flex justify-center px-4 md:px-10 lg:px-16 xl:px-20">
      <div class="w-full max-w-[1000px] flex flex-col items-center text-center relative z-10 px-6">
        <Icon icon="material-symbols:spa" class="text-violet-600 text-5xl mb-8" />
        <h2 class="text-gray-900 text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 font-display">
          Restoring hope through human connection and professional empathy.
        </h2>
        <p class="text-gray-600 text-xl md:text-2xl font-medium italic leading-relaxed max-w-[800px] mx-auto">
          "We believe in the power of being heard. Every lotus blooms in its own time; we provide the gentle environment for that growth."
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
