<template >
    <ParticulierHeader/>
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
                        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                            Status
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
                        <td class="whitespace-nowrap px-4 py-2 text-red-600 font-medium">Canceled</td>
                        <td class="whitespace-nowrap px-4 py-2">
                            <a href="#" class="inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white" @click="openModal()">
                                View Details
                            </a>
                            <a href="#" class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white mx-2">
                                <RouterLink to="/particulier/offers">Consult Offers</RouterLink>
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
                        <td class="whitespace-nowrap px-4 py-2 text-red-600 font-medium">Canceled</td>
                        <td class="whitespace-nowrap px-4 py-2">
                            <a href="#" class="inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white" @click="openModal()">
                                View Details
                            </a>
                            <a href="#" class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white mx-2">
                                <RouterLink to="/particulier/offers">Consult Offers</RouterLink>
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
                        <td class="whitespace-nowrap px-4 py-2 text-red-600 font-medium">Canceled</td>
                        <td class="whitespace-nowrap px-4 py-2">
                            <a href="#" class="inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white" @click="openModal()">
                                View Details
                            </a>
                            <a href="#" class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white mx-2">
                                <RouterLink to="/particulier/offers">Consult Offers</RouterLink>
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
import ParticulierHeader from '../../components/Particulier/ParticulierHeader.vue';

export default {
    components: {
        ParticulierModal,
        Footer,
        ParticulierHeader
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