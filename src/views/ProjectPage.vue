<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'
import { CheckCircleIcon } from '@heroicons/vue/24/solid'

useHead({
  title: 'Bright Motion Ventures | Services page',
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

const industries = ref([
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
  },
  {
    title: 'Engineering, Procurement & Construction (EPC)',
    subtitle: 'End-to-End Project Delivery',
    description: 'Full-scale EPC solutions for energy, healthcare, and agricultural projects.',
    image:
      'https://www.opentext.com/assets/images/products-solutions/solution-industry-category/opentext-image-ov-engineering-procurement-and-construction-en.png',
    items: [
      'Solar farms, hybrid energy, and wind power systems',
      'Medical centre and hospital infrastructure setup',
      'Agricultural mechanization and irrigation design',
      'Equipment sourcing, installation, and commissioning',
      'Reliable project timelines and scalable implementation',
    ],
  },
  {
    title: 'Installation & Commissioning',
    subtitle: 'Built Right From the Start',
    description: 'Expert installation services for all core sectors.',
    image: 'https://eleetpro.com/wp-content/uploads/2024/04/software-dev.jpeg',
    items: [
      'Solar systems and EV charging station setup',
      'Healthcare equipment assembly and testing',
      'Studio and audio-visual system installation',
      'Farm machinery deployment and training',
      'Safety-first, timely, and professional execution',
    ],
  },
  {
    title: 'After-Sales Support & Maintenance',
    subtitle: 'Support That Stays With You',
    description: 'Long-term care to keep your systems running efficiently.',
    image:
      'https://images.ctfassets.net/ukazlt65o6hl/57KsUVgR3aMOiJdWafCJNv/a91282a079be9253d1cab82c937bcb2a/AdobeStock_251500673_1.png',
    items: [
      'Scheduled preventive maintenance and diagnostics',
      'On-site repairs and replacement of key components',
      'Upgrades and system performance tuning',
      'Remote troubleshooting and technical advice',
      'Reliable service network across regions',
    ],
  },
  {
    title: 'Turnkey Project Solutions',
    subtitle: 'All-in-One, Hassle-Free Delivery',
    description: 'We manage your project from idea to execution.',
    image:
      'https://redwhitesky.com/wp-content/uploads/2024/07/Red-White-Sky-Turnkey-Project-Planning-1-1024x576.webp',
    items: [
      'Complete farm setups with layout, training, and irrigation',
      'Diagnostic centres with staffing, design, and supply',
      'Solar projects with financing and infrastructure',
      'Branded wellness product supply and distribution',
      'Simplified execution with one dedicated point of contact',
    ],
  },
  {
    title: 'Custom Sourcing & Private Label Supply',
    subtitle: 'Scale Your Brand With Confidence',
    description: 'We help you bring products to market under your label.',
    image: 'https://styleritelabel.com/wp-content/uploads/2017/09/shutterstock_283092809.jpg',
    items: [
      'Trusted sourcing from certified manufacturers',
      'Private label design, packaging, and branding',
      'Regulatory support including FDA registration',
      'Flexible MOQs for startups and large orders',
      'Ideal for entrepreneurs, NGOs, and retail networks',
    ],
  },
  {
    title: ' Consultation & Advisory Services',
    subtitle: 'Expert Guidance, Tailored Solutions',
    description: 'Strategic advice to optimize performance and impact.',
    image: 'https://busadvisory.com/wp-content/uploads/2023/09/business-consultancy-services.jpg',
    items: [
      'Solar audits, system sizing, and cost projections',
      'Farm planning for mechanization and productivity',
      'Healthcare facility design and workflow support',
      'AV system assessments for schools, events, and studios',
      'Clear recommendations, better outcomes',
    ],
  },
  {
    title: 'Logistics & Delivery Coordination',
    subtitle: 'Seamless Delivery, Every Time',
    description: 'We ensure safe, timely, and traceable delivery.',
    image: 'https://navata.com/cms/wp-content/uploads/2021/09/istockphoto-1212669780-612x612-1.jpg',
    items: [
      'Freight and customs coordination for all orders',
      'Last-mile delivery across Ghana and West Africa',
      'Tracking systems and delivery updates at every step',
      'Support for bulk orders and oversized equipment',
      'Logistics optimized for speed and efficiency',
    ],
  },
  {
    title: 'Partnership & Collaboration Opportunities',
    subtitle: 'Let’s Build a Brighter Future Together',
    description: 'We welcome mission-aligned partnerships across sectors.',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5uqf6PWNGtfKJcR8fHLI4aSNhef9Kr7NU2Q&s',
    items: [
      'Public institutions, ministries, and donor agencies',
      'NGOs and development organizations',
      'Real estate and infrastructure developers',
      'Schools, universities, and health institutions',
      'Retailers, distributors, and entrepreneurial ventures',
    ],
  },
])
</script>

<template>
  <div class="bg-gray-100">
    <div class="relative">
      <img src="../assets/images/landing-image.png" alt="" class="h-screen w-screen object-cover" />
      <div class="absolute h-screen w-full bg-black opacity-50 top-0 left-0 h-auto"></div>
      <div class="absolute flex inset-0 items-center justify-center text-5xl text-white">
        <p class="max-w-2xl">Projects</p>
      </div>
    </div>
    <div class="flex flex-col items-center w-full px-4">
      <div
        v-for="item in industries"
        :key="item.title"
        class="w-full lg:w-3/4 bg-white my-12 rounded-xl px-4 py-8 flex flex-col md:flex-row shadow-xl"
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
          <p class="text-2xl font-semibold text-gray-600 mb-1 text-center md:text-left">
            {{ item.title }}
          </p>
          <!-- <p>{{ item.subtitle }}</p> -->
          <p class="text-primaryColour mb-2 font-semibold text-center md:text-left">
            {{ item.description }}
          </p>
          <hr />
          <div v-for="listItem in item.items" :key="listItem" class="text-sm text-gray-700 mt-2">
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
