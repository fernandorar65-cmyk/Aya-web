<template>
  <section class="w-full bg-white py-10 md:py-16 min-h-screen">
    <div class="w-full flex justify-center px-4 md:px-10 lg:px-16 xl:px-20">
      <div class="w-full flex flex-col">
        <HeroSection />
        <TabsSection />
        
        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <SupportFormCard />
          <VolunteerInfoCard />
        </div>

        <EmergencySection />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroSection from '../components/Support/HeroSection.vue'
import TabsSection from '../components/Support/TabsSection.vue'
import SupportFormCard from '../components/Support/SupportFormCard.vue'
import VolunteerInfoCard from '../components/Support/VolunteerInfoCard.vue'
import EmergencySection from '../components/Support/EmergencySection.vue'
</script>
