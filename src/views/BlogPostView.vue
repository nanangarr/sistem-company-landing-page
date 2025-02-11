<script setup lang="ts">
import SubscribeContent from '@/components/SubscribeContent.vue';
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout>

        <!--HEADER-->
        <div class="flex px-4 md:px-8 lg:px-[336px]">
            <div class="flex flex-col mt-8 md:mt-16 lg:mt-32 w-full">
                <div class="flex gap-4 items-start self-start">
                    <img src="/src/assets/images/isian/orang1.png" alt=""
                        class="object-contain w-10 h-10 md:w-12 md:h-12 rounded-full aspect-square">
                    <div class="mt-1">
                        <h2 class="text-x-yellow text-2xl md:text-3xl font-bold tracking-tighter leading-none">Andrew
                            Jonson</h2>
                        <h6 class="text-sm md:text-base text-x-mediumgrey leading-7">Posted on 27th January 2022</h6>
                    </div>

                </div>

                <h2
                    class="mt-6 md:mt-9 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gray-800 leading-tight md:leading-[64px] w-full lg:w-[768px]">
                    Step-by-step guide to choosing great font pairs</h2>

                <div class="flex flex-row mt-6 md:mt-[34px]">
                    <img src="/src/assets/images/icon/icon-1.png" alt="" class="object-contain h-6 md:h-8">
                    <span class="font-sans font-bold text-xl md:text-2xl ml-2">Startup</span>
                </div>
            </div>
        </div>

        <!--GAMBAR POSTINGAN-->
        <div class="flex px-4 md:px-8 lg:px-20">
            <img src="/src/assets/images/isian/blog-post-6.png"
                class="object-cover w-full mt-8 md:mt-12 lg:mt-16 aspect-[16/9] md:aspect-[2.2]" />
        </div>

        <!--POSTINGAN BERITA-->
        <main id="postingan">
            <div class="flex flex-col px-4 md:px-8 lg:px-[299px] mt-8 md:mt-12 lg:mt-16">
                <div class="flex flex-col mb-8 md:mb-12 ">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold font-sans leading-tight w-full lg:w-[720px]">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod.</h2>
                    <span class="text-sm md:text-base font-regular mt-4 text-x-mediumgrey">Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
                        sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                        montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
                        Risus
                        in hendrerit gravida rutrum quisque non.</span>
                </div>
                <div class="flex flex-col mb-8 md:mb-12 ">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold font-sans leading-tight w-full lg:w-[720px]">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod.</h2>
                    <span class="text-sm md:text-base font-regular mt-4 text-x-mediumgrey">Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
                        sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                        montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
                        Risus
                        in hendrerit gravida rutrum quisque non.</span>
                    <span class="text-sm md:text-base font-regular mt-6 text-x-mediumgrey">Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
                        sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                        montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
                        Risus
                        in hendrerit gravida rutrum quisque non.</span>

                    <ul class="ml-4 mt-6 font-sans font-bold text-xl" style="list-style-type:disc">
                        <li class="text-xl">Lorem ipsum dolor sit amet</li>
                        <li class="text-xl">Non blandit massa enim nec scelerisque</li>
                        <li class="text-xl">Neque egestas congue quisque egestas</li>
                    </ul>

                    <span class="text-sm md:text-base font-regular mt-6 text-x-mediumgrey">Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
                        sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                        montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
                        Risus
                        in hendrerit gravida rutrum quisque non.</span>
                </div>
                <div class="flex flex-col mb-8 md:mb-12 ">
                    <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold font-sans leading-tight w-full lg:w-[720px]">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit, sed do eiusmod.</h2>
                    <span class="text-sm md:text-base font-regular mt-4 text-x-mediumgrey">Lorem ipsum dolor sit amet,
                        consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam
                        sem. At risus viverra adipiscing at in tellus. Sociis natoque penatibus et magnis dis parturient
                        montes. Ridiculus mus mauris vitae ultricies leo. Neque egestas congue quisque egestas diam.
                        Risus
                        in hendrerit gravida rutrum quisque non.</span>
                </div>
            </div>
        </main>

        <!--ROAD TEXT-->
        <main id="road next">
            <div class="flex flex-col px-4 md:px-8 lg:px-20 pt-8 md:pt-12 lg:pt-20">
                <h1
                    class="self-start font-sans font-bold text-2xl md:text-3xl lg:text-4xl leading-tight tracking-tighter text-x-black">
                    What to read next</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12 lg:mt-16">
                    <div class="w-full">
                        <a href="#">
                            <img class="w-full aspect-[4/3] object-cover" src="/src/assets/images/isian/blog-post-1.png"
                                alt="" />
                        </a>
                        <div class="flex flex-col mt-4">
                            <p class="text-sm">
                                <span class="text-x-darkgrey">By <span class="text-x-yellow">James West</span> | Aug 23,
                                    2021
                                </span>
                            </p>
                            <h2 class="mt-4 text-xl md:text-2xl font-bold font-sans">A UX Case Study Creating a Studious
                                Environment for
                                Students: </h2>
                            <p class="mt-4 text-sm md:text-base text-x-black opacity-70">Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>

                    <div class="w-full">
                        <a href="#">
                            <img class="w-full aspect-[4/3] object-cover" src="/src/assets/images/isian/blog-post-2.png"
                                alt="" />
                        </a>
                        <div class="flex flex-col mt-4">
                            <p class="text-sm">
                                <span class="text-x-darkgrey">By <span class="text-x-yellow">James West</span> | Aug 23,
                                    2021
                                </span>
                            </p>
                            <h2 class="mt-4 text-xl md:text-2xl font-bold font-sans">A UX Case Study Creating a Studious
                                Environment for
                                Students: </h2>
                            <p class="mt-4 text-sm md:text-base text-x-black opacity-70">Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>

                    <div class="w-full">
                        <a href="#">
                            <img class="w-full aspect-[4/3] object-cover" src="/src/assets/images/isian/blog-post-3.png"
                                alt="" />
                        </a>
                        <div class="flex flex-col mt-4">
                            <p class="text-sm">
                                <span class="text-x-darkgrey">By <span class="text-x-yellow">James West</span> | Aug 23,
                                    2021
                                </span>
                            </p>
                            <h2 class="mt-4 text-xl md:text-2xl font-bold font-sans">A UX Case Study Creating a Studious
                                Environment for
                                Students: </h2>
                            <p class="mt-4 text-sm md:text-base text-x-black opacity-70">Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident.</p>
                        </div>
                    </div>
                </div>

                <hr
                    class="mt-8 w-full border border-solid border-x-mediumgrey min-h-[1px] opacity-[0.32] max-md:max-w-full" />
            </div>
        </main>

        <!--SUBSCRIBE-->
        <div class="flex px-4 md:px-8 lg:px-16 my-8 md:my-12 lg:mb-20">
            <SubscribeContent />
        </div>
    </MainLayout>
</template>
