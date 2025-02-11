<script setup lang="ts">
import SosmedContent from '@/components/SosmedContent.vue';
import { ref } from 'vue';

const menuItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Privacy Policy', path: '/privacy' }
]);
</script>

<template>
  <footer class="w-full bg-x-black p-8 mt-[59px] max-md:p-4">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <router-link to="/" class="justify-self-center md:justify-self-start">
        <span class="text-3xl text-white">{Finsweet</span>
      </router-link>

      <ul class="flex flex-wrap justify-center md:justify-end gap-4 md:gap-6">
        <li v-for="item in menuItems" :key="item.name">
          <router-link :to="item.path">
            <a class="text-white hover:text-slate-500 focus:text-slate-500 text-base whitespace-nowrap">
              {{ item.name }}
            </a>
          </router-link>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-14 p-8 bg-x-mediumgrey bg-opacity-50">
      <span class="text-2xl md:text-3xl font-bold text-white text-center md:text-left">
        Subscribe to our news letter to get latest updates and news
      </span>

      <div class="flex flex-col sm:flex-row items-center gap-6">
        <input
          class="w-full bg-transparent placeholder:text-slate-400 text-white text-sm border border-slate-200 px-4 py-3"
          placeholder="Enter Your Email">
        <button type="submit"
          class="w-full sm:w-auto inline-flex justify-center items-center py-3 px-8 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800">
          Subscribe
        </button>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-8">
      <div class="flex flex-col text-x-mediumgrey gap-4 text-center sm:text-left">
        <span class="text-base">Finstreet 118 2561 Fintown</span>
        <span class="text-base">Hello@finsweet.com 020 7993 2905</span>
      </div>
      <div class="flex justify-center sm:justify-end">
        <SosmedContent />
      </div>
    </div>
  </footer>
</template>
