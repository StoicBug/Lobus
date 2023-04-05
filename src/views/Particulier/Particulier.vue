<template >
    <header aria-label="Page Header" class="bg-gray-50">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
            <div class="flex items-center sm:justify-between sm:gap-4">
                <div class="relative hidden sm:block">
                    <RouterLink to="/">
                        <img src="../../assets/Logo.png" alt="" class="w-36">
                    </RouterLink>
                </div>

                <div class="flex flex-1 items-center justify-between gap-8 sm:justify-end">
                    <div class="flex gap-4">
                        <RouterLink to="/" class="block shrink-0 rounded-lg p-2.5  sm:hidden">LOBUS</RouterLink>
                        <a href="#"
                            class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
                            <span class="sr-only">Academy</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path
                                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </a>

                        <a href="#"
                            class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
                            <span class="sr-only">Notifications</span>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg>
                        </a>
                    </div>

                    <button type="button" class="group flex shrink-0 items-center rounded-lg transition">
                        <span class="sr-only">Menu</span>
                        <img alt="Man"
                            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                            class="h-10 w-10 rounded-full object-cover" />

                        <p class="ml-2 hidden text-left text-xs sm:block">
                            <strong class="block font-medium">Eric Frusciante</strong>

                            <span class="text-gray-500"> eric@frusciante.com </span>
                        </p>

                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                            viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>

            <div class="mt-8">
                <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
                    Welcome Back, <span class="text-primary">Hazzard!</span>
                </h1>

                <p class="mt-1.5 text-sm text-gray-500">
                    You have 3 new offers. Keep
                    it up! 🚀
                </p>
            </div>
        </div>
    </header>
    <div class="mx-auto max-w-screen-xl px-4 py-8">
        <ul class="flex border-b border-gray-100">

            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <span class="absolute inset-x-0 -bottom-px h-px w-full bg-pink-600"></span>
                    <div class="flex items-center justify-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                        </svg>


                        <span class="text-sm font-medium text-gray-900"> Les Demandes </span>
                    </div>
                </a>
            </li>

            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <div class="flex items-center justify-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                        </svg>


                        <span class="text-sm font-medium text-gray-900"> Offers </span>
                    </div>
                </a>
            </li>

            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <div class="flex items-center justify-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>

                        <span class="text-sm font-medium text-gray-900"> Historic </span>
                    </div>
                </a>
            </li>

            <li class="flex-1">
                <a class="relative block p-4" href="">
                    <div class="flex items-center justify-center gap-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0 text-gray-500" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>

                        <span class="text-sm font-medium text-gray-900"> Settings </span>
                    </div>
                </a>
            </li>
        </ul>
        <h1 class="text-2xl font-semibold  mt-6 mb-4">Consult your offers</h1>
        <div class="overflow-x-auto">
            <ParticulierModal v-show="isOpen"/>
            <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
                <thead>
                    <tr>
                        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Type
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Date Effectue
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Transporteur
                        </th>
                        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Prix
                        </th>
                        <th class="px-4 py-2"></th>
                    </tr>
                </thead>

                <tbody class="divide-y divide-gray-200">
                    <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Aller Simple
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">CTM</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$120,000</td>
                        <td class="whitespace-nowrap px-4 py-2">
                            <a href="#" class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white" @click="openModal()">
                                View
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Aller Simple
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">04/11/1980</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">Farasha</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$100,000</td>
                        <td class="whitespace-nowrap px-4 py-2">
                            <a href="#" class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white">
                                View
                            </a>
                        </td>
                    </tr>

                    <tr>
                        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                            Circuit
                        </td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">24/05/1995</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">AHmed</td>
                        <td class="whitespace-nowrap px-4 py-2 text-gray-700">$20,000</td>
                        <td class="whitespace-nowrap px-4 py-2">
                            <a href="#" class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white ">
                                View
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div class="mt-80">
        <Footer/>
    </div>
</template>

<script>

import ParticulierModal from '../../components/Particulier/ParticulierModal.vue';
import Footer from '../../components/Footer.vue';

export default {
    components: {
        ParticulierModal,
        Footer
    },
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {
        openModal() {
            this.isOpen = true;
        },
    },
};
</script>