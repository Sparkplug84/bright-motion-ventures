<script setup lang="ts">
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import { ref } from 'vue'
import emailjs from 'emailjs-com'
import { useHead } from '@vueuse/head'

useHead({
  title: 'Bright Motion Ventures | Contact page',
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

const name = ref('')
const email = ref('')
const subject = ref('')
const message = ref('')

const sendEmail = () => {
  emailjs
    .send(
      'service_1jc1x1r',
      'template_w6rn148',
      {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      },
      'Rl0E9WaN2-AdRQEHP',
    )
    .then(
      (res) => {
        alert('Email sent!')
      },
      (err) => {
        alert('Failed to send email.')
        console.error(err)
      },
    )
}
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
                class="hover:text-primaryColour hover:underline w-fit ml-1 text-primaryColour"
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
                  v-model="name"
                  type="text"
                  name=""
                  id=""
                  placeholder="YOUR NAME"
                  class="text-black outline-none rounded h-12 text-sm p-4"
                />
                <input
                  v-model="email"
                  type="text"
                  name=""
                  id=""
                  placeholder="YOUR EMAIL"
                  class="text-black outline-none rounded h-12 text-sm p-4"
                />
                <input
                  v-model="subject"
                  type="text"
                  name=""
                  id=""
                  placeholder="SUBJECT"
                  class="text-black outline-none rounded h-12 text-sm p-4"
                />
              </div>
              <div class="w-full md:w-1/2">
                <textarea
                  v-model="message"
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
          <div class="w-full flex justify-center mt-8">
            <button
              type="button"
              class="h-12 w-52 bg-custom-gradient rounded hover:bg-[linear-gradient(to_right,#ffffff,#e0e0e0)] hover:text-primaryColour mb-4 md:mb-0 text-base"
              @click="sendEmail"
            >
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
