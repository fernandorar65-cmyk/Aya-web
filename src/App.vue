<script setup lang="ts">
import Header from './components/Header.vue'
import HeroSection from './components/HeroSection.vue'
import MissionStatement from './components/MissionStatement.vue'
import WhoWeHelp from './components/WhoWeHelp.vue'
import HowItWorks from './components/HowItWorks.vue'
import CrisisSection from './components/CrisisSection.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="relative flex h-auto min-h-screen w-full flex-col group/design-root overflow-x-hidden">
    <div class="layout-container flex h-full grow flex-col">
      <Header />
      <main class="flex flex-col items-center bg-background-light dark:bg-background-dark">
        <HeroSection />
        <MissionStatement />
        <WhoWeHelp />
        <HowItWorks />
        <CrisisSection />
      </main>
      <Footer />
    </div>
  </div>
</template>
