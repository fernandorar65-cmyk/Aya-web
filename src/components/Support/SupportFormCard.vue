<template>
  <div class="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
      <Icon icon="material-symbols:spa" class="text-green-400 text-6xl" />
    </div>
    <div class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-end">
          <h3 class="text-xl font-bold text-gray-900">Personalized Care</h3>
          <span class="text-xs font-bold text-green-400 tracking-wider uppercase">Step 1 of 3</span>
        </div>
        <div class="w-full bg-green-100 h-2 rounded-full overflow-hidden">
          <div class="bg-green-400 h-full w-1/3 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.4)] transition-all duration-700"></div>
        </div>
      </div>
      <p class="text-sm text-gray-500 italic leading-relaxed">"Taking the first step is often the hardest part. We're here to listen without judgment, providing a space for your growth."</p>
      <form class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-bold text-gray-700">How are you feeling today?</label>
          <select class="rounded-xl border-gray-200 bg-white focus:border-green-400 focus:ring-green-400 h-12 transition-all">
            <option>Choose an option</option>
            <option>I feel overwhelmed</option>
            <option>I feel lonely or isolated</option>
            <option>I'm looking for guidance for a loved one</option>
            <option>I just need someone to talk to</option>
          </select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-bold text-gray-700">Preferred Support Channel</label>
          <div class="grid grid-cols-2 gap-4">
            <button class="flex flex-col items-center justify-center p-4 border-2 border-green-400 bg-green-50 rounded-xl transition-all" type="button">
              <Icon icon="material-symbols:chat" class="text-green-400 mb-1" />
              <span class="text-xs font-bold text-green-400">Text Chat</span>
            </button>
            <button class="flex flex-col items-center justify-center p-4 border-2 border-transparent bg-gray-100 rounded-xl hover:border-green-400/30 transition-all" type="button">
              <Icon icon="material-symbols:call" class="text-gray-400 mb-1" />
              <span class="text-xs font-bold text-gray-500">Voice Call</span>
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-bold text-gray-700">Anything else you'd like us to know? (Optional)</label>
          <textarea class="rounded-xl border-gray-200 bg-white focus:border-green-400 focus:ring-green-400 placeholder:text-gray-400" placeholder="A brief word on what's on your mind..." rows="3"></textarea>
        </div>
        <div class="flex flex-col gap-4 pt-4">
          <button class="w-full bg-green-400 text-gray-900 font-bold py-4 rounded-xl hover:bg-green-500 shadow-lg shadow-green-400/20 transition-all transform active:scale-[0.98]" type="submit">
            Continue to Next Step
          </button>
          <div class="flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium uppercase tracking-widest">
            <Icon icon="material-symbols:lock" class="text-[14px]" />
            Encrypted & Secure
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
