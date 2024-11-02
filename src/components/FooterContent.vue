<script setup lang="ts"> 
import SosmedContent from '@/components/SosmedContent.vue';
</script>

<template>
  <footer class="w-full bg-x-black p-8 mt-[59px] max-md:px-5 max-md:mt-10">
    <div class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
      <router-link to="/"><span class="text-3xl text-white">{Finsweet</span></router-link>

        <ul class="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <router-link to="/"><a href="#" class="text-white hover:text-slate-500 focus:text-slate-500 text-base">
                Home
              </a></router-link>
          </li>
          <li>
            <router-link to="/blog"><a href="#" class="text-white hover:text-slate-500 focus:text-slate-500 text-base">
                Blog
              </a></router-link>
          </li>
          <li>
            <router-link to="/about"><a href="#" class="text-white hover:text-slate-500 focus:text-slate-500 text-base">
                About Us
              </a></router-link>
          </li>
          <li>
            <router-link to="/contact"><a href="#"
                class="text-white hover:text-slate-500 focus:text-slate-500 text-base">
                Contact Us
              </a></router-link>
          </li>
          <li>
            <router-link to="/privacy"><a href="#"
                class="text-white hover:text-slate-500 focus:text-slate-500 text-base">
                Privacy Policy
              </a></router-link>
          </li>
        </ul>
    </div>
    <div class="flex flex-col-2 mt-14 w-full h-64 bg-x-mediumgrey bg-opacity-50">
      <span class="flex font-bold text-3xl ml-16 w-[45%] items-center justify-center text-white md:text-3xl">Subscribe
        to our
        news letter to
        get latest updates and news</span>
      <div class="flex items-center max-w-lg ml-10 max-md:max-w-lg ">
        <div class="w-full max-w-sm min-w-[260px]">
          <input
            class="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 px-3 py-2"
            placeholder="Enter Your Email">
        </div>
        <button type="submit"
          class="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white bg-blue-700 border-blue-700 hover:bg-blue-800 ">
          Subscribe
        </button>
      </div>
    </div>
    <div class="grid grid-cols-2">
      <div class="flex flex-col mt-8 text-x-mediumgrey">
        <span class="text-base">Finstreet 118 2561 Fintown</span>
        <span class="text-base">Hello@finsweet.com 020 7993 2905</span>
      </div>
      <div class="flex justify-end mt-8 mr-2">
        <SosmedContent/>
      </div>
    </div>
  </footer>
</template>
