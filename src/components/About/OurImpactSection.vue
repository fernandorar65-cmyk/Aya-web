<template>
  <div class="mb-16">
    <div class="flex justify-center mb-4">
      <Icon icon="material-symbols:local-florist" class="text-violet-400 text-4xl" />
    </div>
    <h1 class="text-gray-900 tracking-light text-[32px] md:text-[42px] font-bold leading-tight px-4 text-center pb-3">{{ $t('about.impact.title') }}</h1>
    <p class="text-gray-600 text-base font-normal leading-normal pb-8 pt-1 px-4 text-center max-w-2xl mx-auto">
      {{ $t('about.impact.description') }}
    </p>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 p-4">
      <!-- Adolescents Card -->
      <div class="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl border border-solid border-gray-200 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-400/5 transition-all group">
        <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl mb-2 overflow-hidden relative" data-alt="Illustration of a supportive mentor talking to a teenager" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAFz-bNgO4FZ7gFdM9XPoZmQ3uzdAh5RvLPC-y2wBnBcfLcf3nKFNQ6RdcZLQXzG7yLPkulEP5JMWMp89jewMxK-vRsdoaPcfBqax7TqM18_BA-8SqlWlNW4rmMM6hHO7LoKfWGyaBtzs3tzRgm5eao0i_SYI2OVyl8TSvduKA8Q5f0o8TyjyyBr4j2KUL9CcFV4pBhz8xOsmbyJ3coLCeT_MkGMuMDPryuDAwuhT1LrdIi7N3607hul8DlNWZ8V5_Sb22dAMY3hYo");'>
          <div class="absolute inset-0 bg-violet-400/20 group-hover:bg-violet-400/5 transition-colors duration-500"></div>
        </div>
        <div>
          <div class="flex items-center gap-2 mb-3 text-violet-400">
            <Icon icon="material-symbols:auto-awesome" />
            <p class="text-gray-900 text-lg font-bold leading-normal">{{ $t('about.impact.adolescents.title') }}</p>
          </div>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
              <span class="text-violet-400 mt-1">•</span>
              <span>{{ $t('about.impact.adolescents.item1') }}</span>
            </li>
            <li class="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
              <span class="text-violet-400 mt-1">•</span>
              <span>{{ $t('about.impact.adolescents.item2') }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- People in Distress Card -->
      <div class="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl border border-solid border-gray-200 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-400/5 transition-all group">
        <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl mb-2 overflow-hidden relative" data-alt="Conceptual image showing empathy and a helping hand" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuCzWaJ2XZHqcaXF4YHEOLRK0HhgXwHvtHMkWNyar93XgQF0hjndNTBWFMJjZFv9janhqGvREfKMTTJGIBSG1Ia3sKPY2Vj2SEu1mxUDcSwrzyR0324zfrZsaXHY4t3wvjDyzkwYjL6qoAqgpOS-hHqWgYENAkX5MDF0rC7IPT_XW4DuqRvE0DhREejg7y3JYir63V8ZuzFz4T8ZdLHC6HbNwxz_hVpUJKHF-2YNeHq_-WwrHtVKpVJHoRSYshKkJC_P6LurDS2jkrc");'>
          <div class="absolute inset-0 bg-violet-400/20 group-hover:bg-violet-400/5 transition-colors duration-500"></div>
        </div>
        <div>
          <div class="flex items-center gap-2 mb-3 text-violet-400">
            <Icon icon="material-symbols:psychology" />
            <p class="text-gray-900 text-lg font-bold leading-normal">{{ $t('about.impact.distress.title') }}</p>
          </div>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
              <span class="text-violet-400 mt-1">•</span>
              <span>{{ $t('about.impact.distress.item1') }}</span>
            </li>
            <li class="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
              <span class="text-violet-400 mt-1">•</span>
              <span>{{ $t('about.impact.distress.item2') }}</span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Elderly in Abandonment Card -->
      <div class="flex flex-col gap-4 p-6 bg-gray-50 rounded-2xl border border-solid border-gray-200 hover:border-violet-400/40 hover:shadow-xl hover:shadow-violet-400/5 transition-all group">
        <div class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl mb-2 overflow-hidden relative" data-alt="Close up of two hands holding for companionship" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuB3Wb58i5WPA3UnWM7VLcWGuCbUnv2bFkH-P4_6FV9py1QjVWMCnHQPohypWlnPvhjZVV8FqYxsDzvMTvzePq9SR6A4hcIGcYsloM4B2rkNpxMJ0idAobyfjRWOzNHMm-LfHkuSLTF097DjJf6gWJbrQhrhbpM16BIRIbjLs1YEfYXOOxk42MN63cR21pdz_Y-LNdHARWuzRZOf3Hiznuu6FYIZHgctQT8jq0Y2GeLJAKPmYhFUn6SXJi_AE9RzI9loeL_EUM2suPc");'>
          <div class="absolute inset-0 bg-violet-400/20 group-hover:bg-violet-400/5 transition-colors duration-500"></div>
        </div>
        <div>
          <div class="flex items-center gap-2 mb-3 text-violet-400">
            <Icon icon="material-symbols:volunteer-activism" />
            <p class="text-gray-900 text-lg font-bold leading-normal">{{ $t('about.impact.elderly.title') }}</p>
          </div>
          <ul class="space-y-2">
            <li class="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
              <span class="text-violet-400 mt-1">•</span>
              <span>{{ $t('about.impact.elderly.item1') }}</span>
            </li>
            <li class="flex items-start gap-2 text-gray-600 text-sm leading-relaxed">
              <span class="text-violet-400 mt-1">•</span>
              <span>{{ $t('about.impact.elderly.item2') }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Our Impact Section component
import { Icon } from '@iconify/vue'
</script>
