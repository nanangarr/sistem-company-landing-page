<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <section>
            <div class=" flex flex-col w-full h-[348px] bg-x-lavender text-center">
                <h2 class="mt-20 text-6xl tracking-[-2px] leading-[64px] font-sans font-bold">Business</h2>
                <p class="mt-4 w-[515px] self-center font-regular text-base leading-7 tracking-none text-x-mediumgrey ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <p class="mt-8 font-medium text-base tracking-[3px] leading-5">BLOG > BUSINESS</p>
            </div>

            <div class="p-20 flex flex-row">
                <div class="flex flex-col mr-12">
                    <div class="flex flex-row grow mb-16 w-[838px] h-[312px] gap-8 max-md:flex-co">
                        <img src="@/assets/images/isian/Blog-post-1.png"
                            class="object-cover w-[294px] max-md:max-w-full" />
                        <div class="self-center w-[512px]">
                            <h6 class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow">BUSINESS</h6>
                            <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">Top 6 free website mockup
                                tools 2022</h2>
                            <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Non blandit massa enim nec.</h6>
                        </div>
                    </div>
                    <div class="flex flex-row grow mb-16 w-[838px] h-[312px] gap-8 max-md:flex-co">
                        <img src="@/assets/images/isian/Blog-post-1.png"
                            class="object-cover w-[294px] max-md:max-w-full" />
                        <div class="self-center w-[512px]">
                            <h6 class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow">BUSINESS</h6>
                            <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">Step-by-step guide to
                                choosing great font pairs</h2>
                            <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Non blandit massa enim nec.</h6>
                        </div>
                    </div>
                    <div class="flex flex-row grow mb-16 w-[838px] h-[312px] gap-8 max-md:flex-co">
                        <img src="@/assets/images/isian/Blog-post-1.png"
                            class="object-cover w-[294px] max-md:max-w-full" />
                        <div class="self-center w-[512px]">
                            <h6 class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow">BUSINESS</h6>
                            <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">Ten free foogle fonts
                                that you should use</h2>
                            <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Non blandit massa enim nec.</h6>
                        </div>
                    </div>
                    <div class="flex flex-row grow mb-16 w-[838px] h-[312px] gap-8 max-md:flex-co">
                        <img src="@/assets/images/isian/Blog-post-1.png"
                            class="object-cover w-[294px] max-md:max-w-full" />
                        <div class="self-center w-[512px]">
                            <h6 class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow">BUSINESS</h6>
                            <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">What did I learn from
                                doing 50+ design sprints?</h2>
                            <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">Lorem ipsum dolor sit
                                amet,
                                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                                aliqua. Non blandit massa enim nec.</h6>
                        </div>
                    </div>
                </div>


                <div class="flex flex-col">
                    <section id="Category">
                        <h2 class="font-bold text-4xl tracking-[-2px] leading-[48px]">Categories</h2>
                        <div class="flex flex-col mt-10 gap-6">
                            <div class="flex items-center w-64 h-24 border-2 border-x-mediumgrey border-opacity-50 hover:bg-x-blue group">
                                <div
                                    class="inline-flex items-center justify-center ml-6 h-12 w-12 rounded-lg bg-x-lightyellow">
                                    <img src="@/assets/images/icon/icon-1.png" alt="">
                                </div>
                                <h4
                                    class="mb-2 ml-4 leading-10 text-3xl font-sans font-bold capitalize transition-all group-hover:text-white">
                                    StartUp</h4>
                            </div>

                            <div class="flex items-center w-64 h-24 border-2 border-x-mediumgrey border-opacity-50 hover:bg-x-blue group">
                                <div
                                    class="inline-flex items-center justify-center ml-6 h-12 w-12 rounded-lg bg-x-lightyellow">
                                    <img src="@/assets/images/icon/icon.png" alt="">
                                </div>
                                <h4
                                    class="mb-2 ml-4 leading-10 text-3xl font-sans font-bold capitalize transition-all group-hover:text-white">
                                    Business</h4>
                            </div>

                            <div class="flex items-center w-64 h-24 border-2 border-x-mediumgrey border-opacity-50 hover:bg-x-blue group">
                                <div
                                    class="inline-flex items-center justify-center ml-6 h-12 w-12 rounded-lg bg-x-lightyellow">
                                    <img src="@/assets/images/icon/icon-2.png" alt="">
                                </div>
                                <h4
                                    class="mb-2 ml-4 leading-10 text-3xl font-sans font-bold capitalize transition-all group-hover:text-white">
                                    Economy</h4>
                            </div>

                            <div class="flex items-center w-64 h-24 border-2 border-x-mediumgrey border-opacity-50 hover:bg-x-blue group">
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

                    <section id="All Tags"></section>
                    <div class="flex flex-col mt-12">
                        <h2 class="font-bold text-4xl tracking-[-2px] leading-[48px]">All tags</h2>
                        <div class="flex flex-wrap gap-4">
                            <div
                                class="w-[113px] h-12 flex items-center justify-center rounded-full border-2 border-x-mediumgrey border-opacity-70">
                                Busines
                            </div>
                            <div
                                class="w-[113px] h-12 flex items-center justify-center rounded-full border-2 border-x-mediumgrey border-opacity-70">
                                Experience
                            </div>
                            <div
                                class="w-[91px] h-12 flex items-center justify-center rounded-full border-2 border-x-mediumgrey border-opacity-70">
                                Screen
                            </div>
                            <div
                                class="w-[141px] h-12 flex items-center justify-center rounded-full border-2 border-x-mediumgrey border-opacity-70">
                                Technology
                            </div>
                            <div
                                class="w-[141px] h-12 flex items-center justify-center rounded-full border-2 border-x-mediumgrey border-opacity-70">
                                Marketing
                            </div>
                            <div
                                class="w-[91px] h-12 flex items-center justify-center rounded-full border-2 border-x-mediumgrey border-opacity-70">
                                Life
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>