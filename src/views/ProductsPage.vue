<script setup lang="ts">
import { useHead } from '@vueuse/head'
// import { ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'
import { reactive } from 'vue'

useHead({
  title: 'Bright Motion Ventures | Products page',
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

const industries = reactive([
  {
    title: 'Renewable Energy & Solar Power',
    subtitle: 'Clean power. Clear promise',
    description:
      'We deliver modern energy independence with scalable, reliable, and smart renewable infrastructure.',
    image:
      'https://flameenergy.co.uk/wp-content/uploads/2023/05/My-project-1-2023-05-09T123350.819-1024x683.jpg',
    items: [
      'Supply of Tier-1 solar panels, inverters, batteries, and hybrid solutions',
      'EV charging stations ranging from 20kW to 360kW',
      'Full EPC (Engineering, Procurement, Construction) services for solar systems',
      'Financing options and grid integration support',
      'Fast installation (within 48–72 hours) with after-sales care',
    ],
    inView: false,
  },
  {
    title: 'Agriculture & Farm Equipment',
    subtitle: 'Modern Tools for a greener tomorrow',
    description:
      'We empower farmers with efficient, affordable mechanization solutions for all scales.',
    image:
      'https://res.cloudinary.com/zenbusiness/image/upload/q_auto,w_1040/v1/zbremote/articles/farmer-on-tractor-working.jpg',
    items: [
      'Tractors (80–160HP), trailers, harvesters, and irrigation tools',
      'Full farm setup packages including training and support',
      'Seeders, planters, pumps, and agri drones',
      'Durable equipment tested for African terrains',
      'Financing and maintenance solutions available',
    ],
    inView: false,
  },
  {
    title: 'Healthcare Equipment & Solution',
    subtitle: 'Building Stronger Health Systems',
    description:
      'We provide certified medical technology and end-to-end services for health facilities.',
    image:
      'https://fieldpoint.net/wp-content/uploads/2023/11/Nurse-putting-patient-into-MRI-machine.jpg',
    items: [
      'MRI, CT, Ultrasound, ICU, and lab equipment',
      'Turnkey development for diagnostic centres and hospitals',
      'Digital infrastructure including telemedicine platforms',
      'Regulatory support, staff training, and installation',
      'CE/ISO-certified equipment with aftercare packages',
    ],
    inView: false,
  },
  {
    title: 'Engines, Generators & Power Equipment',
    subtitle: 'Powering Productivity Across Industries',
    description: 'We offer dependable power solutions built for resilience and performance.',
    image:
      'https://atlascea.com.au/wp-content/uploads/2018/05/QAS-500kVa-Stationary-and-Portable-Diesel-Generators.jpeg',
    items: [
      'EPA/Euro V-certified gasoline and diesel engines',
      'Portable and high-output generators for all uses',
      'Water and sewage pumps, pressure washers included',
      'Fast nationwide delivery and technical support',
      'Long warranties with spare parts availability',
    ],
    inView: false,
  },
  {
    title: 'Mobility: Motorcycles & Tricycles',
    subtitle: 'Smart, Affordable Transport Solutions',
    description: 'Designed for logistics, commuting, and small businesses.',
    image: 'https://www.doble.co.uk/i/3723/news-2025-honda-motorcycles.jpg?r=3437',
    items: [
      'Electric motorcycles (CINECO series) and fuel options (Zonsen RX/RA series)',
      'Cargo tricycles: electric, diesel, and petrol-powered',
      'Full accessory range: helmets, tires, maintenance kits',
      'Affordable and durable transport for urban and rural use',
      'On-ground repair and after-sales support',
    ],
    inView: false,
  },
  {
    title: 'Sound & Audio-Visual Technology',
    subtitle: 'Immersive Experiences, Delivered',
    description: 'Professional-grade AV and sound equipment for every environment.',
    image:
      'https://aztecsound.com/wp-content/uploads/2020/04/different-types-of-audio-visual-equipment.jpg',
    items: [
      'PA systems, subwoofers, studio monitors, microphones',
      'VR/AR headsets and interactive learning tools',
      'Headphones: wireless, studio-quality, branded options',
      'Custom solutions for schools, churches, DJs, and event spaces',
      'OEM/global brands with training and installation services',
    ],
    inView: false,
  },
  {
    title: 'Skincare, Sanitary & Wellness Products',
    subtitle: 'Wellness That Works. Products You Can Trust.',
    description: 'High-quality, certified products tailored for the African market.',
    image: 'https://www.maxgreenalchemy.com/assets/images/blog/affordable-natural-skin-care.jpg',
    items: [
      'Dermatologist-tested creams, serums, and cleansers',
      'Sanitary pads, menstrual cups, cloth alternatives',
      'Multivitamins, immune and hormone support supplements',
      'Custom packaging and private label services',
      'GMP-certified manufacturing and regulatory assistance',
    ],
    inView: false,
  },
])
</script>

<template>
  <div class="bg-gray-100">
    <div class="relative">
      <img
        src="https://www.greenbuildingafrica.co.za/wp-content/uploads/2022/09/Jasper-solar-plant-in-South-Africa-solarreserve-2015-96.jpeg"
        alt=""
        class="h-screen w-screen object-cover"
      />
      <div class="absolute h-screen w-full bg-black opacity-50 top-0 left-0 h-auto"></div>
      <div class="absolute flex inset-0 items-center justify-center text-white">
        <div class="md:max-w-xl lg:max-w-4xl">
          <!-- <p class="max-w-2xl">Projects</p> -->
          <div
            class="flex flex-col lg:flex-row bg-blue-500/10 m-4 rounded-2xl p-6 md:p-10 backdrop-blur-sm shadow-2xl text-white opacity-0 animate-fadeInLeftShort animation-delay-500ms"
          >
            <div class="">
              <!-- <p class="text-3xl mb-6 font-semibold"> -->
              <p class="text-lg lg:text-3xl font-semibold mb-4 sm:text-left">
                Powering progress. Enabling possibilities. Delivering solutions across Africa.
              </p>
              <hr />
              <div class="mt-4">
                <!-- BrightMotion with it's network consortium of partners is advancing renewable energy
                projects across Africa, focusing on solar and wind power, EV, healthcare, and
                agriculture among others. These initiatives aim to enhance energy capacity, drive
                economic growth, and reduce reliance on fossil fuels. By leveraging advanced
                technology and fostering local expertise, the consortium delivers sustainable,
                reliable energy solutions, empowering communities and contributing to a greener,
                more resilient future for the continent. -->
                <div class="max-w-5xl mx-auto">
                  <!-- <h2 class="text-2xl font-bold text-white-800 mb-4">
                    Powering Africa’s Future with Sustainable Innovation
                  </h2> -->
                  <p class="text-lg text-white-600 mb-6 hidden sm:block">
                    BrightMotion, in collaboration with a trusted consortium of partners, is driving
                    impactful renewable energy initiatives across the continent:
                  </p>
                  <ul
                    class="text-left space-y-2 text-white-700 text-sm md:text-base max-w-3xl mx-auto"
                  >
                    <li class="flex items-start">
                      <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                      <span
                        ><strong>Accelerating Renewable Projects:</strong> Leading the development
                        of solar and wind energy infrastructure throughout Africa.</span
                      >
                    </li>
                    <li class="flex items-start">
                      <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                      <span
                        ><strong>Expanding Clean Mobility:</strong> Supporting the transition to
                        electric vehicles (EVs) to reduce carbon emissions.</span
                      >
                    </li>
                    <li class="flex items-start">
                      <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                      <span
                        ><strong>Advancing Key Sectors:</strong> Enabling growth in healthcare,
                        agriculture, and other vital industries through clean energy.</span
                      >
                    </li>
                    <li class="flex items-start">
                      <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                      <span
                        ><strong>Building Energy Capacity:</strong> Enhancing national and regional
                        energy access to fuel economic development.</span
                      >
                    </li>
                    <li class="flex items-start">
                      <CheckCircleIcon class="size-4 mr-2 text-primaryColour flex-none mt-1" />
                      <span
                        ><strong>Empowering Communities:</strong> Delivering reliable, locally
                        supported solutions for a greener, more resilient future.</span
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col items-center w-full px-4">
      <!-- class="w-full lg:w-3/4 bg-white my-12 rounded-xl px-4 py-8 flex flex-col md:flex-row shadow-xl" -->
      <div
        v-for="(item, index) in industries"
        :key="item.title"
        v-intersect="() => (item.inView = true)"
        :class="[
          'w-full lg:w-3/4 bg-white my-12 rounded-xl px-4 py-8 flex flex-col md:flex-row shadow-xl transition-opacity duration-1000',
          item.inView
            ? index % 2 == 0
              ? 'animate-fadeInRightShort'
              : 'animate-fadeInLeftShort'
            : 'opacity-0',
        ]"
      >
        <div
          class="w-full md:w-52 flex items-center justify-center mb-4 lg:mb-0 mr-0 md:mr-8 ml-0 md:ml-4"
        >
          <div class="aspect-square w-52 h-full rounded-full bg-blue-300">
            <img
              :src="item.image"
              alt=""
              class="object-cover w-52 h-full rounded-full bg-blue-300"
            />
          </div>
        </div>

        <div class="w-auto flex flex-col justify-center">
          <p class="text-2xl font-semibold text-white-600 mb-1 text-center md:text-left">
            {{ item.title }}
          </p>
          <!-- <p>{{ item.subtitle }}</p> -->
          <p class="text-primaryColour mb-2 font-semibold text-center md:text-left">
            {{ item.description }}
          </p>
          <hr />
          <div v-for="listItem in item.items" :key="listItem" class="text-sm text-white-700 mt-2">
            <div class="flex md:items-center">
              <CheckCircleIcon class="size-4 mr-1 text-primaryColour flex-none mt-1 md:mt-0" />
              <p class="flex-grow">{{ listItem }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
