<template>
  <section id="who-we-help" class="w-full max-w-[1280px] px-4 md:px-10 py-20">
    <div class="flex flex-col gap-4 mb-12 px-4">
      <h2 class="text-3xl font-bold tracking-tight">Who We Help</h2>
      <div class="w-20 h-1.5 bg-primary rounded-full"></div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
      <!-- Adolescents -->
      <div class="group p-8 rounded-3xl bg-white dark:bg-green-900 border border-green-200 dark:border-green-700 hover:shadow-xl transition-all hover:-translate-y-1">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
          <span class="material-symbols-outlined text-3xl">child_care</span>
        </div>
        <h3 class="text-xl font-bold mb-3">Youth &amp; Adolescents</h3>
        <p class="text-green-700 dark:text-green-300 leading-relaxed mb-6">Navigating school, relationships, and identity can be overwhelming. We provide a non-judgmental ear for the younger generation.</p>
        <a class="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
          Learn more 
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <!-- Crisis -->
      <div class="group p-8 rounded-3xl bg-white dark:bg-green-900 border border-green-200 dark:border-green-700 hover:shadow-xl transition-all hover:-translate-y-1">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
          <span class="material-symbols-outlined text-3xl">save_alt</span>
        </div>
        <h3 class="text-xl font-bold mb-3">People in Distress</h3>
        <p class="text-green-700 dark:text-green-300 leading-relaxed mb-6">Immediate emotional support for those facing life's hardest moments. You don't have to carry the weight alone.</p>
        <a class="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
          Learn more 
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
      <!-- Elderly -->
      <div class="group p-8 rounded-3xl bg-white dark:bg-green-900 border border-green-200 dark:border-green-700 hover:shadow-xl transition-all hover:-translate-y-1">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
          <span class="material-symbols-outlined text-3xl">elderly</span>
        </div>
        <h3 class="text-xl font-bold mb-3">Elderly Companionship</h3>
        <p class="text-green-700 dark:text-green-300 leading-relaxed mb-6">Fighting loneliness through regular companionship and active listening for our seniors in isolation.</p>
        <a class="text-primary font-bold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
          Learn more 
          <span class="material-symbols-outlined text-sm">arrow_forward</span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Who We Help component
</script>
