<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <div>
    <!-- <TheWelcome /> -->
    <div class="relative">
      <img src="../assets/images/landing-image.png" alt="" class="h-screen w-screen object-cover" />
      <div class="absolute h-screen w-screen bg-black opacity-50 top-0 left-0 h-auto"></div>
      <div
        class="absolute flex inset-0 items-center justify-center text-2xl lg:text-5xl text-white"
      >
        <p class="max-w-60 lg:max-w-2xl">
          Driving sustainable development with international expertise and innovation.
        </p>
      </div>
    </div>
  </div>
</template>
