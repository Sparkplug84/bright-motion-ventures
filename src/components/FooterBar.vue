<script setup lang="ts">
// import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <!-- class="w-full flex justify-center py-12 bg-gradient-to-r from-teal-600 to-cyan-600 text-white" -->
  <div class="w-full flex justify-center py-12 bg-custom-gradient to-cyan-600 text-white">
    <div class="flex flex-col lg:flex-row w-full xl:w-[80%] p-4 justify-between">
      <div class="flex flex-col w-auto lg:w-1/3 items-center">
        <!-- <p class="text-xl font-semibold">Info</p> -->
        <img src="../assets//images/Final-logo.png" alt="" class="h-auto w-fit max-w-80" />
        <a
          href="mailto:info@brightmotionventures.com"
          class="hover:text-primaryColour hover:underline mt-4 w-fit"
          >info@brightmotionventures.com</a
        >
      </div>
      <div class="flex flex-col w-auto lg:w-1/3 items-center mt-8 lg:mt-0 relative">
        <p class="text-xl font-semibold">Contact</p>
        <div class="border-b-2 w-full mt-2"></div>
        <p class="mt-2 text-center w-full mb-2">
          Send your email address for collaboration opportunities
        </p>
        <input
          type="text"
          name="email"
          id=""
          placeholder="info@youremailaddress"
          class="h-10 w-full md:w-[60%] lg:w-full rounded text-center text-black"
        />
      </div>
      <div class="flex flex-col w-auto lg:w-1/3 items-center mt-12 lg:mt-0">
        <p class="text-xl font-semibold">Navigation</p>
        <div class="border-b-2 w-full mt-2"></div>
        <ul class="flex flex-col items-center mt-2">
          <li>
            <RouterLink
              to="/"
              class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
              :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'home' }"
              >Home</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/about"
              class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
              :class="{
                'border-b border-primaryColour text-primaryColour': route.name === 'about',
              }"
              >About</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/projects"
              class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
              :class="{
                'border-b border-primaryColour text-primaryColour': route.name === 'projects',
              }"
              >Projects</RouterLink
            >
          </li>
          <li>
            <RouterLink
              to="/contact"
              class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
              :class="{
                'border-b border-primaryColour text-primaryColour': route.name === 'contact',
              }"
              >Contact</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
