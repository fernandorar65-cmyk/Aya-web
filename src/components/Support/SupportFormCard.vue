<template>
  <div class="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
    <div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
      <Icon icon="material-symbols:spa" class="text-violet-400 text-6xl" />
    </div>
    <div class="flex flex-col gap-6 relative z-10">
      <div class="flex flex-col gap-2">
        <div class="flex justify-between items-end">
          <h3 class="text-xl font-bold text-gray-900">{{ $t('support.form.title') }}</h3>
          <span class="text-xs font-bold text-violet-400 tracking-wider uppercase">{{ $t('support.form.step') }}</span>
        </div>
        <div class="w-full bg-violet-100 h-2 rounded-full overflow-hidden">
          <div class="bg-violet-400 h-full w-1/3 rounded-full shadow-[0_0_8px_rgba(167,139,250,0.4)] transition-all duration-700"></div>
        </div>
      </div>
      <p class="text-sm text-gray-500 italic leading-relaxed">"{{ $t('support.form.quote') }}"</p>
      <form class="flex flex-col gap-6">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-bold text-gray-700">{{ $t('support.form.feelingLabel') }}</label>
          <select class="rounded-xl border-gray-200 bg-white focus:border-violet-400 focus:ring-violet-400 h-12 transition-all">
            <option>{{ $t('support.form.chooseOption') }}</option>
            <option>{{ $t('support.form.feelingOptions.overwhelmed') }}</option>
            <option>{{ $t('support.form.feelingOptions.lonely') }}</option>
            <option>{{ $t('support.form.feelingOptions.guidance') }}</option>
            <option>{{ $t('support.form.feelingOptions.talk') }}</option>
          </select>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-bold text-gray-700">{{ $t('support.form.channelLabel') }}</label>
          <div class="grid grid-cols-2 gap-4">
            <button class="flex flex-col items-center justify-center p-4 border-2 border-violet-400 bg-violet-50 rounded-xl transition-all" type="button">
              <Icon icon="material-symbols:chat" class="text-violet-400 mb-1" />
              <span class="text-xs font-bold text-violet-400">{{ $t('support.form.textChat') }}</span>
            </button>
            <button class="flex flex-col items-center justify-center p-4 border-2 border-transparent bg-gray-100 rounded-xl hover:border-violet-400/30 transition-all" type="button">
              <Icon icon="material-symbols:call" class="text-gray-400 mb-1" />
              <span class="text-xs font-bold text-gray-500">{{ $t('support.form.voiceCall') }}</span>
            </button>
          </div>
        </div>
        <div class="flex flex-col gap-2">
          <label class="text-sm font-bold text-gray-700">{{ $t('support.form.optionalLabel') }}</label>
          <textarea class="rounded-xl border-gray-200 bg-white focus:border-violet-400 focus:ring-violet-400 placeholder:text-gray-400" :placeholder="$t('support.form.optionalPlaceholder')" rows="3"></textarea>
        </div>
        <div class="flex flex-col gap-4 pt-4">
          <button class="w-full bg-violet-400 text-gray-900 font-bold py-4 rounded-xl hover:bg-violet-500 shadow-lg shadow-violet-400/20 transition-all transform active:scale-[0.98]" type="submit">
            {{ $t('support.form.continueButton') }}
          </button>
          <div class="flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium uppercase tracking-widest">
            <Icon icon="material-symbols:lock" class="text-[14px]" />
            {{ $t('support.form.secure') }}
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
