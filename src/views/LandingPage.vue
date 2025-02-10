<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
// import TheWelcome from '../components/TheWelcome.vue'

const slides = ref([
  {
    image:
      'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvZmwzNjc3NjQwOTA0Ni1pbWFnZS5qcGc.jpg',
    caption: 'Sustainable solutions for community empowerment and growth',
  },
  {
    image: 'https://www.ethiopia-insight.com/wp-content/uploads/2023/09/Addis-Abeba.jpg',
    caption: 'Fostering innovation for a thriving local economies',
  },
  {
    image:
      'https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZsNzI1MDg3NzU2MC1pbWFnZS1rdWNnZHhwcS5qcGc.jpg',
    caption: 'Cultural enrichment through sports and tourism',
  },
])

const currentIndex = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
  if (interval) {
    clearInterval(interval)
  }
  startAutoPlay()
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
  if (interval) {
    clearInterval(interval)
  }
  startAutoPlay()
}

const startAutoPlay = () => {
  interval = setInterval(nextImage, 5000)
}

const goToImage = (index: number) => {
  currentIndex.value = index
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
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
          <p
            class="max-w-60 md:max-w-xl lg:max-w-2xl text-3xl md:text-3xl lg:text-5xl mb-6 font-semibold"
          >
            Driving sustainability
          </p>
          <p class="max-w-52 md:max-w-md text-2xl lg:text-3xl">
            Developed with international expertise and innovation
          </p>
          <div class="flex flex-col md:flex-row mt-6">
            <button
              class="h-12 w-52 bg-primaryColour rounded hover:bg-white hover:text-primaryColour mr-8 mb-4 md:mb-0"
            >
              Find out more
            </button>
            <button
              class="h-12 w-52 hover:bg-primaryColour rounded bg-white text-primaryColour hover:text-white"
            >
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full max-w-3xl mx-auto mt-20">
      <!-- Image Display -->
      <div class="overflow-hidden rounded-xl shadow-lg h-52 md:h-[500px] m-4 relative">
        <transition-group name="fade" tag="div">
          <img
            v-for="(slide, index) in slides"
            v-show="index === currentIndex"
            :key="slide.image"
            :src="slide.image"
            class="w-full h-52 md:h-[500px] object-cover"
            alt="Carousel Image"
          />
        </transition-group>
        <button
          @click="prevImage"
          class="absolute top-1/2 left-2 bg-gray-400 text-white rounded-full h-8 w-8 flex justify-center items-center"
        >
          <
        </button>
        <button
          @click="nextImage"
          class="absolute top-1/2 right-2 bg-gray-400 text-white rounded-full h-8 w-8 flex justify-center items-center"
        >
          >
        </button>
      </div>

      <!-- Caption -->
      <p class="text-center mt-2 font-semibold text-gray-700">
        {{ slides[currentIndex].caption }}
      </p>

      <!-- Navigation Buttons -->
    </div>
    <div class="flex space-x-2 justify-center mt-4 mb-20">
      <span
        v-for="(slide, index) in slides"
        :key="index"
        @click="goToImage(index)"
        class="w-3 h-3 rounded-full cursor-pointer transition-all"
        :class="index === currentIndex ? 'bg-gray-300 scale-125' : 'bg-gray-500'"
      ></span>
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
