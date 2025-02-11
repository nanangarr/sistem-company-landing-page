<script setup lang="ts">
import SubscribeContent from '@/components/SubscribeContent.vue';
import MainLayout from '@/layouts/MainLayout.vue'

const contentSections = [
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
        hasExtra: false
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
        extraContent: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem.",
        listItems: [
            "Lorem ipsum dolor sit amet",
            "Non blandit massa enim nec scelerisque",
            "Neque egestas congue quisque egestas"
        ],
        hasExtra: true
    },
    {
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam. Risus in hendrerit gravida rutrum quisque non.",
        hasExtra: false
    }
];

const recommendedPosts = [
    {
        image: "/src/assets/images/isian/blog-post-1.png",
        author: "James West",
        date: "Aug 23, 2021",
        title: "A UX Case Study Creating a Studious Environment for Students",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        image: "/src/assets/images/isian/blog-post-2.png",
        author: "James West",
        date: "Aug 23, 2021",
        title: "A UX Case Study Creating a Studious Environment for Students",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    },
    {
        image: "/src/assets/images/isian/blog-post-3.png",
        author: "James West",
        date: "Aug 23, 2021",
        title: "A UX Case Study Creating a Studious Environment for Students",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident."
    }
];
</script>

<template>
    <MainLayout>
        <!--HEADER-->
        <div class="flex flex-col px-4 sm:px-8 lg:px-[336px] w-full">
            <div class="flex flex-col mt-8 lg:mt-32 w-full">
                <div class="flex gap-4 items-start">
                    <img src="@/assets/images/isian/orang1.png" alt=""
                        class="object-contain w-10 h-10 lg:w-12 lg:h-12 rounded-full">
                    <div>
                        <h2 class="text-x-yellow text-xl lg:text-3xl font-bold tracking-tighter">Andrew Jonson</h2>
                        <h6 class="text-sm lg:text-base text-x-mediumgrey">Posted on 27th January 2022</h6>
                    </div>
                </div>

                <h2
                    class="mt-6 lg:mt-9 text-3xl lg:text-5xl font-bold tracking-tighter text-gray-800 leading-tight lg:leading-[64px]">
                    Step-by-step guide to choosing great font pairs
                </h2>

                <div class="flex items-center mt-6 lg:mt-[34px]">
                    <img src="@/assets/images/icon/icon-1.png" alt="" class="w-6 h-6 lg:w-auto lg:h-auto">
                    <span class="font-sans font-bold text-xl lg:text-2xl ml-2">Startup</span>
                </div>
            </div>
        </div>

        <!--GAMBAR POSTINGAN-->
        <div class="px-4 sm:px-8 lg:px-20 mt-8 lg:mt-16">
            <img src="@/assets/images/isian/blog-post-6.png" class="w-full object-cover aspect-[16/9] rounded-lg" />
        </div>

        <!--POSTINGAN BERITA-->
        <main class="px-4 sm:px-8 lg:px-[299px] mt-8 lg:mt-16">
            <div v-for="(section, index) in contentSections" :key="index" class="mb-8 lg:mb-12">
                <h2 class="text-2xl lg:text-4xl font-bold font-sans leading-tight mb-4">{{ section.title }}</h2>
                <p class="text-base text-x-mediumgrey">{{ section.content }}</p>

                <template v-if="section.hasExtra">
                    <p class="text-base text-x-mediumgrey mt-6">{{ section.extraContent }}</p>
                    <ul class="ml-4 mt-6 space-y-2" v-if="section.listItems">
                        <li v-for="(item, i) in section.listItems" :key="i"
                            class="text-lg lg:text-xl font-bold list-disc">
                            {{ item }}
                        </li>
                    </ul>
                </template>
            </div>
        </main>

        <!--RECOMMENDED POSTS-->
        <section class="px-4 sm:px-8 lg:px-20 pt-8 lg:pt-20">
            <h1 class="text-2xl lg:text-4xl font-bold tracking-tighter text-x-black mb-8 lg:mb-16">
                What to read next
            </h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <article v-for="(post, index) in recommendedPosts" :key="index" class="flex flex-col h-full">
                    <img :src="post.image" :alt="post.title" class="w-full aspect-[1.27] object-cover rounded-lg">
                    <div class="flex flex-col mt-4 flex-grow">
                        <p class="text-sm text-x-darkgrey">
                            By <span class="text-x-yellow">{{ post.author }}</span> | {{ post.date }}
                        </p>
                        <h2 class="text-xl lg:text-2xl font-bold font-sans mt-4">{{ post.title }}</h2>
                        <p class="mt-4 text-base text-x-black/70">{{ post.description }}</p>
                    </div>
                </article>
            </div>

            <hr class="mt-8 w-full border border-solid border-x-mediumgrey opacity-30" />
        </section>

        <!--SUBSCRIBE-->
        <div class="px-4 sm:px-8 lg:px-16 my-10 lg:my-20">
            <SubscribeContent />
        </div>
    </MainLayout>
</template>
