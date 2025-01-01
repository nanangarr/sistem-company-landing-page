<script setup lang="ts">
import SosmedContent from '@/components/SosmedContent.vue';

</script>

<template>
    <div class="flex flex-row-4 leading-none justify-center mx-auto">
        <router-link to="/authorview" class="flex flex-col self-center px-12 py-10 mr-8 w-[253px] bg-x-lightgrey hover:bg-x-lightyellow">
            <img src="/src/assets/images/isian/pexels-vazhnik-7562313.jpg" alt="Profile photo of Floyd Miles"
                class="object-cover w-32 self-center rounded-full aspect-square" />
            <h2 class="mt-5 text-3xl w-max font-bold leading-10 tracking-[-1px] text-black">
                Floyd Miles
            </h2>
            <p class="self-stretch text-[11px] leading-5 text-center text-x-mediumgrey">
                Content Writer @Company
            </p>
            <div class="flex flex-row justify-center">
                <SosmedContent/>
            </div>
        </router-link>

        <div class="flex flex-col self-center px-12 py-10 mr-8 w-[253px] bg-x-lightgrey hover:bg-x-lightyellow">
            <img src="/src/assets/images/isian/orang2.png" alt="Profile photo of Floyd Miles"
                class="object-cover w-32 self-center rounded-full aspect-square" />
            <h2 class="mt-5 text-3xl w-max font-bold leading-10 tracking-[-1px] text-black">
                Dianna Russe
            </h2>
            <p class="self-stretch text-[11px] leading-5 text-center text-x-mediumgrey">
                Content Writer @Company
            </p>
            <div class="flex flex-row justify-center">
                <SosmedContent/>
            </div>
        </div>

        <div class="flex flex-col self-center px-12 py-10 mr-8 w-[253px] bg-x-lightgrey hover:bg-x-lightyellow">
            <img src="/src/assets/images/isian/orang3.png" alt="Profile photo of Floyd Miles"
                class="object-cover w-32 self-center rounded-full aspect-square" />
            <h2 class="mt-5 text-3xl w-max font-bold leading-10 tracking-[-1px] text-black">
                Jenny Wilson
            </h2>
            <p class="self-stretch text-[11px] leading-5 text-center text-x-mediumgrey">
                Content Writer @Company
            </p>
            <div class="flex flex-row justify-center">
                <SosmedContent/>
            </div>
        </div>

        <div class="flex flex-col self-center px-12 py-10 w-[253px] bg-x-lightgrey hover:bg-x-lightyellow">
            <img src="/src/assets/images/isian/orang4.png" alt="Profile photo of Floyd Miles"
                class="object-cover w-32 self-center rounded-full aspect-square" />
            <h2 class="mt-5 text-3xl w-max font-bold leading-10 tracking-[-1px] text-black">
                Dianna Russe
            </h2>
            <p class="self-stretch text-[11px] leading-5 text-center text-x-mediumgrey">
                Content Writer @Company
            </p>
            <div class="flex flex-row justify-center">
                <SosmedContent/>
            </div>
        </div>
    </div>
</template>