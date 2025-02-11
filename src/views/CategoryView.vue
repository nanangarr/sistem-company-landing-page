<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';

const blogPostTitles = [
    'Top 6 free website mockup tools 2022',
    'Step-by-step guide to choosing great font pairs',
    'Ten free google fonts that you should use',
    'What did I learn from doing 50+ design sprints?'
];
</script>

<template>
    <MainLayout>
        <section>
            <!-- Hero Section -->
            <div class="flex flex-col w-full min-h-[250px] md:h-[348px] bg-x-lavender text-center px-4 md:px-0">
                <h2
                    class="mt-12 md:mt-20 text-3xl md:text-6xl tracking-[-2px] leading-tight md:leading-[64px] font-sans font-bold">
                    Business
                </h2>
                <p
                    class="mt-4 w-full md:w-[515px] self-center font-regular text-base leading-7 text-x-mediumgrey px-4 md:px-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mt-8 font-medium text-sm md:text-base tracking-[3px] leading-5">BLOG > BUSINESS</p>
            </div>

            <!-- Content Section -->
            <div class="p-4 md:p-20 flex flex-col lg:flex-row">
                <!-- Blog Posts -->
                <div class="flex flex-col w-full lg:mr-12">
                    <!-- Blog Post Items -->
                    <div class="flex flex-col gap-8 md:gap-16">
                        <template v-for="(title, i) in blogPostTitles" :key="i">
                            <div class="flex flex-col md:flex-row gap-4 md:gap-8 w-full md:w-[838px] md:h-[312px]">
                                <img src="@/assets/images/isian/Blog-post-1.png"
                                    class="object-cover w-full md:w-[294px] h-[200px] md:h-auto rounded-lg" />
                                <div class="self-center w-full md:w-[512px]">
                                    <h6 class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow">BUSINESS
                                    </h6>
                                    <h2
                                        class="mt-3 md:mt-5 font-bold text-2xl md:text-4xl leading-tight md:leading-[48px] tracking-[-2px]">
                                        {{ title }}
                                    </h2>
                                    <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna aliqua.
                                    </h6>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>

                <!-- Sidebar -->
                <div class="flex flex-col mt-8 lg:mt-0">
                    <!-- Categories Section -->
                    <section id="Category">
                        <h2 class="font-bold text-4xl tracking-[-2px] leading-[48px]">Categories</h2>
                        <div class="flex flex-col mt-10 gap-6">
                            <div
                                class="flex items-center w-64 h-24 border-2 border-x-mediumgrey border-opacity-50 hover:bg-x-blue group">
                                <div
                                    class="inline-flex items-center justify-center ml-6 h-12 w-12 rounded-lg bg-x-lightyellow">
                                    <img src="@/assets/images/icon/icon-1.png" alt="">
                                </div>
                                <h4
                                    class="mb-2 ml-4 leading-10 text-3xl font-sans font-bold capitalize transition-all group-hover:text-white">
                                    StartUp</h4>
                            </div>

                            <div
                                class="flex items-center w-64 h-24 border-2 border-x-mediumgrey border-opacity-50 hover:bg-x-blue group">
                                <div
                                    class="inline-flex items-center justify-center ml-6 h-12 w-12 rounded-lg bg-x-lightyellow">
                                    <img src="@/assets/images/icon/icon.png" alt="">
                                </div>
                                <h4
                                    class="mb-2 ml-4 leading-10 text-3xl font-sans font-bold capitalize transition-all group-hover:text-white">
                                    Business</h4>
                            </div>

                            <div
                                class="flex items-center w-64 h-24 border-2 border-x-mediumgrey border-opacity-50 hover:bg-x-blue group">
                                <div
                                    class="inline-flex items-center justify-center ml-6 h-12 w-12 rounded-lg bg-x-lightyellow">
                                    <img src="@/assets/images/icon/icon-2.png" alt="">
                                </div>
                                <h4
                                    class="mb-2 ml-4 leading-10 text-3xl font-sans font-bold capitalize transition-all group-hover:text-white">
                                    Economy</h4>
                            </div>

                            <div
                                class="flex items-center w-64 h-24 border-2 border-x-mediumgrey border-opacity-50 hover:bg-x-blue group">
                                <div
                                    class="inline-flex items-center justify-center ml-6 h-12 w-12 rounded-lg bg-x-lightyellow">
                                    <img src="@/assets/images/icon/icon-3.png" alt="">
                                </div>
                                <h4
                                    class="mb-2 ml-4 leading-10 text-3xl font-sans font-bold capitalize transition-all group-hover:text-white">
                                    Technology</h4>
                            </div>
                        </div>
                    </section>

                    <!-- Tags Section -->
                    <section id="All Tags" class="mt-8 md:mt-12">
                        <h2 class="font-bold text-3xl md:text-4xl tracking-[-2px] leading-[48px]">All tags</h2>
                        <div class="flex flex-wrap gap-3 md:gap-4 mt-6">
                            <template
                                v-for="tag in ['Business', 'Experience', 'Screen', 'Technology', 'Marketing', 'Life']"
                                :key="tag">
                                <div
                                    class="px-4 h-10 md:h-12 flex items-center justify-center rounded-full border-2 border-x-mediumgrey border-opacity-70 text-sm md:text-base">
                                    {{ tag }}
                                </div>
                            </template>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    </MainLayout>
</template>