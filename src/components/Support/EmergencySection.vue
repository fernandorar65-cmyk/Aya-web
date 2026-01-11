<template>
  <div class="mt-20 bg-gray-900 text-white rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
    <div class="absolute top-0 right-0 w-80 h-80 bg-violet-400/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-violet-300/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
    <div class="relative z-10 max-w-lg">
      <div class="flex items-center gap-2 text-violet-300 mb-4">
        <Icon icon="material-symbols:warning" />
        <span class="text-xs font-bold uppercase tracking-[0.2em]">Urgent Care</span>
      </div>
      <h4 class="text-3xl font-bold mb-3">In Immediate Danger?</h4>
      <p class="text-gray-400 text-sm leading-relaxed">If you are experiencing a life-threatening emergency, please contact national emergency services or a crisis hotline immediately. Your safety is paramount.</p>
    </div>
    <div class="flex flex-wrap gap-4 relative z-10 w-full md:w-auto">
      <button class="flex-1 md:flex-none bg-red-500/20 text-red-400 border border-red-500/50 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all">
        <Icon icon="material-symbols:emergency" />
        Call 988 (Crisis Line)
      </button>
      <button class="flex-1 md:flex-none bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10">
        All Emergency Resources
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
