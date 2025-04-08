<script setup lang="ts">
import { RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import NavigationBar from './components/NavigationBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <header>
    <NavigationBar class="z-50" />
  </header>
  <main class="">
    <RouterView />
  </main>
  <footer>
    <FooterBar></FooterBar>
  </footer>
</template>

<style scoped>
/* main.child {
  width: 1280px;
} */
</style>
