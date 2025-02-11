<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Us', path: '/about' },
  { name: 'Contact Us', path: '/contact' },
];

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 px-12 w-full h-[80px] bg-x-black flex items-center justify-between z-50">
    <router-link to="/"><img src="@/assets/images/logo/logo-join-sistem.png" alt="Join Sistem Logo"></router-link>

    <!-- Desktop Menu -->
    <div class="hidden lg:block justify-center">
      <ul class="flex flex-col lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
        <li v-for="item in navigationItems" :key="item.path"
          class="flex items-center p-1 text-sm gap-x-2 text-white hover:text-x-yellow transition duration-150 ease-in-out">
          <router-link :to="item.path" class="flex items-center">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>

    <!-- Desktop Contact Button -->
    <a href="#"
      class="bg-x-blue px-4 py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out hidden lg:block">Contact
      Us</a>

    <!-- Hamburger Button -->
    <button @click="toggleMenu"
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle text-xs font-medium uppercase text-white transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </span>
    </button>

    <!-- Mobile Menu -->
    <div
      :class="['lg:hidden fixed inset-0 z-50 bg-x-black transform transition-transform duration-300 ease-in-out', isMenuOpen ? 'translate-x-0' : 'translate-x-full']"
      style="top: 80px;">
      <div class="p-6">
        <ul class="flex flex-col space-y-4">
          <li v-for="item in navigationItems" :key="item.path"
            class="text-white hover:text-x-yellow transition duration-150 ease-in-out">
            <router-link :to="item.path" @click="toggleMenu">{{ item.name }}</router-link>
          </li>
        </ul>
        <div class="mt-6">
          <a href="#"
            class="block w-full text-center bg-x-blue px-4 py-2 rounded-full text-white hover:bg-x-yellow transition duration-150 ease-in-out"
            @click="toggleMenu">Contact Us</a>
        </div>
      </div>
    </div>
  </nav>
  <div class="h-[80px]"></div>
</template>
