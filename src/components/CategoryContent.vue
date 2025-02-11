<script setup lang="ts">
import { ref } from 'vue';

const categories = ref([
    {
        title: "Business",
        description: "Provides faster Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        icon: new URL('@/assets/images/icon/icon.png', import.meta.url).href,
        path: "/category"
    },
    {
        title: "StartUp",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        icon: new URL('@/assets/images/icon/icon-1.png', import.meta.url).href,
        path: "/category"
    },
    {
        title: "Economy",
        description: "Provides faster Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        icon: new URL('@/assets/images/icon/icon-2.png', import.meta.url).href,
        path: "/category"
    },
    {
        title: "Technology",
        description: "Provides faster Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
        icon: new URL('@/assets/images/icon/icon-3.png', import.meta.url).href,
        path: "/category"
    }
]);
</script>

<template>
    <div class="container mx-auto px-4 py-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <router-link v-for="(category, index) in categories" :key="index" :to="category.path" class="block h-full">
                <div class="h-full border border-gray-200 transition-all duration-300 hover:bg-x-blue group p-5 xl:p-7">
                    <div
                        class="inline-flex items-center justify-center mb-4 h-12 w-12 sm:h-14 sm:w-14 rounded-lg bg-x-lightyellow">
                        <img :src="category.icon" :alt="category.title" class="w-6 sm:w-8">
                    </div>
                    <h4
                        class="text-xl sm:text-2xl font-bold text-black group-hover:text-white mb-2 capitalize transition-all duration-300">
                        {{ category.title }}
                    </h4>
                    <p
                        class="text-sm font-normal text-x-mediumgrey group-hover:text-white transition-all duration-300 leading-relaxed">
                        {{ category.description }}
                    </p>
                </div>
            </router-link>
        </div>
    </div>
</template>