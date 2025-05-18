<script setup lang="ts">
import {
  PresentationChartBarIcon,
  AcademicCapIcon,
  GlobeAltIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  GlobeEuropeAfricaIcon,
  UserGroupIcon,
  RocketLaunchIcon,
  BoltIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'
import { onMounted, ref } from 'vue'

const isVisible = ref(false)
const hasAnimated = ref(false)
const animatedDiv = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        hasAnimated.value = true
        observer.unobserve(entry.target)
      }
    },
    {
      threshold: 0.5,
    },
  )

  if (animatedDiv.value) {
    observer.observe(animatedDiv.value)
  }
})
</script>

<template>
  <div>
    <div
      class="md:flex lg:h-screen lg:w-full items-center md:pt-20"
      style="background-color: rgb(214, 152, 93)"
    >
      <div
        class="opacity-0 animate-fadeInLeft animation-delay-1s w-full md:w-1/3 mb-8 ml-0 sm:ml-8 pt-12"
      >
        <img src="../assets/images/Godwin7.jpg" alt="" class="h-auto w-full" />
      </div>
      <div
        class="h-full w-full md:w-2/3 text-white flex flex-col justify-center animate-fadeInRight animation-delay-1s text-bs/7 opacity-0 lg:text-lg"
      >
        <div
          class="mx-4 xl:mx-40 2xl:mx-60 mb-12 bg-white rounded-2xl p-4 sm:p-6 backdrop-blur-sm shadow-2xl text-gray-600"
        >
          <p class="text-lg lg:text-3xl font-semibold mb-4 sm:text-left">
            Meet Godwin Tengey - Founder & CEO of BrightMotion
          </p>
          <div class="">
            <p class="mb-4 text-sm lg:text-base">
              Godwin Tengey is the visionary leader behind BrightMotion, combining deep strategic
              insight with hands-on business experience. Here's a snapshot of his journey:
            </p>
            <div class="flex items-center h-14">
              <div
                class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
              >
                <PresentationChartBarIcon
                  class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour"
                />
              </div>
              <div>
                <p class="text-sm lg:text-lg font-semibold">Over a Decade of Strategic Advisory</p>
                <p class="text-sm">
                  Blending high-level planning with practical business execution.
                </p>
              </div>
            </div>
            <hr class="my-2" />
            <div class="flex items-center h-14">
              <div
                class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
              >
                <AcademicCapIcon class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour" />
              </div>
              <div>
                <p class="text-sm lg:text-lg font-semibold">Strong Academic Foundation</p>
                <p class="text-sm">
                  Advanced degrees from top European schools and the University of Ghana.
                </p>
              </div>
            </div>
            <hr class="my-2" />
            <div class="flex items-center h-14">
              <div
                class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
              >
                <GlobeAltIcon class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour" />
              </div>
              <div>
                <p class="text-sm lg:text-lg font-semibold">Expertise in Key Global Disciplines</p>
                <p class="text-sm">
                  Specialized in economics, development, and strategic management.
                </p>
              </div>
            </div>
            <hr class="my-2" />
            <div class="flex items-center h-14">
              <div
                class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
              >
                <BriefcaseIcon class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour" />
              </div>
              <div>
                <p class="text-sm lg:text-lg font-semibold">International Business Experience</p>
                <p class="text-sm">
                  Led successful ventures in China, mastering cross-cultural engagement.
                </p>
              </div>
            </div>
            <hr class="my-2" />
            <div class="flex items-center h-14">
              <div
                class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
              >
                <ChatBubbleLeftRightIcon
                  class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour"
                />
              </div>
              <div>
                <p class="text-sm lg:text-lg font-semibold">Proven Relationship Builder</p>
                <p class="text-sm">Drives collaborative growth across Africa and beyond.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <img src="../assets/images/landing-image.png" alt="" class="h-screen w-screen object-cover" />
      <div class="absolute h-screen w-full bg-black opacity-50 top-0 left-0 h-auto"></div>

      <div class="absolute flex inset-0 items-center justify-center text-white">
        <!------------------------------------- remove ---------------------------------------------------->
        <!-- <div
          class="flex inset-0 items-center justify-center md:justify-start md:ml-[10%] lg:ml-[25%] text-white"
        >
          <div class="m-8 bg-blue-500/40 rounded-2xl p-6 backdrop-blur-sm shadow-lg">
            <p
              class="max-w-60 md:max-w-xl lg:max-w-2xl text-3xl md:text-3xl lg:text-5xl mb-6 font-semibold"
            >
              Who are we?
            </p>
            <div class="md:max-w-xl">
              BrightMotion Ventures is a Ghana-based initiative working with global partners to
              drive sustainable progress across Africa. Here's what we're all about:
              <ul class="list-disc ml-4">
                <li>
                  <b>Headquartered in Ghana</b>, with partnerships across the US, China, and other
                  global regions
                </li>
                <li>
                  <b>Collaborating across all sectors</b> to create inclusive and impactful growth
                </li>
                <li>
                  <b>Mission:</b>
                  <ul class="list-disc ml-6">
                    <li>Socioeconomic development</li>
                    <li>Cultural enrichment</li>
                  </ul>
                </li>
                <li>
                  <b>Focused on sustainable solutions </b>that:
                  <ul class="list-disc ml-6">
                    <li>Empower communities</li>
                    <li>Support innovation</li>
                    <li>Strengthen national development</li>
                  </ul>
                </li>
                <li>
                  <b>Driven by strategic partnerships and a passion for progress</b>
                </li>
                <li>
                  <b>Vision:</b> To be a transformative force in shaping Africa’s future, helping
                  build a thriving economy and celebrating vibrant cultural heritage
                </li>
              </ul>
            </div>
          </div>
        </div> -->
        <!------------------------------------- remove ---------------------------------------------------->

        <!-- class="h-full w-full md:w-2/3 text-white flex flex-col justify-center animate-fadeInRight animation-delay-1s text-bs/7 opacity-0 lg:text-lg" -->
        <div
          ref="animatedDiv"
          :class="[
            'h-full w-full md:w-2/3 text-white flex flex-col justify-center text-bs/7 lg:text-lg transition-opacity duration-700',
            hasAnimated
              ? isVisible
                ? 'animate-fadeInDownShort opacity-100'
                : 'opacity-0'
              : 'opacity-0',
          ]"
        >
          <div
            class="mx-4 xl:mx-40 2xl:mx-60 mb-12 bg-blue-500/50 rounded-2xl p-4 sm:p-6 backdrop-blur-sm shadow-2xl text-white"
          >
            <p class="text-lg lg:text-3xl font-semibold mb-4 sm:text-left">Who are we?</p>
            <div class="">
              <p class="mb-4 text-sm lg:text-base">
                BrightMotion Ventures is a Ghana-based initiative working with global partners to
                drive sustainable progress across Africa. Here's what we're all about:
              </p>
              <div class="flex items-center h-14">
                <div
                  class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
                >
                  <GlobeEuropeAfricaIcon
                    class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour"
                  />
                </div>
                <div>
                  <p class="text-sm lg:text-lg font-semibold">Headquartered in Ghana</p>
                  <p class="text-sm">
                    Partnerships across the US, China, and other global regions.
                  </p>
                </div>
              </div>
              <hr class="my-2" />
              <div class="flex items-center h-14">
                <div
                  class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
                >
                  <UserGroupIcon class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour" />
                </div>
                <div>
                  <p class="text-sm lg:text-lg font-semibold">Collaboration across all sectors</p>
                  <p class="text-sm">Creating inclusive and impactful growth.</p>
                </div>
              </div>
              <hr class="my-2" />
              <div class="flex items-center h-14">
                <div
                  class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
                >
                  <RocketLaunchIcon
                    class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour"
                  />
                </div>
                <div>
                  <p class="text-sm lg:text-lg font-semibold">Our mission</p>
                  <p class="text-sm">Socioeconomic development and cultural enrichment.</p>
                </div>
              </div>
              <hr class="my-2" />
              <div class="flex items-center h-14">
                <div
                  class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
                >
                  <BoltIcon class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour" />
                </div>
                <div>
                  <p class="text-sm lg:text-lg font-semibold">Focused on sustainable solutions</p>
                  <p class="text-sm">
                    Empower communities, support innovation and strengthen national development.
                  </p>
                </div>
              </div>
              <hr class="my-2" />
              <div class="flex items-center h-14">
                <div
                  class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
                >
                  <PresentationChartBarIcon
                    class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour"
                  />
                </div>
                <div>
                  <p class="text-sm lg:text-lg font-semibold">Strategic partnerships</p>
                  <p class="text-sm">Driven by a passion for progess.</p>
                </div>
              </div>
              <hr class="my-2" />
              <div class="flex items-center h-14">
                <div
                  class="bg-gray-200 h-full flex items-center justify-center w-8 sm:w-14 my-2 mr-2"
                >
                  <SparklesIcon class="size-6 sm:size-8 text-grey-600 mx-1 text-primaryColour" />
                </div>
                <div>
                  <p class="text-sm lg:text-lg font-semibold">The vision</p>
                  <p class="text-sm">To be a transformative force in shaping Africa’s future.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
