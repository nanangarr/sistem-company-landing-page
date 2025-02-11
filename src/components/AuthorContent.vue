<script setup lang="ts">
import SosmedContent from '@/components/SosmedContent.vue';
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 px-4 lg:px-0 max-w-7xl mx-auto">
        <router-link to="/authorview"
            class="flex flex-col items-center p-6 lg:px-12 lg:py-10 bg-x-lightgrey hover:bg-x-lightyellow transition-colors">
            <img src="/src/assets/images/isian/pexels-vazhnik-7562313.jpg" alt="Profile photo of Floyd Miles"
                class="w-24 lg:w-32 rounded-full aspect-square object-cover" />
            <h2
                class="mt-4 lg:mt-5 text-2xl lg:text-3xl font-bold leading-tight tracking-[-1px] text-black text-center">
                Floyd Miles
            </h2>
            <p class="text-[11px] leading-5 text-center text-x-mediumgrey mt-2">
                Content Writer @Company
            </p>
            <div class="flex justify-center mt-3">
                <SosmedContent />
            </div>
        </router-link>

        <div
            class="flex flex-col items-center p-6 lg:px-12 lg:py-10 bg-x-lightgrey hover:bg-x-lightyellow transition-colors">
            <img src="/src/assets/images/isian/orang2.png" alt="Profile photo of Dianna Russe"
                class="w-24 lg:w-32 rounded-full aspect-square object-cover" />
            <h2
                class="mt-4 lg:mt-5 text-2xl lg:text-3xl font-bold leading-tight tracking-[-1px] text-black text-center">
                Dianna Russe
            </h2>
            <p class="text-[11px] leading-5 text-center text-x-mediumgrey mt-2">
                Content Writer @Company
            </p>
            <div class="flex justify-center mt-3">
                <SosmedContent />
            </div>
        </div>

        <div
            class="flex flex-col items-center p-6 lg:px-12 lg:py-10 bg-x-lightgrey hover:bg-x-lightyellow transition-colors">
            <img src="/src/assets/images/isian/orang3.png" alt="Profile photo of Jenny Wilson"
                class="w-24 lg:w-32 rounded-full aspect-square object-cover" />
            <h2
                class="mt-4 lg:mt-5 text-2xl lg:text-3xl font-bold leading-tight tracking-[-1px] text-black text-center">
                Jenny Wilson
            </h2>
            <p class="text-[11px] leading-5 text-center text-x-mediumgrey mt-2">
                Content Writer @Company
            </p>
            <div class="flex justify-center mt-3">
                <SosmedContent />
            </div>
        </div>

        <div
            class="flex flex-col items-center p-6 lg:px-12 lg:py-10 bg-x-lightgrey hover:bg-x-lightyellow transition-colors">
            <img src="/src/assets/images/isian/orang4.png" alt="Profile photo of Dianna Russe"
                class="w-24 lg:w-32 rounded-full aspect-square object-cover" />
            <h2
                class="mt-4 lg:mt-5 text-2xl lg:text-3xl font-bold leading-tight tracking-[-1px] text-black text-center">
                Dianna Russe
            </h2>
            <p class="text-[11px] leading-5 text-center text-x-mediumgrey mt-2">
                Content Writer @Company
            </p>
            <div class="flex justify-center mt-3">
                <SosmedContent />
            </div>
        </div>
    </div>
</template>