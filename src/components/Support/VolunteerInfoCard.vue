<template>
  <div class="flex flex-col gap-8">
    <div class="bg-green-50 rounded-2xl p-8 border border-green-200 relative overflow-hidden">
      <div class="absolute -bottom-8 -left-8 opacity-10 rotate-12 pointer-events-none">
        <span class="material-symbols-outlined text-green-400 text-9xl">emoji_nature</span>
      </div>
      <h3 class="text-2xl font-bold mb-4 text-gray-900">The Impact of Your Time</h3>
      <p class="text-gray-600 mb-8 leading-relaxed">
        AYA volunteers are the heartbeat of our organization. Like a lotus rising through water, your presence helps others find their light.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
        <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-green-200">
          <div class="text-green-400 font-black text-3xl">450+</div>
          <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Adolescents Supported</div>
        </div>
        <div class="bg-white/80 backdrop-blur-sm p-5 rounded-xl shadow-sm border border-green-200">
          <div class="text-green-400 font-black text-3xl">1,200</div>
          <div class="text-[10px] font-bold uppercase tracking-widest text-gray-400 mt-1">Hours of Listening</div>
        </div>
      </div>
    </div>
    
    <div class="flex flex-col gap-6 px-2">
      <h4 class="text-lg font-bold text-gray-900">How to become a volunteer</h4>
      <div class="space-y-4">
        <div class="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-green-400/30 transition-all group">
          <div class="bg-green-100 text-green-400 w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-400 group-hover:text-white transition-all">
            <span class="material-symbols-outlined">psychology</span>
          </div>
          <div class="flex flex-col justify-center">
            <h5 class="font-bold text-sm text-gray-900">Empathetic Training</h5>
            <p class="text-xs text-gray-500 leading-relaxed mt-1">Comprehensive 4-week psychological first-aid training program.</p>
          </div>
        </div>
        <div class="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-green-400/30 transition-all group">
          <div class="bg-green-100 text-green-400 w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-400 group-hover:text-white transition-all">
            <span class="material-symbols-outlined">schedule</span>
          </div>
          <div class="flex flex-col justify-center">
            <h5 class="font-bold text-sm text-gray-900">Flexible Commitment</h5>
            <p class="text-xs text-gray-500 leading-relaxed mt-1">Minimum of 4 hours per week, tailored to your schedule.</p>
          </div>
        </div>
        <div class="flex gap-4 p-5 rounded-xl bg-gray-50 border border-gray-200 hover:border-green-400/30 transition-all group">
          <div class="bg-green-100 text-green-400 w-12 h-12 rounded-full flex items-center justify-center shrink-0 group-hover:bg-green-400 group-hover:text-white transition-all">
            <span class="material-symbols-outlined">volunteer_activism</span>
          </div>
          <div class="flex flex-col justify-center">
            <h5 class="font-bold text-sm text-gray-900">Supportive Community</h5>
            <p class="text-xs text-gray-500 leading-relaxed mt-1">Join our monthly group supervision and debriefing circles.</p>
          </div>
        </div>
      </div>
      <button class="w-full bg-white text-green-400 font-bold py-4 rounded-xl border-2 border-green-400/20 hover:border-green-400 hover:bg-green-50 transition-all flex items-center justify-center gap-2 mt-2">
        <span class="material-symbols-outlined">favorite</span>
        Apply to Volunteer
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// Volunteer Info Card component
</script>
