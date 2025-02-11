<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
import AuthorContent from '@/components/AuthorContent.vue';
import SubscribeContent from '@/components/SubscribeContent.vue';
import CategoryContent from '@/components/CategoryContent.vue';
import { ref } from 'vue';

const testimonials = ref([
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Andrew Jonson",
    location: "New York, USA",
    image: new URL('@/assets/images/isian/orang5.png', import.meta.url).href,
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    name: "Sarah Connor",
    location: "California, USA",
    image: new URL('@/assets/images/isian/orang1.png', import.meta.url).href,
  },
  {
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    name: "John Smith",
    location: "Texas, USA",
    image: new URL('@/assets/images/isian/orang2.png', import.meta.url).href,
  },
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.value.length) % testimonials.value.length;
};

const articles = ref([
  {
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "8 Figma design systems that you can download for free today."
  },
  {
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "8 Figma design systems that you can download for free today."
  },
  {
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "8 Figma design systems that you can download for free today."
  },
  {
    author: "John Doe",
    date: "Aug 23, 2021",
    title: "8 Figma design systems that you can download for free today."
  }
]);

</script>

<template>
  <MainLayout>
    <!--HALAMAN AWAL-->
    <div class="w-full min-h-[720px] pt-20 relative bg-no-repeat z-0 overflow-hidden bg-center bg-cover bg-radial"
      style="background-image: url('/src/assets/images/isian/pexels-olly-3772622.jpg'); transform: scaleX(-1); direction: ltr;">
      <div class="flex flex-col items-start px-6 sm:px-10 lg:px-20 py-10 sm:py-16 lg:py-20 w-full"
        style="transform: scaleX(-1);">
        <p class="font-semibold text-white uppercase tracking-[3px] text-sm sm:text-base">
          <span class="font-thin">Posted on</span>
          <span class="font-black"> startup</span>
        </p>
        <h1
          class="mt-4 sm:mt-6 text-3xl sm:text-4xl lg:text-5xl font-semibold font-sans text-white w-full sm:w-[80%] lg:w-[700px] tracking-tighter leading-tight sm:leading-[51px] lg:leading-[64px]">
          Step-by-step guide to choosing great font pairs
        </h1>
        <p class="mt-4 sm:mt-6 text-sm sm:text-base">
          <span class="text-white">By <span class="text-x-yellow">James West</span> | May 23, 2022 </span>
        </p>
        <p class="mt-4 sm:mt-6 text-sm sm:text-base w-full sm:w-[80%] lg:w-[599px] leading-relaxed sm:leading-[28px]">
          <span class="text-white">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</span>
        </p>
        <button type='button'
          class='py-2 sm:py-2.5 px-8 sm:px-12 mt-8 sm:mt-16 text-sm bg-x-blue text-white font-semibold text-center duration-500 hover:bg-x-yellow'>
          Read More >
        </button>
      </div>
    </div>

    <div class="px-6 sm:px-10 lg:px-20 mb-10 sm:mb-20">
      <!--ALL POST-->
      <div class="flex flex-col font-[Sen] mt-8 sm:mt-[50px]">
        <header
          class="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-between mt-10 sm:mt-[80px] text-2xl sm:text-3xl lg:text-4xl font-bold">
          <h1 class="tracking-[-2px]">Featured Post</h1>
          <div class="flex justify-between items-center">
            <h2 class="tracking-[-2px]">All Posts</h2>
            <a href="#" class="text-base leading-7 text-x-yellow ml-4 sm:ml-24">View All</a>
          </div>
        </header>
      </div>

      <div class="mt-8 w-full">
        <div class="flex flex-col lg:flex-row gap-5">
          <article class="w-full lg:w-[55%]">
            <div class="flex flex-col items-start p-4 sm:p-8 border border-solid">
              <img src="/src/assets/images/isian/pexels-zachtheshoota-1838640.jpg" alt="Featured blog post"
                class="w-full object-cover aspect-[1.8]" />
              <div class="mt-6 sm:mt-8 text-sm font-medium">
                By <span class="text-x-yellow">John Doe</span> | <time datetime="2022-05-23">May 23, 2022</time>
              </div>
              <h3 class="mt-4 text-xl sm:text-2xl tracking-tighter leading-tight sm:leading-10 text-gray-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p class="mt-4 text-sm sm:text-base leading-relaxed sm:leading-7 text-zinc-500">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
              <button type='button'
                class='py-2 sm:py-2.5 px-8 sm:px-12 mt-6 sm:mt-8 text-sm bg-x-blue text-white font-semibold text-center duration-500 hover:bg-x-yellow'>
                Read More >
              </button>
            </div>
          </article>

          <aside class="w-full lg:w-[45%]">
            <div class="flex flex-col">
              <article v-for="(article, index) in articles" :key="index"
                class="flex flex-col items-start py-4 sm:py-6 px-4 sm:px-8 hover:bg-x-lightyellow">
                <div class="text-sm font-medium leading-none text-black">
                  By <span class="text-x-yellow">{{ article.author }}</span> |
                  <time :datetime="article.date">{{ article.date }}</time>
                </div>
                <h4 class="mt-2 text-xl sm:text-2xl font-bold leading-tight sm:leading-8 text-gray-800">
                  {{ article.title }}
                </h4>
              </article>
            </div>
          </aside>
        </div>
      </div>

      <!--ABOUT US-->
      <div class="flex flex-col mt-20 sm:mt-32">
        <div class="hidden sm:flex flex-row h-[28px]">
          <div class="ml-[199px] py-2 w-[843px] bg-x-yellow"></div>
          <div class="justify-end py-2 w-[282px] bg-x-blue"></div>
        </div>
        <div class="flex flex-col lg:flex-row px-6 sm:px-20 py-12 sm:py-24 font-sans bg-x-lavender gap-8 lg:gap-0">
          <div class="w-full lg:w-[52%]">
            <h2 class="self-start font-semibold leading-none uppercase tracking-[3px]">
              ABOUT US
            </h2>
            <h3 class="mt-6 text-3xl sm:text-4xl tracking-tighter leading-tight sm:leading-10">
              We are a community of content writers who share their learnings
            </h3>
            <p class="mt-4 leading-relaxed sm:leading-7 text-base text-x-mediumgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a href="" class="mt-4 text-base font-bold text-x-yellow">Read More ></a>
          </div>
          <div class="w-full lg:w-[52%]">
            <h2 class="self-start font-semibold leading-none uppercase tracking-[3px]">
              Our mision
            </h2>
            <h3 class="mt-6 text-3xl sm:text-4xl tracking-tighter leading-tight sm:leading-10">
              Creating valuable content for creatives all around the world
            </h3>
            <p class="mt-4 leading-relaxed sm:leading-7 text-base text-x-mediumgrey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <!--CHOOSE OF CATEGORY-->
      <div class="flex flex-col mb-12 mt-32">
        <h2 class="font-bold text-4xl self-center tracking-[-2px]">Choose A Category</h2>
      </div>
      <CategoryContent />

      <!-- WHY WE STARTED -->
      <div class="container mx-auto mt-20 lg:mt-32 px-4">
        <div class="relative flex flex-col lg:flex-row">
          <!-- Image Container -->
          <div class="w-full lg:w-2/3">
            <img src="/src/assets/images/isian/Sahabat.png" alt="Why we started"
              class="w-full h-[300px] md:h-[500px] lg:h-[705px] object-cover">
          </div>

          <!-- Content Box -->
          <div class="w-full lg:w-[606px] bg-white p-6 md:p-10 lg:p-20 
                      lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/3">
            <div class="max-w-xl">
              <h2 class="font-semibold text-sm uppercase tracking-[3px] text-gray-800">
                Why we started
              </h2>

              <h1 class="mt-6 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-800 
                        leading-tight lg:leading-[64px]">
                It started out as a simple idea and evolved into our passion
              </h1>

              <p class="mt-6 text-base leading-7 text-x-mediumgrey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
              </p>

              <button type='button' class='mt-8 py-4 px-8 md:px-12 text-sm bg-x-blue text-white font-semibold 
                      hover:bg-x-yellow transition duration-300 w-full md:w-auto'>
                Read More >
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--LIST OF AUTHOR-->
      <div class="flex flex-col">
        <div class="flex flex-col mb-12 mt-32">
          <h2 class="font-bold text-4xl self-center tracking-[-2px] ">List Of Author</h2>
        </div>
        <AuthorContent />
      </div>

      <!--LOGO IPSUM-->
      <div class="flex flex-col sm:flex-row items-center justify-center mt-20 sm:mt-32 px-6 sm:px-0 gap-8 sm:gap-4">
        <div class="text-center sm:text-left">
          <span class="text-sm leading-5 text-x-mediumgrey block">We Are</span>
          <span class="text-2xl leading-8 text-x-mediumgrey font-bold">Featured In</span>
        </div>
        <div class="grid grid-cols-2 sm:flex sm:flex-row gap-8 sm:gap-4 items-center">
          <img src="/src/assets/images/isian/Ipsum1.png" alt="" class="w-[120px] sm:w-[153px]">
          <img src="/src/assets/images/isian/Ipsum2.png" alt="" class="w-[120px] sm:w-[153px]">
          <img src="/src/assets/images/isian/Ipsum3.png" alt="" class="w-[120px] sm:w-[153px]">
          <img src="/src/assets/images/isian/Ipsum4.png" alt="" class="w-[120px] sm:w-[153px]">
          <img src="/src/assets/images/isian/Ipsum5.png" alt="" class="w-[120px] sm:w-[153px]">
        </div>
      </div>

      <!--NEXT dan PREV-->

      <div
        class="flex flex-col lg:flex-row w-full min-h-[464px] bg-x-lightyellow mt-20 sm:mt-32 p-6 sm:p-20 gap-10 lg:gap-20">
        <div class="flex flex-col w-full lg:w-[349px]">
          <h6 class="tracking-[3px] font-semibold text-base leading-5">TESTIMONIAL</h6>
          <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">
            What people say about our blog
          </h2>
          <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </h6>
        </div>

        <div class="hidden lg:block shrink-0 w-px border border-solid opacity-40 bg-zinc-500 border-zinc-500 h-[310px]">
        </div>

        <div class="flex flex-col w-full lg:w-[469px]">
          <h2 class="mb-8 lg:mb-[121px] font-bold text-2xl leading-8 tracking-[-2px]">
            {{ testimonials[currentSlide].text }}
          </h2>

          <div class="flex flex-col sm:flex-row gap-4">
            <div class="flex gap-4 items-start">
              <img :src="testimonials[currentSlide].image" alt=""
                class="object-center shrink-0 mt-1.5 w-12 h-12 rounded-full aspect-square">
              <div>
                <h2 class="text-2xl font-sans font-bold tracking-tighter leading-8">
                  {{ testimonials[currentSlide].name }}
                </h2>
                <h6 class="text-base text-x-mediumgrey leading-7">
                  {{ testimonials[currentSlide].location }}
                </h6>
              </div>
            </div>

            <div class="flex gap-4 mt-4 sm:mt-0 sm:ml-auto items-center">
              <button @click="prevSlide" class="flex">
                <svg class="h-10 w-10 bg-white rounded-full hover:bg-x-darkgrey p-2" width="24" height="24"
                  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="5" y1="12" x2="9" y2="16" />
                  <line x1="5" y1="12" x2="9" y2="8" />
                </svg>
              </button>

              <button @click="nextSlide" class="flex">
                <svg class="h-10 w-10 bg-white rounded-full hover:bg-x-darkgrey p-2" width="24" height="24"
                  viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <line x1="15" y1="16" x2="19" y2="12" />
                  <line x1="15" y1="8" x2="19" y2="12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <!--SUBSCRIBE-->
      <SubscribeContent />
    </div>
  </MainLayout>
</template>
