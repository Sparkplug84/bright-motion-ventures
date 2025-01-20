<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="fixed w-full h-16 flex justify-between items-center p-4 bg-transparent text-white">
    <div>BRIGHT MOTION</div>
    <div>
      <ul class="flex space-x-8">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </div>
  </div>
</template>
