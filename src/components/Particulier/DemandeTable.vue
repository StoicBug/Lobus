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
      <!-- Loop through offers and display them -->
      <tr v-for="offer in offers" :key="offer.offerid">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {{ offer.tripType }}
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ offer.dateeffect }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ offer.drivername }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ offer.price }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-red-600 font-medium">{{ offer.status }}</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a href="#" class="inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white">
            View Details
          </a>
          <router-link :to="'/particulier/offers/' + offer.offerId" class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white mx-2">
            Consult Offer
          </router-link>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { supabase } from '../../supabase.js';

export default {
  setup() {
    const offers = ref([]);

    const fetchOffers = async () => {
      try {
        const { data, error } = await supabase
            .from('offers')
            .select(`
                        offerid,
                        dateeffect,
                        price,
                        status

                    `);
        if (error) {
          console.error('Error fetching offers:', error.message);
          return;
        }
        offers.value = data;
      } catch (error) {
        console.error('Error fetching offers:', error.message);
      }
    };

    onMounted(fetchOffers);

    return {
      offers
    };
  },
}
</script>
