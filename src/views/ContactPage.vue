<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <div>
    <div class="relative">
      <img src="../assets/images/world-map.jpg" alt="" class="h-screen w-screen object-cover" />
      <div class="absolute h-screen w-full bg-black opacity-70 top-0 left-0 right-0"></div>
      <div class="absolute flex inset-0 justify-center text-5xl text-white mt-40 w-full">
        <div class="w-full">
          <p class="mb-8 text-center">GET IN TOUCH</p>
          <div class="flex flex-col items-center">
            <p class="text-base flex items-center mb-4">
              <PhoneIcon class="size-4 mx-1 text-white" />Phone: +123 456 7890
            </p>
            <p class="text-base flex items-center mb-4">
              <EnvelopeIcon class="size-4 mx-1 text-white" />Email:
              <a
                href="mailto:info@brightmotionventures.com"
                class="hover:text-primaryColour hover:underline w-fit ml-1"
                >info@brightmotionventures.com</a
              >
            </p>
            <p class="text-base flex items-center">
              <MapPinIcon class="size-4 mx-1 text-white" />Address: Somewhere in Ghana???
            </p>
          </div>
          <div class="w-full flex justify-center">
            <div
              class="w-full md:w-3/4 lg:w-1/2 flex flex-col md:flex-row items-center mt-12 justify-center gap-4 mx-4"
            >
              <div class="flex flex-col gap-4 mb-4 md:mb-0 w-full md:w-1/2">
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="YOUR NAME"
                  class="text-black outline-none rounded h-12 text-sm p-4"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="YOUR EMAIL"
                  class="text-black outline-none rounded h-12 text-sm p-4"
                />
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="YOUR NUMBER"
                  class="text-black outline-none rounded h-12 text-sm p-4"
                />
              </div>
              <div class="w-full md:w-1/2">
                <textarea
                  type="text"
                  name=""
                  id=""
                  rows="4"
                  placeholder="YOUR MESSAGE"
                  class="text-black outline-none rounded h-44 text-sm p-4 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
