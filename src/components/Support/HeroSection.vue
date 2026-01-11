<template>
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
              <Icon icon="material-symbols:verified-user" class="text-green-400" />
              Professional Oversight
            </div>
            <div class="flex items-center gap-2 text-sm font-semibold text-gray-500">
              <Icon icon="material-symbols:lock" class="text-green-400" />
              100% Confidential
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>
