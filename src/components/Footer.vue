<template>
  <footer class="bg-white dark:bg-green-950 border-t border-green-200 dark:border-green-700 py-16">
    <div class="max-w-[1280px] mx-auto px-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-3 mb-6 text-primary">
            <span class="material-symbols-outlined text-3xl font-bold">diversity_1</span>
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">AYA</h2>
          </div>
          <p class="text-green-700 dark:text-green-300 leading-relaxed">
            Dedicated to mental wellness and social connection. Every voice deserves to be heard, every soul deserves companionship.
          </p>
        </div>
        <div>
          <h4 class="font-bold mb-6">Organization</h4>
          <ul class="flex flex-col gap-4 text-green-700 dark:text-green-300">
            <li><a class="hover:text-primary transition-colors" href="#about">Our Story</a></li>
            <li><a class="hover:text-primary transition-colors" href="#impact">Impact Report</a></li>
            <li><a class="hover:text-primary transition-colors" href="#careers">Careers</a></li>
            <li><a class="hover:text-primary transition-colors" href="#press">Press Kit</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6">Support</h4>
          <ul class="flex flex-col gap-4 text-green-700 dark:text-green-300">
            <li><a class="hover:text-primary transition-colors" href="#help">Find Help</a></li>
            <li><a class="hover:text-primary transition-colors" href="#volunteer">Volunteer Hub</a></li>
            <li><a class="hover:text-primary transition-colors" href="#privacy">Privacy Policy</a></li>
            <li><a class="hover:text-primary transition-colors" href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold mb-6">Newsletter</h4>
          <p class="text-sm text-green-700 dark:text-green-300 mb-4">Stay updated with our latest missions and stories of hope.</p>
          <div class="flex gap-2">
            <input class="bg-green-50 dark:bg-green-900 border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-primary" placeholder="Email address" type="email"/>
            <button class="bg-primary text-gray-900 px-4 py-2 rounded-xl font-bold">Join</button>
          </div>
        </div>
      </div>
      <div class="pt-8 border-t border-green-200 dark:border-green-700 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-green-700 dark:text-green-300">
        <p>© 2024 AYA Foundation. All rights reserved.</p>
        <div class="flex gap-6">
          <a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">public</span></a>
          <a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">thumb_up</span></a>
          <a class="hover:text-primary transition-colors" href="#"><span class="material-symbols-outlined">mail</span></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
// Footer component
</script>
