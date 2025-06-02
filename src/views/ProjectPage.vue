<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'Bright Motion Ventures | Services page',
  meta: [
    {
      name: 'description',
      content:
        'BrightMotion is a leading renewable energy consortium driving solar and wind power projects across Africa. In partnership with a strong network, the company advances clean energy solutions in electric vehicles (EV), healthcare, agriculture, and more. By combining cutting-edge technology with local expertise, BrightMotion boosts energy capacity, supports sustainable development, and reduces fossil fuel dependence—empowering African communities and building a greener, more resilient future.',
    },
    { property: 'og:title', content: 'BrightMotion: Powering Africa’s Renewable Future' },
    {
      property: 'og:description',
      content:
        '🌍 BrightMotion is powering Africa’s future with renewable energy! From solar & wind to EVs, healthcare & agriculture, we’re driving sustainable growth, reducing fossil fuel reliance, and empowering communities through tech & local expertise. #CleanEnergy #AfricaRenewables #BrightMotionShareable content description here.',
    },
    { property: 'og:image', content: './assets/images/landing-image-png' },
  ],
})
</script>

<template>
  <div>
    <div class="relative">
      <img src="../assets/images/landing-image.png" alt="" class="h-screen w-screen object-cover" />
      <div class="absolute h-screen w-full bg-black opacity-50 top-0 left-0 h-auto"></div>
      <div class="absolute flex inset-0 items-center justify-center text-5xl text-white">
        <p class="max-w-2xl">Projects</p>
      </div>
    </div>
  </div>
</template>
