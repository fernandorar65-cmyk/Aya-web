<template>
  <section class="w-full flex justify-center px-6 md:px-16 lg:px-20 xl:px-24 py-20 md:py-24">
    <div class="w-full flex justify-center">
    <div class="bg-violet-100 rounded-[2rem] p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 w-full">
      <div class="flex-1 w-full">
        <h2 class="text-3xl md:text-4xl text-black font-bold mb-4 leading-tight">{{ $t('crisis.title') }}</h2>
        <p class="text-base md:text-lg text-gray-700 mb-8 leading-relaxed">{{ $t('crisis.description') }}</p>
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-full bg-violet-500 flex items-center justify-center flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-7 h-7">
              <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
            </svg>
          </div>
          <div>
            <p class="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-widest mb-1">{{ $t('crisis.hotline') }}</p>
            <p class="text-xl md:text-2xl text-black font-bold tracking-tight">{{ $t('crisis.phoneNumber') }}</p>
          </div>
        </div>
      </div>
      <div class="w-full md:w-auto flex-shrink-0">
        <button class="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-gray-900 text-white rounded-2xl font-semibold text-base md:text-lg hover:opacity-90 transition-opacity">
          {{ $t('crisis.chatOnline') }}
        </button>
      </div>
    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Crisis section component
</script>
