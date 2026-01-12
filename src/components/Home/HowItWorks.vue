<template>
  <section id="how-it-works" class="w-full bg-gray-100 py-20">
    <div class="w-full flex justify-center px-4 md:px-10 lg:px-16 xl:px-20">
      <div class="w-full flex flex-col items-center">
      <div class="text-center mb-16">
        <h2 class="text-3xl font-bold text-black mb-4">{{ $t('howItWorks.title') }}</h2>
        <p class="text-gray-400">{{ $t('howItWorks.subtitle') }}</p>
      </div>
      <div class="flex flex-col md:flex-row justify-between items-start gap-12 relative">
        <div class="hidden md:block absolute top-10 left-[10%] right-[10%] h-0.5 border-t-2 border-dashed border-violet-300 z-0"></div>
        <div class="flex flex-col items-center text-center gap-6 relative z-10 flex-1">
          <div class="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-black text-violet-400 border-2 border-violet-200">1</div>
          <h4 class="text-xl font-bold text-black">{{ $t('howItWorks.step1.title') }}</h4>
          <p class="text-gray-400 font-semibold">{{ $t('howItWorks.step1.description') }}</p>
        </div>
        <div class="flex flex-col items-center text-center gap-6 relative z-10 flex-1">
          <div class="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-black text-violet-400 border-2 border-violet-200">2</div>
          <h4 class="text-xl font-bold text-black">{{ $t('howItWorks.step2.title') }}</h4>
          <p class="text-gray-400 font-semibold">{{ $t('howItWorks.step2.description') }}</p>
        </div>
        <div class="flex flex-col items-center text-center gap-6 relative z-10 flex-1">
          <div class="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-2xl font-black text-violet-400 border-2 border-violet-200">3</div>
          <h4 class="text-xl font-bold text-black">{{ $t('howItWorks.step3.title') }}</h4>
          <p class="text-gray-400 font-semibold">{{ $t('howItWorks.step3.description') }}</p>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// How It Works component
</script>
