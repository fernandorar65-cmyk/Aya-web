<template>
  <section id="who-we-help" class="w-full bg-gray-100 py-20">
    <div class="w-full flex justify-center px-4 md:px-10 lg:px-16 xl:px-20">
      <div class="w-full flex flex-col items-center">
      <div class="flex flex-col gap-4 mb-12 px-4">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900">Who We Help</h2>
        <div class="w-20 h-1.5 bg-primary rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 items-stretch">
        <!-- Adolescents -->
        <div class="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">Youth &amp; Adolescents</h3>
            <p class="text-gray-700 leading-relaxed text-base">Navigating school, relationships, and identity can be overwhelming. We provide a non-judgmental ear for the younger generation.</p>
          </div>
          <a class="text-black font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-6" href="#">
            Learn more 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        <!-- Crisis -->
        <div class="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                <path fill-rule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v11.69l3.22-3.22a.75.75 0 1 1 1.06 1.06l-4.5 4.5a.75.75 0 0 1-1.06 0l-4.5-4.5a.75.75 0 1 1 1.06-1.06l3.22 3.22V3a.75.75 0 0 1 .75-.75Zm-9 13.5a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">People in Distress</h3>
            <p class="text-gray-700 leading-relaxed text-base">Immediate emotional support for those facing life's hardest moments. You don't have to carry the weight alone.</p>
          </div>
          <a class="text-black font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-6" href="#">
            Learn more 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
        <!-- Elderly -->
        <div class="group p-8 rounded-2xl bg-white border border-gray-200 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col justify-between">
          <div>
            <div class="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center text-green-600 mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                <path fill-rule="evenodd" d="M8.25 6.75a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM15.75 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM2.25 9.75a3 3 0 1 1 6 0 3 3 0 0 1-6 0ZM6.31 15.117A6.745 6.745 0 0 1 12 12a6.745 6.745 0 0 1 6.709 7.498.75.75 0 0 1-.372.568A12.696 12.696 0 0 1 12 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 0 1-.372-.568 6.787 6.787 0 0 1 1.019-4.38Z" clip-rule="evenodd" />
                <path d="M5.082 14.254a8.287 8.287 0 0 0-1.308 5.135 9.687 9.687 0 0 1-1.764-.44l-.115-.04a.563.563 0 0 1-.373-.487l-.01-.121a3.75 3.75 0 0 1 3.57-4.047ZM20.226 19.389a8.287 8.287 0 0 0-1.308-5.135 3.75 3.75 0 0 1 3.57 4.047l-.01.121a.563.563 0 0 1-.373.486l-.115.04c-.567.2-1.156.349-1.764.441Z" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 text-gray-900">Elderly Companionship</h3>
            <p class="text-gray-700 leading-relaxed text-base">Fighting loneliness through regular companionship and active listening for our seniors in isolation.</p>
          </div>
          <a class="text-black font-bold flex items-center gap-2 group-hover:gap-3 transition-all mt-6" href="#">
            Learn more 
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
              <path fill-rule="evenodd" d="M2 8c0 .414.336.75.75.75h8.69l-1.22 1.22a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 1 0-1.06 1.06l1.22 1.22H2.75A.75.75 0 0 0 2 8Z" clip-rule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Who We Help component
</script>
