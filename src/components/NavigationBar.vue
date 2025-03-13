<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const mobileMenuVisible = ref(false)

function toggleMenu() {
  mobileMenuVisible.value = !mobileMenuVisible.value
}

const scrollY = ref(0)

const handleScroll = () => {
  scrollY.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Compute opacity based on scroll
const opacity = computed(() => Math.min(scrollY.value / 300, 1))

// Fully solid background after 200px scroll
const scrolled = computed(() => scrollY.value > 300)
</script>

<template>
  <div
    class="fixed w-full h-16 flex justify-between items-center text-white animate-fadeInDown"
    :class="{ 'bg-custom-gradient shadow-xl': scrolled }"
    :style="{ backgroundColor: `rgba(20, 184, 166, ${opacity})` }"
  >
    <div class="flex items-center p-2">
      <img src="../assets//images/newlogo3-removebg.png" alt="" class="h-16 w-auto" />
    </div>
    <div class="hidden md:block mr-8">
      <ul class="flex space-x-8">
        <li
          class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
          :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'home' }"
        >
          <RouterLink to="/">Home</RouterLink>
        </li>
        <li
          class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
          :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'about' }"
        >
          <RouterLink to="/about">About</RouterLink>
        </li>
        <li
          class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
          :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'projects' }"
        >
          <RouterLink to="/projects">Projects</RouterLink>
        </li>
        <li
          class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
          :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'contact' }"
        >
          <RouterLink to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </div>
    <div class="block md:hidden scale-50 z-50" @click="toggleMenu">
      <!-- <label for="check"> -->
      <!-- <input type="checkbox" id="check" @click.stop /> -->
      <div :class="{ open: mobileMenuVisible }" class="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- </label> -->
    </div>
    <div
      class="h-screen w-screen bg-black absolute top-0 left-0 -translate-y-full transform-gpu duration-300 flex flex-col justify-center items-center"
      :class="{ 'translate-y-0': mobileMenuVisible }"
    >
      <div class="absolute left-1/2 transform -translate-x-1/2 top-20 w-60">
        <div class="flex flex-col items-center">
          <img src="../assets/images/newlogo3-removebg.png" alt="" class="w-full" />
        </div>
      </div>
      <ul class="space-y-8 text-center">
        <li
          class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
          :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'home' }"
        >
          <RouterLink @click="toggleMenu" to="/">Home</RouterLink>
        </li>
        <li
          class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
          :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'about' }"
        >
          <RouterLink @click="toggleMenu" to="/about">About</RouterLink>
        </li>
        <li
          class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
          :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'projects' }"
        >
          <RouterLink @click="toggleMenu" to="/projects">Projects</RouterLink>
        </li>
        <li
          class="hover:border-b hover:border-primaryColour hover:text-primaryColour"
          :class="{ 'border-b border-primaryColour text-primaryColour': route.name === 'contact' }"
        >
          <RouterLink @click="toggleMenu" to="/contact">Contact</RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
<!-- <style scoped>
label {
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
}

label span {
  background: #fff;
  border-radius: 10px;
  height: 7px;
  margin: 7px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

span:nth-of-type(1) {
  width: 50%;
}

span:nth-of-type(2) {
  width: 100%;
}

span:nth-of-type(3) {
  width: 75%;
}

input[type='checkbox'] {
  display: none;
}

input[type='checkbox']:checked ~ span:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotatez(45deg) translate(8px, 0px);
}

input[type='checkbox']:checked ~ span:nth-of-type(2) {
  transform-origin: top;
  transform: rotatez(-45deg);
}

input[type='checkbox']:checked ~ span:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(30px, -11px) rotatez(45deg);
}
</style> -->

<style scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  width: 70px;
  cursor: pointer;
}

.hamburger span {
  background: #fff;
  border-radius: 10px;
  height: 7px;
  margin: 7px 0;
  transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
}

.hamburger span:nth-of-type(1) {
  width: 50%;
}

.hamburger span:nth-of-type(2) {
  width: 100%;
}

.hamburger span:nth-of-type(3) {
  width: 75%;
}

.hamburger.open span:nth-of-type(1) {
  transform-origin: bottom;
  transform: rotateZ(45deg) translate(8px, 0px);
}

.hamburger.open span:nth-of-type(2) {
  transform-origin: top;
  transform: rotateZ(-45deg);
}

.hamburger.open span:nth-of-type(3) {
  transform-origin: bottom;
  width: 50%;
  transform: translate(30px, -11px) rotateZ(45deg);
}

nav {
  backdrop-filter: blur(10px); /* Optional: Adds a subtle blur effect */
}
</style>
