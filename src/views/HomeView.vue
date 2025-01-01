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
]);

const currentSlide = ref(0);

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % testimonials.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + testimonials.value.length) % testimonials.value.length;
};


</script>

<template>
  <MainLayout>
    <!--HALAMAN AWAL-->
    <div class="w-full h-[720px] pt-20 relative bg-no-repeat z-0 overflow-hidden bg-center bg-cover bg-radial"
      style="background-image: url('/src/assets/images/isian/pexels-olly-3772622.jpg'); transform: scaleX(-1); direction: ltr;">
      <div class="flex flex-col items-start px-20 py-20 w-full md:px-10 lg:px-20 md:py-16 lg:py-20"
        style="transform: scaleX(-1);">
        <p class="font-semibold text-white uppercase tracking-[3px]">
          <span class="font-thin">Posted on</span>
          <span class="font-black "> startup</span>
        </p>
        <h1
          class="mt-6 text-5xl font-semibold font-sans text-white w-[700px] tracking-tighter leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
          Step-by-step guide to
          choosing great font pairs</h1>
        <p class="mt-6 text-base">
          <span class="text-white">By <span class="text-x-yellow">James West</span> | May 23, 2022 </span>
        </p>
        <p class="mt-6 text-base h-[56px] w-[599px] leading-[28px] max-md:max-w-full">
          <span class="text-white">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur
            sint occaecat cupidatat non proident.</span>
        </p>
        <button type='button'
          class='py-2.5 px-12 mt-16 text-sm bg-x-blue text-white font-semibold text-center duration-500 hover:bg-x-yellow max-md:px-5'>Read
          More ></button>
      </div>
    </div>

    <div class="px-20 mb-20">
      <!--ALL POST-->
      <div class="flex flex-col font-[Sen] mt-[50px]">
        <header
          class="flex gap-5 justify-between mt-[80px] text-4xl font-bold leading-none text-gray-800 max-md:mr-0.5 max-md:max-w-full">
          <h1 class="tracking-[-2px]">Featured Post</h1>
          <h2 class="tracking-[-2px] ml-24">All Posts</h2>
          <a href="#" class="my-auto text-base leading-7 text-x-yellow" tabindex="0">View All</a>
        </header>
      </div>

      <div class="mt-8 w-full max-md:max-w-ful">
        <div class="flex gap-5 max-md:flex-col">
          <article class="flex flex-col w-[55%] max-md:ml-0 max-md:w-full">
            <div
              class="flex flex-col items-start p-8 mx-auto w-full font-bold border border-solid max-md:px-5 max-md:mt-8 max-md:max-w-full">
              <img src="/src/assets/images/isian/pexels-zachtheshoota-1838640.jpg" alt="Featured blog post"
                class="object-contain aspect-[1.8] w-[669px] max-md:max-w-full" />
              <div class="mt-8 text-sm font-medium leading-none text-black">
                By <span class="text-x-yellow">John Doe</span> | <time datetime="2022-05-23">May 23, 2022</time>
              </div>
              <h3 class="mt-4 text-2xl tracking-tighter leading-10 text-gray-800 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
              </h3>
              <p class="mt-4 text-base leading-7 text-zinc-500 max-md:max-w-full">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident.
              </p>
              <button type='button'
                class='py-2.5 px-12 mt-8 text-sm bg-x-blue text-white font-semibold text-center duration-500 hover:bg-x-yellow max-md:px-5'>Read
                More ></button>
            </div>
          </article>

          <aside class="flex flex-col ml-5 w-[45%] max-md:ml-0 max-md:w-full">
            <div class="flex flex-col grow max-md:mt-8 max-md:max-w-full">
              <article
                class="flex flex-col items-start py-6 pr-20 pl-8 max-md:px-5 max-md:max-w-full hover:bg-x-lightyellow">
                <div class="text-sm font-medium leading-none text-black">
                  By <span class="text-x-yellow">John Doe</span> | <time datetime="2021-08-23">Aug 23, 2021</time>
                </div>
                <h4 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h4>
              </article>

              <article
                class="flex flex-col items-start py-6 pr-20 pl-8 max-md:px-5 max-md:max-w-full hover:bg-x-lightyellow">
                <div class="text-sm font-medium leading-none text-black">
                  By <span class="text-x-yellow">John Doe</span> | <time datetime="2021-08-23">Aug 23, 2021</time>
                </div>
                <h4 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h4>
              </article>

              <article
                class="flex flex-col items-start py-6 pr-20 pl-8 max-md:px-5 max-md:max-w-full hover:bg-x-lightyellow">
                <div class="text-sm font-medium leading-none text-black">
                  By <span class="text-x-yellow">John Doe</span> | <time datetime="2021-08-23">Aug 23, 2021</time>
                </div>
                <h4 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h4>
              </article>

              <article
                class="flex flex-col items-start py-6 pr-20 pl-8 max-md:px-5 max-md:max-w-full hover:bg-x-lightyellow">
                <div class="text-sm font-medium leading-none text-black">
                  By <span class="text-x-yellow">John Doe</span> | <time datetime="2021-08-23">Aug 23, 2021</time>
                </div>
                <h4 class="mt-2 text-2xl font-bold leading-8 text-gray-800">
                  8 Figma design systems that you can download for free today.
                </h4>
              </article>
            </div>
          </aside>
        </div>
      </div>

      <!--ABOUT US-->
      <div class="flex flex-col mt-32">
        <div class="flex flex-row h-[28px]">
          <div class="ml-[199px] py-2 w-[843px] bg-x-yellow"></div>
          <div class="justify-end py-2 w-[282px] bg-x-blue"></div>
        </div>
        <div class="flex flex-col-2 px-20 py-24 font-sans bg-x-lavender max-md:px-5">
          <div class="flex flex-col w-[52%]">
            <h2 class="self-start font-semibold leading-none uppercase tracking-[3px]">
              ABOUT US
            </h2>
            <h3 class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
              We are a community of content writers who share their learnings
            </h3>
            <p class="mt-4 mr-6 leading-7 text-base text-x-mediumgrey max-md:mr-2.5 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a href="" class="mt-4 text-base font-bold text-x-yellow">Read More ></a>
          </div>
          <div class="flex flex-col w-[52%]">
            <h2 class="self-start font-semibold leading-none uppercase tracking-[3px]">
              Our mision
            </h2>
            <h3 class="mt-6 text-4xl tracking-tighter leading-10 max-md:max-w-full">
              Creating valuable content for creatives all around the world
            </h3>
            <p class="mt-4 mr-6 leading-7 text-base text-x-mediumgrey max-md:mr-2.5 max-md:max-w-full">
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

      <!--WHY WE STARTED-->
      <div class="relative mt-32 max-md:mt-10">
        <div class="flex flex-col items-start max-md:pr-5">
          <div class="relative flex flex-col w-[949px] h-[705px] max-md:pt-24">
            <img src="/src/assets/images/isian/Sahabat.png" alt="" class="w-full h-full object-cover">
          </div>
          <div class="absolute right-0 flex flex-col bg-white w-[606px] h-[584px] mt-[121px] max-md:px-5">
            <h2 class="self-start font-semibold leading-none text-gray-800 mt-20 ml-20 uppercase tracking-[3px]">
              Why we started
            </h2>
            <h1
              class="mt-6 ml-20 text-5xl tracking-tighter text-gray-800 leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[60px]">
              It started out as a simple idea and evolved into our passion</h1>
            <p class="mt-4 ml-20 text-base leading-7 text-x-mediumgrey max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
            <button type='button'
              class='py-4 px-12 mt-8 ml-20 text-sm w-[269px] h-14 bg-x-blue text-white font-semibold text-center duration-500 hover:bg-x-yellow max-md:px-5'>Read
              More ></button>
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
      <div class="flex flex-row-5 mt-32 justify-center mx-auto">
        <div class="flex flex-col ml-3.5 mr-9">
          <span class="text-sm leading-5 text-x-mediumgrey">We Are</span>
          <span class="text-2xl leading-8 text-x-mediumgrey font-bold">Featured In</span>
        </div>
        <div class="flex flex-row mt-1">
          <div class="flex flex-col mt-2 mr-9">
            <img src="/src/assets/images/isian/Ipsum1.png" alt="" class="w-[153px]">
          </div>
          <div class="flex flex-col mt-2 mr-9">
            <img src="/src/assets/images/isian/Ipsum2.png" alt="" class="w-[153px]">
          </div>
          <div class="flex flex-col mt-2 mr-9">
            <img src="/src/assets/images/isian/Ipsum3.png" alt="" class="w-[153px]">
          </div>
          <div class="flex flex-col mt-2 mr-9">
            <img src="/src/assets/images/isian/Ipsum4.png" alt="" class="w-[153px]">
          </div>
          <div class="flex flex-col mt-2">
            <img src="/src/assets/images/isian/Ipsum5.png" alt="" class="w-[153px]">
          </div>
        </div>
      </div>

      <!--NEXT dan PREV-->

      <div class="flex flex-row w-full h-[464px] bg-x-lightyellow mt-32 gap-20 relative justify-center mx-auto">
        <div class="flex flex-col mt-[92px] ml-[112px] w-[349px] h-[200px]">
          <h6 class="tracking-[3px] font-semibold text-base leading-5">TESTIMONIAL</h6>
          <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">
            What people say about our blog
          </h2>
          <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </h6>
        </div>

        <div class="mt-[92px] shrink-0 w-px border border-solid opacity-40 bg-zinc-500 border-zinc-500 h-[310px]"></div>

        <div class="flex flex-col w-[469px] mt-20">
          <h2 class="mb-[121px] font-bold text-2xl leading-8 tracking-[-2px]">
            {{ testimonials[currentSlide].text }}
          </h2>

          <div class="flex gap-4 items-start self-start">
            <img :src="testimonials[currentSlide].image" alt=""
              class="object-center shrink-0 mt-1.5 w-12 h-12 rounded-full aspect-square">
            <div>
              <h2 class="text-2xl font-sans font-bold tracking-tighter leading-8">{{ testimonials[currentSlide].name }}
              </h2>
              <h6 class="text-base text-x-mediumgrey leading-7">{{ testimonials[currentSlide].location }}</h6>
            </div>

            <button @click="prevSlide" class="flex ml-14 self-center">
              <svg class="h-10 w-10 bg-white rounded-full hover:bg-x-darkgrey p-2" width="24" height="24"
                viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="5" y1="12" x2="9" y2="16" />
                <line x1="5" y1="12" x2="9" y2="8" />
              </svg>
            </button>

            <button @click="nextSlide" class="flex self-center">
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

      <!--SUBSCRIBE-->
      <SubscribeContent />
    </div>
  </MainLayout>
</template>
