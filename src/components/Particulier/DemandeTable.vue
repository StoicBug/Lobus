<template>
    <div class="overflow-x-auto">
        <h1 class="text-2xl font-semibold  mt-6 mb-4">Consult your offers</h1>
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
                        <a href="#" class="inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white">
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
                        <a href="#" class="inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white">
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
                        <a href="#" class="inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white">
                            View Details
                        </a>
                        <a href="#" class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white mx-2">
                            <RouterLink to="/particulier/offers">Consult Offers</RouterLink>
                        </a>
                    </td>
                </tr>
            </tbody>
        </table>
</div></template>