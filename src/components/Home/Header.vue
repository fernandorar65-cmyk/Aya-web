<template>
  <header class="flex items-center justify-between whitespace-nowrap border-b border-solid border-green-200 dark:border-gray-200 px-10 py-4 sticky top-0 bg-white/90 dark:bg-white/90 backdrop-blur-md z-50">
    <div class="flex items-center gap-4 text-black">
      <div class="size-6 text-primary">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_6_535)">
            <path clip-rule="evenodd" d="M47.2426 24L24 47.2426L0.757355 24L24 0.757355L47.2426 24ZM12.2426 21H35.7574L24 9.24264L12.2426 21Z" fill="currentColor" fill-rule="evenodd"></path>
          </g>
          <defs>
            <clipPath id="clip0_6_535">
              <rect fill="white" height="48" width="48"></rect>
            </clipPath>
          </defs>
        </svg>
      </div>
      <h2 class="text-xl font-bold leading-tight tracking-[-0.015em] font-display text-black">AYA</h2>
    </div>
    <div class="flex flex-1 justify-end gap-8 items-center">
      <nav class="hidden md:flex items-center gap-8">
        <a class="text-sm font-medium text-black hover:text-primary transition-colors" href="#home">Home</a>
        <a class="text-sm font-medium text-black hover:text-primary transition-colors" href="#about">About Us</a>
        <a class="text-sm font-medium text-black hover:text-primary transition-colors" href="#who-we-help">Who We Help</a>
        <a class="text-sm font-medium text-black hover:text-primary transition-colors" href="#how-it-works">How It Works</a>
      </nav>
      <div class="flex gap-3">
        <button class="flex min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-10 px-5 bg-green-400 text-black text-sm font-bold transition-transform hover:scale-105 active:scale-95">
          Get Help
        </button>
        <button class="flex min-w-[100px] cursor-pointer items-center justify-center rounded-xl h-10 px-5 dark:bg-green-50 text-black text-sm font-bold transition-transform hover:scale-105 active:scale-95 border border-green-200 dark:border-green-200">
          Volunteer
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// Header component for AYA website
</script>
