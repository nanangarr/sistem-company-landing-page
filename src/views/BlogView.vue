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
            <div class="p-20 w-full h-[519px] bg-x-lavender max-md:px-5 max-md:max-w-full">
                <div class="flex gap-5 max-md:flex-col">
                    <!--TEKS-->
                    <div class="flex flex-col mr[141px] w-[594px] max-md:ml-0 max-md:w-full">
                        <div
                            class="flex flex-col items-start self-stretch my-auto w-full font-medium max-md:mt-10 max-md:max-w-full">
                            <p class="uppercase tracking-[3px]">
                                <span class="font-medium">Featured Post</span>
                            </p>
                            <h1
                                class="mt-4 text-4xl font-bold font-sans w-[624px] tracking-tighter leading-[64px] max-md:max-w-full max-md:text-4xl max-md:leading-[51px]">
                                Step-by-step guide to
                                choosing great font pairs</h1>
                            <p class="mt-3 text-sm">
                                <span class="text-x-darkgrey">By <span class="text-x-yellow">James West</span> | May 23,
                                    2022
                                </span>
                            </p>
                            <p class="mt-3 text-sm h-[56px] w-[624px] leading-[28px] max-md:max-w-full">
                                <span class="text-x-mediumgrey">Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                                    non proident.</span>
                            </p>
                            <router-link to="/blogpost">
                                <button type='button'
                                    class='py-2.5 px-12 mt-6 text-sm bg-x-blue text-white font-semibold text-center duration-500 hover:bg-x-yellow max-md:px-5'>Read
                                    More ></button>
                            </router-link>
                        </div>
                    </div>
                    <!--GAMBAR-->
                    <div class="flex flex-col ml-5 w-[515px] max-md:ml-0 max-md:w-full">
                        <img src="/src/assets/images/isian/Blog-nav.png" alt=""
                            class="object-cover grow aspect-[1.43]  max-md:mt-10 max-md:max-w-full">
                    </div>
                </div>
            </div>
        </div>

        <!--ALL POST-->
        <section class="flex flex-col p-20">
            <h1
                class="self-start font-sans font-bold text-5xl leading-[-2px] tracking-thinger text-x-black max-md:text-4xl">
                All Posts
            </h1>
            <hr
                class="mt-8 w-full border border-solid border-x-mediumgrey min-h-[1px] opacity-[0.32] max-md:max-w-full" />

            <!-- Posts Grid -->
            <div class="flex flex-col mt-16 w-full max-w-[1147px] max-md:mt-10 max-md:max-w-full">
                <div v-for="post in displayedPosts" :key="post.id"
                    class="flex flex-row grow mb-16 w-[1146px] gap-5 max-md:flex-col">
                    <img :src="post.image" :alt="post.title"
                        class="object-cover w-[450px] aspect-[1.54] max-md:max-w-full" />
                    <div class="ml-6 self-center w-[624px] h-[208px] max-md:ml-0 max-md:w-full">
                        <h6 class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow">
                            {{ post.category }}
                        </h6>
                        <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">
                            {{ post.title }}
                        </h2>
                        <h6 class="mt-4 font-regular leading-7 text-x-mediumgrey">
                            {{ post.description }}
                        </h6>
                    </div>
                </div>

                <!-- Pagination Controls -->
                <div class="flex justify-center mt-16 font-sans md:gap-x-4 gap-x-2 min-w-max">
                    <button @click="prevPage" :disabled="currentPage === 1" :class="['text-gray-500 hover:text-gray-900 ml-[17px] inline-flex items-center md:mr-8 mr-1',
                        { 'opacity-50 cursor-not-allowed': currentPage === 1 }]">
                        <span class="font-bold">
                            < Prev</span>
                    </button>
                    <button @click="nextPage" :disabled="currentPage === totalPages" :class="['text-black hover:text-x-mediumgrey justify-center inline-flex items-center md:ml-8 ml-1',
                        { 'opacity-50 cursor-not-allowed': currentPage === totalPages }]">
                        <span class="font-bold">Next ></span>
                    </button>
                </div>
            </div>
        </section>

        <div class="flex flex-col px-20">
            <h1
                class="self-start font-sans font-bold text-4xl leading-[48px] tracking-[-2px] mb-12 text-x-black max-md:text-4xl">
                All Categories</h1>

            <div class="flex flex-row justify-center font-sans categories max-md:px-5 max-md:mt-10">
                <CategoryContent />
            </div>
        </div>

        <div class="flex px-16 mb-20">
            <SubscribeContent />
        </div>
    </MainLayout>
</template>