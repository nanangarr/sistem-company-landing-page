<script setup lang="ts">
</script>

<template>
    <div class="container justify-center mx-auto">
        <div class="flex flex-row justify-center font-sans categories max-md:px-5 max-md:mt-10">
            <router-link to="/category">
                <div
                    class="relative w-[296px] h-[228px] mr-8 border border-solid border-gray-200 transition-all duration-500 col-span-12 hover:bg-x-blue group xl:p-7 lg:col-span-3 md:col-span-6 ">
                    <div class="inline-flex items-center justify-center mb-4 h-14 w-14 rounded-lg bg-x-lightyellow ">
                        <img src="@/assets/images/icon/icon.png" alt="">
                    </div>
                    <h4
                        class="text-2xl font-bold text-black group-hover:text-white mb-2 capitalize transition-all duration-500 ">
                        Business
                    </h4>
                    <p
                        class="text-sm font-normal text-x-mediumgrey group-hover:text-white transition-all duration-500 leading-5 ">
                        Provides
                        faster
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
                </div>
            </router-link>

            <div
                class="relative w-[296px] h-[228px] mr-8 border border-solid border-gray-200 transition-all duration-500 col-span-12 hover:bg-x-blue group  xl:p-7 lg:col-span-3 md:col-span-6 ">
                <div class="inline-flex items-center justify-center mb-4 h-14 w-14 rounded-lg bg-x-lightyellow ">
                    <img src="@/assets/images/icon/icon-1.png" alt="">
                </div>
                <h4
                    class="text-2xl font-bold text-black group-hover:text-white mb-2 capitalize transition-all duration-500 ">
                    StartUp</h4>
                <p
                    class="text-sm font-normal text-x-mediumgrey group-hover:text-white transition-all duration-500 leading-5 ">
                    Lorem ipsum
                    dolor
                    sit
                    amet, consectetuer adipiscing elit. </p>
            </div>

            <div
                class="relative w-[296px] h-[228px] mr-8 border border-solid border-gray-200 transition-all duration-500 col-span-12  hover:bg-x-blue group xl:p-7 lg:col-span-3 md:col-span-6 ">
                <div class="inline-flex items-center justify-center mb-4 h-14 w-14 rounded-lg bg-x-lightyellow ">
                    <img src="@/assets/images/icon/icon-2.png" alt="">
                </div>
                <h4
                    class="text-2xl font-bold text-black group-hover:text-white mb-2 capitalize transition-all duration-500 ">
                    Economy</h4>
                <p
                    class="text-sm font-normal text-x-mediumgrey group-hover:text-white transition-all duration-500 leading-5 ">
                    Provides faster
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
            </div>

            <div
                class="relative w-[296px] h-[228px] border border-solid border-gray-200 transition-all duration-500 col-span-12  hover:bg-x-blue group xl:p-7 lg:col-span-3 md:col-span-6 ">
                <div class="inline-flex items-center justify-center mb-4 h-14 w-14 rounded-lg bg-x-lightyellow ">
                    <img src="@/assets/images/icon/icon-3.png" alt="">
                </div>
                <h4
                    class="text-2xl font-bold text-black group-hover:text-white mb-2 capitalize transition-all duration-500 ">
                    Technology</h4>
                <p
                    class="text-sm font-normal text-x-mediumgrey group-hover:text-white transition-all duration-500 leading-5 ">
                    Provides faster
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
            </div>
        </div>
    </div>
</template>