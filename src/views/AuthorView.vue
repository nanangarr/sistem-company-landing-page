<script setup lang="ts">
import SosmedContent from '@/components/SosmedContent.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const blogPosts = [
    {
        image: '/src/assets/images/isian/mypost-1.png',
        category: 'BUSINESS',
        title: 'Font sizes in UI design: The complete guide to follow',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        image: '/src/assets/images/isian/mypost-3.png',
        category: 'ECONOMY',
        title: 'How to build rapport with your web design clients',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
];
</script>

<template>
    <MainLayout>
        <!-- Author Hero Section -->
        <section class="relative w-full min-h-[550px] bg-x-lavender px-4 md:px-0">
            <div class="flex flex-col md:flex-row md:px-[208px] py-16 md:py-32">
                <img src="/src/assets/images/isian/author.png"
                    class="object-contain w-[200px] md:w-[251px] mx-auto md:mx-0" />
                <div class="flex flex-col mt-8 md:mt-0 md:ml-8">
                    <h2
                        class="mb-3 text-3xl md:text-[40px] font-sans font-bold tracking-[-2px] leading-tight md:leading-[64px] text-center md:text-left">
                        Hey there, I'm Andrew Jonhson and welcome to my Blog
                    </h2>
                    <p class="text-base leading-7 text-x-mediumgrey text-center md:text-left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                    </p>
                    <div class="flex flex-row justify-center md:justify-start mt-6 md:mt-4">
                        <SosmedContent />
                    </div>
                </div>
                <div
                    class="absolute bottom-0 left-1/2 transform -translate-x-1/2 md:translate-x-0 md:left-[208px] h-6 w-[90%] md:w-[843px] bg-x-yellow">
                </div>
            </div>
        </section>

        <!-- Blog Posts Section -->
        <section class="px-4 md:px-[208px] py-12 md:py-[91px]">
            <h1
                class="font-sans font-bold text-3xl md:text-5xl leading-tight tracking-tighter text-x-black text-center md:text-left">
                All Posts
            </h1>

            <div class="space-y-12 md:space-y-16 mt-8 md:mt-16">
                <template v-for="(post, index) in blogPosts" :key="index">
                    <div class="flex flex-col md:flex-row gap-6 md:gap-8">
                        <img :src="post.image"
                            class="object-cover w-full md:w-[412px] h-[250px] md:h-[320px] rounded-lg" />
                        <div class="self-center w-full md:w-[512px]">
                            <h6
                                class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow text-center md:text-left">
                                {{ post.category }}
                            </h6>
                            <h2
                                class="mt-3 md:mt-5 font-bold text-2xl md:text-4xl leading-tight md:leading-[48px] tracking-[-2px] text-center md:text-left">
                                {{ post.title }}
                            </h2>
                            <h6
                                class="mt-4 font-regular text-base leading-7 text-x-mediumgrey text-center md:text-left">
                                {{ post.description }}
                            </h6>
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </MainLayout>
</template>