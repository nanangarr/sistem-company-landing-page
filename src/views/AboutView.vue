<script setup lang="ts">
import AuthorContent from '@/components/AuthorContent.vue';
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <MainLayout>
    <div class="py-20 relative z-10">
      <div class="absolute flex flex-row ml-[189px] w-[1000px] h-[356px]">
        <div class="py-16 px-8 flex bg-white">
          <div>
            <p class="text-base font-medium leading-4 tracking-[3px]">ABOUT US</p>
            <h2 class="mt-4 text-5xl font-sans leading-[64px] tracking-[-2px]">We are a team of content writers who
              share their learnings</h2>
          </div>
        </div>
        <div class="ml-8 self-center">
          <p class="w-[477px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
            ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>

    <div class="relative px-20 pt-52">
      <img src="@/assets/images/isian/Friend.png" class="object-cover w-full h-max relative z-0">
      <div class="absolute bottom-6 ml-[109px] w-[630px] bg-blue-600 text-white py-4 flex justify-around z-20">
        <div class="text-center">
          <p class="text-6xl font-bold font-sans">12+</p>
          <p class="text-base leading-7">Blogs Published</p>
        </div>
        <div class="text-center">
          <p class="text-6xl font-bold font-sans">18K+</p>
          <p class="text-base leading-7">Views on Finsweet</p>
        </div>
        <div class="text-center">
          <p class="text-6xl font-bold font-sans">30K+</p>
          <p class="text-base leading-7">Total active Users</p>
        </div>
      </div>
      <div class="absolute bottom-0 ml-[109px] h-6 w-[843px] bg-x-yellow"></div>
    </div>

    <div class="flex flex-row ml-20 mr-20  bg-x-lavender w-auto h-[441px]">
      <div class="flex flex-col mt-32 ml-[108px] w-[481px]">
        <h1 class="font-semibold text-base leading-5 tracking-[3px]">OUR MISION</h1>
        <p class="mt-6 font-sans font-bold text-3xl tracking-[-1px] leading-10 ">Creating valuable content for creatives
          all around the world</p>
        <p class="mt-4 text-base leading-7 text-x-mediumgrey ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus
          viverra adipiscing at in tellus.</p>
      </div>
      <div class="flex flex-col mt-32 ml-8 mr-[108px] w-[481px]">
        <h1 class="font-semibold text-base leading-5 tracking-[3px]">OUR VISION</h1>
        <p class="mt-6 font-sans font-bold text-3xl tracking-[-1px] leading-10 ">A platform that empowers individuals to
          improve</p>
        <p class="mt-4 text-base leading-7 text-x-mediumgrey ">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus
          viverra adipiscing at in tellus.</p>
      </div>
    </div>

    <div class="flex flex-row grow px-20 mt-32 gap-20 max-md:flex-col items-center relative">
      <div class="w-[519px]">
        <p class="font-sans font-bold text-3xl leading-[48px] tracking-[-2px]">Our team of creatives</p>
        <h2 class="mt-4 font-bold text-2xl leading-8 tracking-[-2px]">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt.</h2>
        <h6 class="mt-4 font-regular text-base leading-7 text-x-black">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.</h6>
      </div>
      <div class="relative">
        <img src="@/assets/images/isian/about-1.png"
          class="object-cover items-end justify-end w-[624px] h-[480px] max-md:max-w-full" />
        <div
          class="absolute top-[114px] rounded-tl-[48px] left-[-64px] w-[103px] h-[116px] bg-x-blue flex items-center justify-center text-white font-bold">

        </div>
      </div>
    </div>

    <div class="flex flex-row grow px-20 mt-32 gap-16 max-md:flex-col items-center relative">
      <div class="relative">
        <img src="@/assets/images/isian/about-2.png"
          class="object-cover items-end justify-end w-[624px] h-[480px] max-md:max-w-full" />
        <div
          class="absolute bottom-[-37px] rounded-full left-[107px] w-[74px] h-[74px] bg-x-yellow flex items-center justify-center text-white font-bold">
        </div>
      </div>
      <div class="w-[519px]">
        <p class="font-sans font-bold text-3xl leading-[48px] tracking-[-2px]">Why we started this Blog</p>
        <h2 class="mt-4 font-bold text-2xl leading-8 tracking-[-2px]">Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt.</h2>
        <h6 class="mt-4 font-regular text-base leading-7 text-x-black">Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat.</h6>
      </div>
    </div>

    <div class="flex flex-col mt-[91px] px-20">
      <div class="flex flex-col mb-12 mt-[128px]">
        <h2 class="font-bold text-4xl self-center tracking-[-2px] ">List Of Author</h2>
      </div>
      <AuthorContent class="mb-8"/> 
      <AuthorContent />
    </div>

  </MainLayout>
</template>
