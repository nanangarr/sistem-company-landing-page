<script setup lang="ts">
import { ref, computed } from 'vue';
import CategoryContent from '@/components/CategoryContent.vue';
import SubscribeContent from '@/components/SubscribeContent.vue'
import MainLayout from '@/layouts/MainLayout.vue'

const allPosts = ref([
    {
        id: 1,
        category: 'STARTUP',
        title: 'Design tips for designers that cover everything you need',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-1.png'
    },
    {
        id: 2,
        category: 'BUSINESS',
        title: 'How to build rapport with your web design clients',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-2.png'
    },
    {
        id: 3,
        category: 'STARTUP',
        title: 'Logo design trends to avoid in 2022',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-3.png'
    },
    {
        id: 4,
        category: 'TECHNOLOGY',
        title: '8 Figma design systems you can download for free today',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-4.png'
    },
    {
        id: 5,
        category: 'ECONOMY',
        title: 'Font sizes in UI design: The complete guide to follow',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-5.png'
    },
    {
        id: 6,
        category: 'STARTUP',
        title: 'How to design a product that can grow itself 10x in year',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-1.png'
    },
    // Second page posts
    {
        id: 7,
        category: 'BUSINESS',
        title: 'Understanding color theory: The color wheel and finding complementary colors',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-2.png'
    },
    {
        id: 8,
        category: 'TECHNOLOGY',
        title: 'The importance of responsive design in modern web development',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-3.png'
    },
    {
        id: 9,
        category: 'STARTUP',
        title: 'Essential tools every designer should know about',
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
        image: '/src/assets/images/isian/Blog-post-4.png'
    }
]);

const currentPage = ref(1);
const postsPerPage = 6;

const totalPages = computed(() => Math.ceil(allPosts.value.length / postsPerPage));

const displayedPosts = computed(() => {
    const start = (currentPage.value - 1) * postsPerPage;
    const end = start + postsPerPage;
    return allPosts.value.slice(start, end);
});

const nextPage = () => {
    if (currentPage.value < totalPages.value) {
        currentPage.value++;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};

const prevPage = () => {
    if (currentPage.value > 1) {
        currentPage.value--;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
};
</script>

<template>
    <MainLayout>

        <!--HEADER-->
        <div class="flex flex-col">
            <div class="p-4 sm:p-8 lg:p-20 w-full bg-x-lavender">
                <div class="flex flex-col lg:flex-row gap-5 max-w-7xl mx-auto">
                    <!--TEKS-->
                    <div class="flex flex-col lg:w-1/2 space-y-4">
                        <p class="uppercase tracking-[3px] font-medium">
                            Featured Post
                        </p>
                        <h1
                            class="text-2xl sm:text-3xl lg:text-4xl font-bold font-sans tracking-tighter leading-tight lg:leading-[64px]">
                            Step-by-step guide to choosing great font pairs
                        </h1>
                        <p class="text-sm text-x-darkgrey">
                            By <span class="text-x-yellow">James West</span> | May 23, 2022
                        </p>
                        <p class="text-sm text-x-mediumgrey leading-[28px]">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <router-link to="/blogpost">
                            <button type='button'
                                class='py-2.5 px-8 sm:px-12 text-sm bg-x-blue text-white font-semibold text-center duration-500 hover:bg-x-yellow'>
                                Read More >
                            </button>
                        </router-link>
                    </div>
                    <!--GAMBAR-->
                    <div class="lg:w-1/2 mt-6 lg:mt-0">
                        <img src="/src/assets/images/isian/Blog-nav.png" alt=""
                            class="w-full h-auto object-cover rounded-sm">
                    </div>
                </div>
            </div>
        </div>

        <!--ALL POST-->
        <section class="flex flex-col p-4 sm:p-8 lg:p-20">
            <h1 class="font-sans font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tighter text-x-black">
                All Posts
            </h1>
            <hr class="mt-8 w-full border border-solid border-x-mediumgrey opacity-[0.32]" />

            <!-- Posts Grid -->
            <div class="flex flex-col mt-8 lg:mt-16 w-full max-w-7xl mx-auto">
                <div v-for="post in displayedPosts" :key="post.id"
                    class="flex flex-col sm:flex-row mb-8 lg:mb-16 gap-5">
                    <img :src="post.image" :alt="post.title"
                        class="w-full sm:w-[40%] lg:w-[450px] object-cover rounded-sm" />
                    <div class="flex flex-col justify-center space-y-3 sm:ml-6">
                        <h6 class="tracking-[3px] font-semibold text-sm sm:text-base leading-5 text-x-yellow">
                            {{ post.category }}
                        </h6>
                        <h2 class="font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                            {{ post.title }}
                        </h2>
                        <h6 class="text-sm sm:text-base text-x-mediumgrey">
                            {{ post.description }}
                        </h6>
                    </div>
                </div>

                <!-- Pagination Controls -->
                <div class="flex justify-center mt-8 lg:mt-16 font-sans gap-x-4">
                    <button @click="prevPage" :disabled="currentPage === 1"
                        class="text-gray-500 hover:text-gray-900 inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed">
                        <span class="font-bold">
                            &lt; Prev</span>
                    </button>
                    <button @click="nextPage" :disabled="currentPage === totalPages"
                        class="text-black hover:text-x-mediumgrey inline-flex items-center disabled:opacity-50 disabled:cursor-not-allowed">
                        <span class="font-bold">Next ></span>
                    </button>
                </div>
            </div>
        </section>

        <div class="flex flex-col px-4 sm:px-8 lg:px-20">
            <h1 class="font-sans font-bold text-2xl sm:text-3xl lg:text-4xl tracking-tight mb-8 lg:mb-12 text-x-black">
                All Categories
            </h1>

            <div class="flex flex-col sm:flex-row justify-center font-sans categories">
                <CategoryContent />
            </div>
        </div>

        <div class="flex px-4 sm:px-8 lg:px-16 mb-10 lg:mb-20">
            <SubscribeContent />
        </div>
    </MainLayout>
</template>