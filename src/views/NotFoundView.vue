<template>
  <section class="w-full bg-white py-20 md:py-32 min-h-screen flex items-center justify-center">
    <div class="w-full flex justify-center px-4 md:px-10 lg:px-16 xl:px-20">
      <div class="w-full max-w-2xl text-center">
        <div class="mb-8">
          <span class="material-symbols-outlined text-green-400 text-8xl mb-4">error_outline</span>
        </div>
        <h1 class="text-6xl md:text-7xl font-black text-gray-900 mb-6">404</h1>
        <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          Sorry, we couldn't find the page you're looking for. The page may have been moved or doesn't exist.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/" class="inline-flex items-center justify-center bg-green-400 text-gray-900 font-bold py-3 px-8 rounded-xl hover:bg-green-500 transition-all shadow-lg shadow-green-400/20">
            <span class="material-symbols-outlined mr-2">home</span>
            Go to Home
          </RouterLink>
          <button @click="$router.go(-1)" class="inline-flex items-center justify-center border-2 border-gray-300 text-gray-700 font-bold py-3 px-8 rounded-xl hover:bg-gray-50 transition-all">
            <span class="material-symbols-outlined mr-2">arrow_back</span>
            Go Back
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
