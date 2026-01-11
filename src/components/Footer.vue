<template>
  <footer class="bg-white border-t border-gray-300 py-16">
    <div class=" max-w-[1600px] mx-auto px-10">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div class="col-span-1 md:col-span-1">
          <div class="flex items-center gap-3 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8 text-green-400">
              <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
              <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
            </svg>
            <h2 class="text-2xl font-bold text-black">AYA</h2>
          </div>
          <p class="font-bold text-gray-500 leading-relaxed">
            Dedicated to mental wellness and social connection. Every voice deserves to be heard, every soul deserves companionship.
          </p>
        </div>
        <div>
          <h4 class="font-bold text-black mb-6">Organization</h4>
          <ul class="flex flex-col gap-4 font-bold text-gray-500 ">
            <li><a class="hover:text-primary transition-colors" href="#about">Our Story</a></li>
            <li><a class="hover:text-primary transition-colors" href="#impact">Impact Report</a></li>
            <li><a class="hover:text-primary transition-colors" href="#careers">Careers</a></li>
            <li><a class="hover:text-primary transition-colors" href="#press">Press Kit</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-black mb-6">Support</h4>
          <ul class="flex flex-col gap-4 font-bold text-gray-500 ">
            <li><a class="hover:text-primary transition-colors" href="#help">Find Help</a></li>
            <li><a class="hover:text-primary transition-colors" href="#volunteer">Volunteer Hub</a></li>
            <li><a class="hover:text-primary transition-colors" href="#privacy">Privacy Policy</a></li>
            <li><a class="hover:text-primary transition-colors" href="#terms">Terms of Service</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-bold text-black mb-6">Newsletter</h4>
          <p class="text-sm text-gray-500 mb-4">Stay updated with our latest missions and stories of hope.</p>
          <div class="flex gap-2">
            <input class="bg-gray-100 text-gray-500 border-none rounded-xl px-4 py-2 w-full focus:ring-2 focus:ring-primary" placeholder="Email address" type="email"/>
            <button class="bg-primary text-gray-900 px-4 py-2 rounded-xl font-bold">Join</button>
          </div>
        </div>
      </div>
      <div class="pt-8 border-t border-gray-400 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-700 ">
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
