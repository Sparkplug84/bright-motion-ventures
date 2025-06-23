<script setup lang="ts">
import { onMounted, onUnmounted, ref, type Ref } from 'vue'
import { useHead } from '@vueuse/head'
import { CheckCircleIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/vue/24/solid'

// const slideOffset = 100 // since each slide still "acts" like 100% for transform purposes

useHead({
  title: 'Bright Motion Ventures | Home page',
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

const slides = ref([
  {
    image:
      'https://cisp.cachefly.net/assets/articles/images/resized/0000269037_resized_scatecsolarkalkbultmodulemountinginprogress.jpg',
    // image:
    //   'https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvZmwzNjc3NjQwOTA0Ni1pbWFnZS5qcGc.jpg',
    caption: 'Sustainable solutions for community empowerment and growth',
  },
  {
    image:
      'https://media.licdn.com/dms/image/v2/D4D12AQHDjXFoRT1NrQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1705591346008?e=2147483647&v=beta&t=hvsD9RaOafmdudUiyTqzcR2RZcaOy-IBpHDPGFsEq6I',
    // image: 'https://www.ethiopia-insight.com/wp-content/uploads/2023/09/Addis-Abeba.jpg',
    caption: 'Fostering innovation for thriving local economies',
  },
  {
    image:
      'https://images.rawpixel.com/image_800/cHJpdmF0ZS9zdGF0aWMvaW1hZ2Uvd2Vic2l0ZS8yMDIyLTA0L2xyL2ZsNzI1MDg3NzU2MC1pbWFnZS1rdWNnZHhwcS5qcGc.jpg',
    caption: 'Cultural enrichment through sports and tourism',
  },
  {
    image:
      'https://17globalgoals.com/wp-content/uploads/2019/11/partnership-for-sustainability.jpg',
    caption: 'Forming global partnerships to boost innovation and local socioeconomic development',
  },
  {
    image:
      'https://media.licdn.com/dms/image/v2/D4D12AQH8TCa8myTkSw/article-inline_image-shrink_1000_1488/article-inline_image-shrink_1000_1488/0/1709646484420?e=2147483647&v=beta&t=wyEfPRoKoP7SkwuE5TvK5DRIPYLgf1u9ZyeCtd8DBC4',
    caption: 'Empowering communities through sustainable, collaborative innovation',
  },
  {
    image:
      'https://agfundernews.com/wp-content/uploads/2021/10/iStock-944588382-e1635225168422.jpg',
    caption: 'Advancing national growth through cultural enrichment and strategic partnerships',
  },
])

// const currentIndex = ref(0)
// let interval: ReturnType<typeof setInterval> | null = null

// const nextImage = () => {
//   currentIndex.value = (currentIndex.value + 1) % slides.value.length
//   if (interval) {
//     clearInterval(interval)
//   }
//   startAutoPlay()
// }

// const prevImage = () => {
//   currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
//   if (interval) {
//     clearInterval(interval)
//   }
//   startAutoPlay()
// }

// const startAutoPlay = () => {
//   interval = setInterval(nextImage, 5000)
// }

// const goToImage = (index: number) => {
//   currentIndex.value = index
// }

const currentIndex = ref(0)
let interval: ReturnType<typeof setInterval> | null = null

const nextImage = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
  restartAutoPlay()
}

const prevImage = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
  restartAutoPlay()
}

const goToImage = (index: number) => {
  currentIndex.value = index
  restartAutoPlay()
}

const startAutoPlay = () => {
  interval = setInterval(nextImage, 5000)
}

const restartAutoPlay = () => {
  if (interval) clearInterval(interval)
  startAutoPlay()
}

const count1 = ref(0)
const count2 = ref(0)
const observedElements = new Map()

const countUp = (targetNumber: number, refValue: { value: number }) => {
  const duration = 1000 // 1 second
  const startTime = performance.now()

  const updateCounter = (currentTime: number) => {
    const elapsedTime = currentTime - startTime
    if (elapsedTime < duration) {
      refValue.value = Math.floor((elapsedTime / duration) * targetNumber)
      requestAnimationFrame(updateCounter)
    } else {
      refValue.value = targetNumber
    }
  }

  requestAnimationFrame(updateCounter)
}

const observeElement = (
  el: Element | null,
  targetNumber: number,
  refValue: Ref<number, number>,
) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          countUp(targetNumber, refValue)
          observer.disconnect() // Stop observing after counting starts
        }
      })
    },
    { threshold: 0.5 }, // Triggers when 50% of the element is visible
  )
  // observer.observe(el)
  // observedElements.set(el, observer)
  if (el instanceof Element) {
    observer.observe(el)
    observedElements.set(el, observer)
  }
}

onMounted(() => {
  startAutoPlay()
  observeElement(document.getElementById('count1'), 70, count1)
  observeElement(document.getElementById('count2'), 10, count2)
})

onUnmounted(() => {
  if (interval) {
    clearInterval(interval)
  }
})
</script>

<template>
  <div class="">
    <div class="relative">
      <img src="../assets/images/landing-image.png" alt="" class="h-screen w-full object-cover" />
      <div class="absolute h-screen w-full bg-black opacity-50 top-0 left-0"></div>
      <div
        class="absolute flex inset-0 items-center justify-center md:justify-start md:ml-[10%] lg:ml-[25%] text-white"
      >
        <div class="m-8">
          <p
            class="max-w-60 md:max-w-xl lg:max-w-2xl text-3xl md:text-3xl lg:text-5xl mb-6 font-semibold opacity-0 animate-fadeInLeft animation-delay-1s"
          >
            Driving sustainability in Africa
          </p>
          <p
            class="md:max-w-xl text-2xl lg:text-3xl opacity-0 animate-fadeInRight animation-delay-1s"
          >
            <!-- Developed with international expertise and innovation -->
            Built on global expertise and innovative thinking, our approach delivers practical,
            sustainable solutions that empower communities and drive long-term growth.
          </p>
          <div
            class="flex flex-col md:flex-row mt-10 opacity-0 animate-fadeInUp animation-delay-1s"
          >
            <button
              class="h-12 w-52 bg-custom-gradient rounded hover:bg-[linear-gradient(to_right,#ffffff,#e0e0e0)] hover:text-primaryColour mr-8 mb-4 md:mb-0"
            >
              <RouterLink to="/products">Find out more</RouterLink>
            </button>
            <button
              class="h-12 w-52 hover:bg-custom-gradient rounded bg-white text-primaryColour hover:text-white"
            >
              <RouterLink to="/contact">Contact us</RouterLink>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- <div>
      <div class="relative w-full max-w-5xl mx-auto mt-20">
        <p class="text-3xl text-center mb-12 font-semibold mx-4">
          Empowering Communities Through Sustainability, Innovation, and Culture
        </p>
        <div
          class="overflow-hidden rounded-xl shadow-lg h-60 sm:h-[400px] md:h-[600px] m-4 relative bg-white"
        >
          <transition-group name="fade" tag="div">
            <img
              v-for="(slide, index) in slides"
              v-show="index === currentIndex"
              :key="slide.image"
              :src="slide.image"
              class="w-full h-60 sm:h-[400px] md:h-[600px] object-cover"
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
        <p class="text-center mt-2 font-semibold lg:text-lg">
          {{ slides[currentIndex].caption }}
        </p>
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
    </div> -->

    <div class="h-max">
      <div class="relative w-full max-w-5xl mx-auto mt-20 h-1/2">
        <p class="text-3xl text-center mb-12 font-semibold mx-4">
          Empowering Communities Through Sustainability, Innovation, and Culture
        </p>

        <!-- <div
          class="overflow-hidden rounded-xl shadow-lg h-60 sm:h-[400px] md:h-[600px] m-4 relative bg-white"
        >
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <img
              v-for="(slide, index) in slides"
              :key="slide.image"
              :src="slide.image"
              class="w-full flex-shrink-0 h-60 sm:h-[400px] md:h-[600px] object-cover"
              alt="Carousel Image"
            />
          </div>

          <button
            @click="prevImage"
            class="absolute top-1/2 left-2 bg-gray-400 text-white rounded-full h-8 w-8 flex justify-center items-center -translate-y-1/2"
          >
            ‹
          </button>
          <button
            @click="nextImage"
            class="absolute top-1/2 right-2 bg-gray-400 text-white rounded-full h-8 w-8 flex justify-center items-center -translate-y-1/2"
          >
            ›
          </button>
        </div> -->

        <!-- Slider wrapper -->
        <div class="overflow-hidden m-4 bg-white relative sm:h-[400px] md:h-[600px] px-0 md:px-40">
          <div
            class="flex transition-transform duration-700 ease-in-out"
            :style="{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${currentIndex * (100 / slides.length)}%)`,
            }"
          >
            <!-- You must make sure this equals 100% * number of slides -->
            <!-- <div
              v-for="(slide, index) in slides"
              :key="slide.image"
              class="w-1/3 px-2 transition-all duration-700 ease-in-out"
              :class="{
                'scale-100 opacity-100 z-10': index === currentIndex,
                'scale-90 opacity-50 z-0': index !== currentIndex,
              }"
            >
              <img
                :src="slide.image"
                class="w-full h-60 sm:h-[400px] md:h-[600px] object-cover rounded-xl"
                alt="Carousel Image"
              />
            </div> -->
            <div
              v-for="(slide, index) in slides"
              :key="slide.image"
              class="px-2 transition-all duration-700 ease-in-out"
              :style="{ flex: `0 0 ${100 / slides.length}%` }"
              :class="{
                'scale-100 opacity-100 z-10': index === currentIndex,
                'scale-90 opacity-50 z-0': index !== currentIndex,
              }"
            >
              <img
                :src="slide.image"
                class="w-full w-full aspect-[4/3] sm:h-[400px] md:h-[600px] object-cover rounded-xl"
                alt="Carousel Image"
              />
            </div>
          </div>

          <button
            @click="prevImage"
            class="absolute top-1/2 left-2 bg-white text-black rounded-full h-8 w-8 flex justify-center items-center -translate-y-1/2 z-20 border border-black"
          >
            <ChevronLeftIcon class="size-4 text-black flex-none" />
          </button>
          <button
            @click="nextImage"
            class="absolute top-1/2 right-2 bg-white text-black rounded-full h-8 w-8 flex justify-center items-center -translate-y-1/2 z-20 border border-black"
          >
            <ChevronRightIcon class="size-4 text-black flex-none" />
          </button>
        </div>

        <p class="text-center mt-2 font-semibold lg:text-lg">
          {{ slides[currentIndex].caption }}
        </p>
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

    <div class="relative">
      <img
        src="https://www.solarfeeds.com/mag/wp-content/uploads/2019/09/american-public-power-association-fm5_vCUa-Bc-unsplash.jpg"
        alt=""
        class="h-screen w-screen object-cover"
      />
      <div class="absolute h-screen w-full bg-black opacity-75 top-0 left-0 h-auto"></div>
      <div class="absolute flex inset-0 items-center justify-center text-white">
        <div class="md:max-w-xl lg:max-w-4xl">
          <div
            class="flex flex-col lg:flex-row bg-blue-500/50 m-4 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-2xl text-white"
          >
            <div class="">
              <!-- <p class="text-3xl mb-6 font-semibold"> -->
              <p class="text-lg lg:text-3xl font-semibold mb-4 sm:text-left">
                Empowering African economies through global partnerships
              </p>
              <p class="text-lg text-white-600 mb-6 hidden sm:block">
                In partnership with a growing consortium of trusted organizations, BrightMotion is
                accelerating the continent’s clean energy transformation
              </p>
              <ul class="text-left space-y-2 text-white-700 text-sm md:text-base max-w-3xl mx-auto">
                <li class="flex items-start">
                  <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                  <span
                    ><strong>Driving Renewable Energy Projects:</strong> Leading the development of
                    solar and wind power infrastructure across Africa.</span
                  >
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                  <span
                    ><strong>Enabling Sector Growth:</strong> Powering key industries such as
                    healthcare, agriculture, and electric mobility through clean energy
                    access.</span
                  >
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                  <span
                    ><strong>Boosting Energy Capacity:</strong> Expanding grid and off-grid energy
                    solutions to strengthen regional and national energy resilience.</span
                  >
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                  <span
                    ><strong>Reducing Fossil Fuel Dependence:</strong> Promoting low-carbon
                    alternatives to support long-term environmental sustainability.</span
                  >
                </li>
                <li class="flex items-start">
                  <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                  <span
                    ><strong>Empowering Communities:</strong> Delivering innovative, reliable, and
                    locally supported energy systems that build economic opportunity and climate
                    resilience.</span
                  >
                </li>
              </ul>
            </div>
            <div class="flex flex-row lg:flex-col lg:ml-16 lg:justify-center items-center mt-6">
              <div class="lg:mb-12 mr-6 lg:mr-0">
                <p class="text-5xl text-yellow-200 font-bold" id="count1">{{ count1 }}+</p>
                <p class="font-semibold">Global collaborations</p>
              </div>
              <div>
                <p class="text-5xl text-yellow-200 font-bold" id="count2">{{ count2 }}+</p>
                <p class="font-semibold">Global collaborations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
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
