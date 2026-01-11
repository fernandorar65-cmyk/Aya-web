<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from './components/Home/Header.vue'
import Footer from './components/Home/Footer.vue'
</script>

<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <Header />
      <main class="flex flex-col items-center bg-background-light dark:bg-background-dark">
        <RouterView />
      </main>
      <Footer />
    </div>
  </div>
</template>
