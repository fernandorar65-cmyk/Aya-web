<template>
  <section class="w-full bg-white py-10 md:py-16">
    <div class="w-full flex justify-center px-4 md:px-10 lg:px-16 xl:px-20">
      <div class="w-full flex flex-col">
        <OurImpactSection />
        <HowItWorksSection />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import OurImpactSection from '../components/About/OurImpactSection.vue'
import HowItWorksSection from '../components/About/HowItWorksSection.vue'
</script>
