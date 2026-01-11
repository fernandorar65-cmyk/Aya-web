<template>
  <div class="py-16 bg-violet-50 rounded-[2.5rem] p-12 relative overflow-hidden">
    <div class="absolute -top-10 -right-10 opacity-5">
      <Icon icon="material-symbols:local-florist" class="text-violet-400 text-[200px]" />  
    </div>
    <h2 class="text-gray-900 text-[28px] font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-5 text-center">How it Works: One help at a time</h2>
    <p class="text-gray-600 text-center mb-16 max-w-xl mx-auto">Our streamlined psychological support process guides you through every step of the journey.</p>
    <div class="relative flex flex-col md:flex-row justify-between items-start gap-12 px-4">
      <!-- Step 1 -->
      <div class="flex flex-col items-center text-center flex-1 relative z-10">
        <div class="size-16 rounded-full bg-violet-400 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-xl shadow-violet-400/30 ring-4 ring-white">
          <Icon icon="material-symbols:forum" class="text-2xl" />
        </div>
        <h3 class="text-gray-900 font-bold mb-3 text-lg">First Contact</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Reach out via our secure form or 24/7 hotline to start the journey.</p>
      </div>
      <div class="hidden md:block absolute top-8 left-[18%] right-[70%] h-[2px] bg-gradient-to-r from-violet-400 to-violet-300"></div>
      
      <!-- Step 2 -->
      <div class="flex flex-col items-center text-center flex-1 relative z-10">
        <div class="size-16 rounded-full bg-violet-400 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-xl shadow-violet-400/30 ring-4 ring-white">
          <Icon icon="material-symbols:fact-check" class="text-2xl" />
        </div>
        <h3 class="text-gray-900 font-bold mb-3 text-lg">Initial Assessment</h3>
        <p class="text-gray-600 text-sm leading-relaxed">A clinical psychologist evaluates your unique needs with empathy.</p>
      </div>
      <div class="hidden md:block absolute top-8 left-[43%] right-[45%] h-[2px] bg-gradient-to-r from-violet-400 to-violet-300"></div>
      
      <!-- Step 3 -->
      <div class="flex flex-col items-center text-center flex-1 relative z-10">
        <div class="size-16 rounded-full bg-violet-400 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-xl shadow-violet-400/30 ring-4 ring-white">
          <Icon icon="material-symbols:group-add" class="text-2xl" />
        </div>
        <h3 class="text-gray-900 font-bold mb-3 text-lg">Matching</h3>
        <p class="text-gray-600 text-sm leading-relaxed">We pair you with a specialized volunteer that fits your profile.</p>
      </div>
      <div class="hidden md:block absolute top-8 left-[68%] right-[20%] h-[2px] bg-gradient-to-r from-violet-400 to-violet-300"></div>
      
      <!-- Step 4 -->
      <div class="flex flex-col items-center text-center flex-1 relative z-10">
        <div class="size-16 rounded-full bg-violet-400 text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-xl shadow-violet-400/30 ring-4 ring-white">
          <Icon icon="material-symbols:favorite" class="text-2xl" />
        </div>
        <h3 class="text-gray-900 font-bold mb-3 text-lg">Accompaniment</h3>
        <p class="text-gray-600 text-sm leading-relaxed">Ongoing, personalized support for as long as you need it.</p>
      </div>
    </div>
    
    <!-- Call to Action Buttons -->
    <div class="mt-20 flex flex-col sm:flex-row gap-6 justify-center items-center">
      <button class="min-w-[220px] bg-violet-400 text-gray-900 font-bold py-4 px-8 rounded-2xl hover:bg-violet-500 hover:-translate-y-1 transition-all shadow-lg shadow-violet-400/25">
        Start the Process
      </button>
      <button class="min-w-[220px] border-2 border-violet-400/30 text-gray-900 font-bold py-4 px-8 rounded-2xl hover:bg-violet-50 transition-colors">
        Become a Volunteer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// How it Works Section component
import { Icon } from '@iconify/vue'
</script>
