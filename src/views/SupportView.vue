<template>
  <section class="w-full bg-white py-10 md:py-16 min-h-screen">
    <div class="w-full flex justify-center px-4 md:px-10 lg:px-16 xl:px-20">
      <div class="w-full flex flex-col">
        <!-- Hero Section -->
        <div class="mb-16">
          <div class="@container">
            <div class="flex flex-col gap-8 py-6 @[864px]:flex-row items-center">
              <div class="w-full @[864px]:w-1/2 bg-center bg-no-repeat aspect-[16/10] bg-cover rounded-2xl shadow-xl ring-1 ring-black/5" data-alt="People holding hands in a supportive gesture" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAWSlz72I9QhVMVrBYJZnGNWPRvoHRzhiGSkiO7JYg-56FkCl3RPd2xLJ0G3jD-Ro8DdF-jN5wb3lOjAREwv9J5lQB2I2_0TJluOt29S-133z-Ue6UTdQMYZAtTuB_-74O4sPSIK9xaEE0KoOp8sfZCPVL8zAda4bxD63_oZiX1_EuK7oCRdlgCq6w7WJpGfPNWd6OGb746_gZ5bQa2jUaPMWEqC22l73_U9Hy94VQuKO19Phe2k-h8eF1vnFGwlldH1j_iU3qa38A");'>
              </div>
              <div class="flex flex-col gap-6 w-full @[864px]:w-1/2 @[864px]:pl-12">
                <div class="flex flex-col gap-4">
                  <div class="inline-flex items-center gap-2 text-green-400 font-bold text-sm tracking-widest uppercase">
                    <span class="w-8 h-[1px] bg-green-400"></span>
                    Finding Balance
                  </div>
                  <h1 class="text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl text-gray-900">
                    You are not alone. 
                    <span class="text-green-500">Growth begins here.</span>
                  </h1>
                  <p class="text-lg font-normal leading-relaxed text-gray-600">
                    Whether you are navigating a difficult season or looking to share your strength, AYA is a sanctuary built on empathy, rebirth, and professional guidance.
                  </p>
                </div>
                <div class="flex flex-wrap gap-6">
                  <div class="flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <span class="material-symbols-outlined text-green-400">verified_user</span>
                    Professional Oversight
                  </div>
                  <div class="flex items-center gap-2 text-sm font-semibold text-gray-500">
                    <span class="material-symbols-outlined text-green-400">lock</span>
                    100% Confidential
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tabs Section -->
        <div class="flex flex-col gap-4 mb-10">
          <h2 class="text-2xl font-bold text-gray-900 px-4">How can we support you today?</h2>
          <div class="pb-1">
            <div class="flex border-b border-gray-200 px-4 gap-12">
              <button class="flex flex-col items-center justify-center border-b-[3px] border-green-400 text-gray-900 pb-[13px] pt-4 transition-all">
                <span class="text-sm font-bold tracking-[0.015em]">I Need Support</span>
              </button>
              <button class="flex flex-col items-center justify-center border-b-[3px] border-transparent text-gray-400 pb-[13px] pt-4 hover:text-green-400 transition-colors">
                <span class="text-sm font-bold tracking-[0.015em]">I Want to Volunteer</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <!-- Form Card -->
          <div class="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-200 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
              <span class="material-symbols-outlined text-green-400 text-6xl">spa</span>
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
                      <span class="material-symbols-outlined text-green-400 mb-1">chat</span>
                      <span class="text-xs font-bold text-green-400">Text Chat</span>
                    </button>
                    <button class="flex flex-col items-center justify-center p-4 border-2 border-transparent bg-gray-100 rounded-xl hover:border-green-400/30 transition-all" type="button">
                      <span class="material-symbols-outlined text-gray-400 mb-1">call</span>
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
                    <span class="material-symbols-outlined text-[14px]">lock</span>
                    Encrypted & Secure
                  </div>
                </div>
              </form>
            </div>
          </div>

          <!-- Volunteer Info Card -->
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
        </div>

        <!-- Emergency Section -->
        <div class="mt-20 bg-gray-900 text-white rounded-[2rem] p-10 flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden relative">
          <div class="absolute top-0 right-0 w-80 h-80 bg-green-400/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
          <div class="absolute bottom-0 left-0 w-64 h-64 bg-green-300/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>
          <div class="relative z-10 max-w-lg">
            <div class="flex items-center gap-2 text-green-300 mb-4">
              <span class="material-symbols-outlined">warning</span>
              <span class="text-xs font-bold uppercase tracking-[0.2em]">Urgent Care</span>
            </div>
            <h4 class="text-3xl font-bold mb-3">In Immediate Danger?</h4>
            <p class="text-gray-400 text-sm leading-relaxed">If you are experiencing a life-threatening emergency, please contact national emergency services or a crisis hotline immediately. Your safety is paramount.</p>
          </div>
          <div class="flex flex-wrap gap-4 relative z-10 w-full md:w-auto">
            <button class="flex-1 md:flex-none bg-red-500/20 text-red-400 border border-red-500/50 px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-red-500 hover:text-white transition-all">
              <span class="material-symbols-outlined">emergency</span>
              Call 988 (Crisis Line)
            </button>
            <button class="flex-1 md:flex-none bg-white/10 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all border border-white/10">
              All Emergency Resources
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Support View component
</script>
