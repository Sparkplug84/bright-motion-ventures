<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileMenuVisible = ref(false)

function toggleMenu() {
  console.log('start function')
  mobileMenuVisible.value = !mobileMenuVisible.value
  console.log('end function')
}
</script>

<template>
  <div class="fixed w-full h-16 flex justify-between items-center p-4 bg-transparent text-white">
    <div>BRIGHT MOTION</div>
    <div class="hidden md:block">
      <ul class="flex space-x-8">
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/projects">Projects</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
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
      class="h-screen w-screen bg-black absolute top-0 left-0 -translate-y-full transform-gpu duration-300 flex justify-center items-center"
      :class="{ 'translate-y-0': mobileMenuVisible }"
    >
      <ul class="space-y-8 text-center">
        <li><RouterLink @click="toggleMenu" to="/">Home</RouterLink></li>
        <li><RouterLink @click="toggleMenu" to="/about">About</RouterLink></li>
        <li><RouterLink @click="toggleMenu" to="/projects">Projects</RouterLink></li>
        <li><RouterLink @click="toggleMenu" to="/contact">Contact</RouterLink></li>
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
</style>
