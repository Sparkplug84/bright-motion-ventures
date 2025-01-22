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
        class="absolute flex inset-0 items-center justify-center md:justify-start md:ml-[25%] text-white"
      >
        <div>
          <p class="max-w-60 md:max-w-xl lg:max-w-2xl text-3xl md:text-3xl lg:text-5xl mb-6">
            Driving sustainability
          </p>
          <p class="max-w-52 md:max-w-md text-2xl lg:text-3xl">
            Developed with international expertise and innovation
          </p>
          <div class="flex flex-col md:flex-row mt-6">
            <button
              class="h-12 w-auto px-8 bg-teal-500 rounded hover:bg-white hover:text-teal-500 mr-8 mb-4 md:mb-0"
            >
              Find out more
            </button>
            <button
              class="h-12 w-auto px-8 hover:bg-teal-500 rounded bg-white text-teal-500 hover:text-white"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
