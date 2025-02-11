<script setup lang="ts">
import AuthorContent from '@/components/AuthorContent.vue';
import MainLayout from '@/layouts/MainLayout.vue'

const stats = [
  { number: '12+', text: 'Blogs Published' },
  { number: '18K+', text: 'Views on Finsweet' },
  { number: '30K+', text: 'Total active Users' }
];

const sections = [
  {
    title: 'OUR MISSION',
    heading: 'Creating valuable content for creatives all around the world',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
  },
  {
    title: 'OUR VISION',
    heading: 'A platform that empowers individuals to improve',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.'
  }
];
</script>

<template>
  <MainLayout>
    <!-- Hero Section -->
    <div class="py-20 relative z-10 px-4 md:px-0">
      <div class="md:absolute flex flex-col md:flex-row md:ml-[189px] w-full md:w-[1000px] h-auto md:h-[356px]">
        <div class="py-8 md:py-16 px-4 md:px-8 flex bg-white">
          <div>
            <p class="text-base font-medium leading-4 tracking-[3px]">ABOUT US</p>
            <h2 class="mt-4 text-3xl md:text-5xl font-sans leading-tight md:leading-[64px] tracking-[-2px]">We are a
              team of content writers who share their learnings</h2>
          </div>
        </div>
        <div class="mt-4 md:mt-0 md:ml-8 md:self-center">
          <p class="w-full md:w-[477px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="relative px-4 md:px-20 pt-20 md:pt-52">
      <img src="@/assets/images/isian/Friend.png" class="object-cover w-full h-max relative z-0">
      <div
        class="absolute bottom-6 left-4 md:ml-[109px] w-[90%] md:w-[630px] bg-blue-600 text-white py-4 flex justify-around z-20">
        <template v-for="(stat, index) in stats" :key="index">
          <div class="text-center">
            <p class="text-4xl md:text-6xl font-bold font-sans">{{ stat.number }}</p>
            <p class="text-sm md:text-base leading-7">{{ stat.text }}</p>
          </div>
        </template>
      </div>
      <div class="absolute bottom-0 ml-4 md:ml-[109px] h-6 w-[90%] md:w-[843px] bg-x-yellow"></div>
    </div>

    <!-- Mission & Vision Section -->
    <div class="flex flex-col md:flex-row mx-4 md:mx-20 bg-x-lavender">
      <template v-for="(section, index) in sections" :key="index">
        <div class="flex flex-col p-8 md:mt-32 md:mx-[108px] md:w-[481px]">
          <h1 class="font-semibold text-base leading-5 tracking-[3px]">{{ section.title }}</h1>
          <p class="mt-6 font-sans font-bold text-2xl md:text-3xl tracking-[-1px] leading-10">{{ section.heading }}</p>
          <p class="mt-4 text-base leading-7 text-x-mediumgrey">{{ section.description }}</p>
        </div>
      </template>
    </div>

    <!-- Team Section -->
    <div
      class="flex flex-col-reverse md:flex-row grow px-4 md:px-20 mt-16 md:mt-32 gap-8 md:gap-20 items-center relative">
      <div class="w-full md:w-[519px]">
        <p class="font-sans font-bold text-2xl md:text-3xl leading-tight md:leading-[48px] tracking-[-2px]">Our team of
          creatives</p>
        <h2 class="mt-4 font-bold text-xl md:text-2xl leading-8 tracking-[-2px]">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.</h2>
        <h6 class="mt-4 font-regular text-base leading-7 text-x-black">Lorem ipsum dolor sit amet, consectetur
          adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
      </div>
      <div class="relative w-full md:w-auto">
        <img src="@/assets/images/isian/about-1.png" class="object-cover w-full md:w-[624px] h-auto md:h-[480px]" />
        <div
          class="absolute top-[20%] md:top-[114px] rounded-tl-[48px] left-[-32px] md:left-[-64px] w-[80px] md:w-[103px] h-[90px] md:h-[116px] bg-x-blue">
        </div>
      </div>
    </div>

    <!-- Why We Started Section -->
    <div class="flex flex-col md:flex-row grow px-4 md:px-20 mt-16 md:mt-32 gap-8 md:gap-16 items-center relative">
      <div class="relative w-full md:w-auto">
        <img src="@/assets/images/isian/about-2.png" class="object-cover w-full md:w-[624px] h-auto md:h-[480px]" />
        <div
          class="absolute bottom-[-37px] rounded-full left-[20%] md:left-[107px] w-[60px] md:w-[74px] h-[60px] md:h-[74px] bg-x-yellow">
        </div>
      </div>
      <div class="w-full md:w-[519px]">
        <p class="font-sans font-bold text-2xl md:text-3xl leading-tight md:leading-[48px] tracking-[-2px]">Why we
          started
          this Blog</p>
        <h2 class="mt-4 font-bold text-xl md:text-2xl leading-8 tracking-[-2px]">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.</h2>
        <h6 class="mt-4 font-regular text-base leading-7 text-x-black">Lorem ipsum dolor sit amet, consectetur
          adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
      </div>
    </div>

    <!-- Authors Section -->
    <div class="flex flex-col mt-16 md:mt-[91px] px-4 md:px-20">
      <div class="flex flex-col mb-8 md:mb-12 mt-16 md:mt-[128px]">
        <h2 class="font-bold text-3xl md:text-4xl text-center tracking-[-2px]">List Of Author</h2>
      </div>
      <AuthorContent class="mb-8" />
      <AuthorContent />
    </div>

  </MainLayout>
</template>
