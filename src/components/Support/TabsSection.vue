<template>
  <div class="flex flex-col gap-4 mb-10">
    <h2 class="text-2xl font-bold text-gray-900 px-4">{{ $t('support.tabs.title') }}</h2>
    <div class="pb-1">
      <div class="flex border-b border-gray-200 px-4 gap-12">
        <button class="flex flex-col items-center justify-center border-b-[3px] border-violet-400 text-gray-900 pb-[13px] pt-4 transition-all">
          <span class="text-sm font-bold tracking-[0.015em]">{{ $t('support.tabs.needSupport') }}</span>
        </button>
        <button class="flex flex-col items-center justify-center border-b-[3px] border-transparent text-gray-400 pb-[13px] pt-4 hover:text-violet-400 transition-colors">
          <span class="text-sm font-bold tracking-[0.015em]">{{ $t('support.tabs.wantVolunteer') }}</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Tabs Section component
</script>
