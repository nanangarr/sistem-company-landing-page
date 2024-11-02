<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout>
        <main id="content">
            <div class="flex flex-col px-[336px] pt-20">

                <!--HEADING-->
                <div class="flex flex-col text-center">
                    <p class="mb-3 font-black text-base leading-5 tracking-[3px] ">CONTACT US</p>
                    <p class="mb-6 font-sans font-bold text-5xl leading-[64px] tracking-[-2px] ">Let's Start a
                        Conversation</p>
                    <p class="mb-16 self-center w-[768px] font-regular text-base text-x-mediumgrey leading-7 ">Lorem
                        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim.</p>
                </div>

                <!--CONTACT US-->
                <div class="flex flex-row self-center bg-x-yellow mb-[29px] w-[768px] h-[240px]">
                    <div class="flex flex-col pl-20 w-[50%]">
                        <p class="pt-[45px] font-regular text-sm text-x-darkgrey opacity-[60%]">Working hours</p>
                        <hr
                            class="mt-4 w-[294px] border border-solid border-x-mediumgrey min-h-[1px] opacity-[0.32] max-md:max-w-full" />
                        <p class="mt-4 font-sans font-bold text-xl leading-8 text-x-darkgrey ">Monday To Friday</p>
                        <p class="font-sans font-bold text-xl leading-8 text-x-darkgrey ">9:00 AM to 8:00 PM </p>
                        <p class="font-regular text-base leading-7 text-x-darkgrey opacity-[60%] ">Our Support Team is
                            available
                            24/7 </p>
                    </div>
                    <div class="flex flex-col pl-[42px] w-[50%]">
                        <p class="pt-[45px] font-regular text-sm text-x-darkgrey opacity-[60%]">Contact Us</p>
                        <hr
                            class="mt-4 w-[294px] border border-solid border-x-mediumgrey min-h-[1px] opacity-[0.32] max-md:max-w-full" />
                        <p class="mt-4 font-sans font-bold text-xl leading-8 text-x-darkgrey ">020 7993 2905</p>
                        <p class="font-regular text-base leading-7 text-x-darkgrey opacity-[60%] ">hello@finsweet.com
                        </p>
                    </div>
                </div>

                <!--FORM-->
                <div class="flex flex-col self-center">
                    <form class="w-max mx-auto">
                        <div class="mb-5">
                            <input type="text" id="email"
                                class="w-[768px] h-14 border-1 border-x-mediumgrey border-opacity-[50%] text-x-black text-base focus:ring-blue-500 focus:border-blue-500 block placeholder:text-normal placeholder:text-x-black"
                                placeholder="Full Name" required />
                        </div>

                        <div class="mb-5">
                            <input type="email" id="email"
                                class="w-[768px] h-14 border-1 border-x-mediumgrey border-opacity-[50%] text-x-black text-base focus:ring-blue-500 focus:border-blue-500 block placeholder:text-normal placeholder:text-x-black"
                                placeholder="Your Email" required />
                        </div>

                        <div class="flex flex-col-2">
                            <div class="mb-5 mr-4">
                                <select id="countries" type="select"
                                    class="w-[376px] h-14 border border-x-mediumgrey border-opacity-[50%] text-x-black text-base focus:ring-blue-500 focus:border-blue-500 block"
                                    placeholder="Province">
                                    <option disabled selected hidden class="text-sm text-x-mediumgrey">Province</option>
                                    <!-- Label dalam kotak -->
                                    <option>Jawa Tengah</option>
                                    <option>Jawa Timur</option>
                                    <option>Jawa Barat</option>
                                    <option>papua</option>
                                </select>
                            </div>

                            <div class="mb-5">
                                <select id="countries"
                                    class="w-[376px] h-14 border border-x-mediumgrey border-opacity-[50%] text-x-black text-base focus:ring-blue-500 focus:border-blue-500 block"
                                    placeholder="Province">
                                    <option disabled selected hidden class="text-x-black">City</option>
                                    <!-- Label dalam kotak -->
                                    <option>Sragen</option>
                                    <option>Surabaya</option>
                                    <option>Bandung</option>
                                    <option>Papua Pegunungan</option>
                                </select>
                            </div>
                        </div>

                        <div class="mb-5">
                            <textarea type="Message" id="email"
                                class="w-[768px] h-[144px] border-1 border-x-mediumgrey border-opacity-[50%] text-x-black text-base focus:ring-blue-500 focus:border-blue-500 block placeholder:text-normal placeholder:text-x-black"
                                placeholder="Full Name" required></textarea>
                        </div>
                    </form>

                    <button type='button'
                        class='py-2.5 px-12 text-2xl h-16 bg-x-blue font-bold font-sans text-center duration-500 hover:bg-blue-500 max-md:px-5'>Send Massage</button>
                </div>
            </div>
        </main>
    </MainLayout>
</template>