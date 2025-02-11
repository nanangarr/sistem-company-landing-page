<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'

const privacyContent = {
    mainTitle: 'Privacy Policy',
    date: 'Last Updated on 27th January 2022',
    sections: [
        {
            title: 'Lorem ipsum dolor sit amet',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...'
        },
        {
            title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
            content: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec...',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec...'
            ]
        }
    ]
};
</script>

<template>
    <MainLayout>
        <section class="flex flex-col">
            <!-- Header Section -->
            <div class="w-full min-h-[200px] md:h-[256px] bg-x-lavender px-4 md:px-0">
                <div class="flex flex-col text-center h-full justify-center">
                    <h1
                        class="text-3xl md:text-5xl font-sans font-bold leading-tight md:leading-[64px] tracking-[-2px]">
                        {{ privacyContent.mainTitle }}
                    </h1>
                    <p class="mt-2 md:mt-4 text-sm md:text-base text-bold opacity-60">
                        {{ privacyContent.date }}
                    </p>
                </div>
            </div>

            <!-- Content Section -->
            <div class="flex flex-col mt-12 md:mt-32 px-4 md:px-0">
                <div class="w-full md:w-[768px] mx-auto">
                    <!-- Main Section -->
                    <div v-for="(section, index) in privacyContent.sections" :key="index" class="mb-8 md:mb-12">
                        <h2
                            class="font-sans font-bold text-2xl md:text-5xl leading-tight md:leading-[64px] tracking-[-2px] mb-4 md:mb-8">
                            {{ section.title }}
                        </h2>

                        <!-- Handle both single string and array content -->
                        <template v-if="Array.isArray(section.content)">
                            <p v-for="(paragraph, pIndex) in section.content" :key="pIndex"
                                class="font-regular text-base text-x-mediumgrey leading-7 mb-4">
                                {{ paragraph }}
                            </p>
                        </template>
                        <template v-else>
                            <p class="font-regular text-base text-x-mediumgrey leading-7">
                                {{ section.content }}
                            </p>
                        </template>
                    </div>
                </div>
            </div>
        </section>
    </MainLayout>
</template>
