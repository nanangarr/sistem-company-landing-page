<script setup lang="ts">
import SosmedContent from '@/components/SosmedContent.vue';
import MainLayout from '@/layouts/MainLayout.vue';
</script>

<template>
    <MainLayout>
        <section class="relative w-full h-[550px] bg-x-lavender">
            <div class="flex flex-row px-[208px] py-32  ">
                <img src="@/assets/images/isian/author.png" class="object-contain w-[251px] max-md:max-w-full" />
                <div class="flex flex-col ml-8">
                    <h2 class="mb-3 text-[40px] font-sans font-bold tracking-[-2px] leading-[64px]">Hey there, I’m
                        Andrew Jonhson and welcome to my Blog</h2>
                    <p class="text-base leading-7 text-x-mediumgrey">Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.
                        At
                        risus viverra adipiscing at in tellus.</p>
                    <div class="flex flex-row">
                        <SosmedContent />
                    </div>
                </div>
                <div class=" absolute bottom-0 h-6 w-[843px] bg-x-yellow"></div>
            </div>
        </section>

        <section>
            <div class="flex flex-col px-[208px] py-[91px]">
                <h1
                    class="self-start font-sans font-bold text-5xl leading-[-2px] tracking-thinger text-x-black max-md:text-4xl">
                    All Posts</h1>

                <div class="flex flex-row grow mt-16 mb-16 gap-8 max-md:flex-co">
                    <img src="@/assets/images/isian/mypost-1.png"
                        class="object-cover w-[412px] h-[320px] max-md:max-w-full" />
                    <div class="self-center w-[512px]">
                        <h6 class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow">BUSINESS</h6>
                        <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">Font sizes in UI design: The
                            complete guide to follow</h2>
                        <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</h6>
                    </div>
                </div>
                <div class="flex flex-row grow mt-16 mb-16 gap-8 max-md:flex-co">
                    <img src="@/assets/images/isian/mypost-3.png"
                        class="object-cover w-[412px] h-[320px] max-md:max-w-full" />
                    <div class="self-center w-[580px]">
                        <h6 class="tracking-[3px] font-semibold text-base leading-5 text-x-yellow">ECONOMY</h6>
                        <h2 class="mt-5 font-bold text-4xl leading-[48px] tracking-[-2px]">How to build rapport with
                            your web design clients</h2>
                        <h6 class="mt-4 font-regular text-base leading-7 text-x-mediumgrey">Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                            aliqua.</h6>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>