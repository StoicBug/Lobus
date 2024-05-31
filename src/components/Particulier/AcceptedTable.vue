<template>
  <div class="overflow-x-auto">
    <h1 class="text-2xl font-semibold  mt-6 mb-4">Consult your trips</h1>
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
      <!-- Loop through trips and display them -->
      <tr v-for="trip in trips" :key="trip.tripid">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {{ trip.triptype }}
        </td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ trip.dateeffect }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ trip.drivername }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ trip.price }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-green-600 font-medium">{{ trip.status }}</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a href="#" class="inline-block rounded bg-secondary px-4 py-2 text-xs font-medium text-white">
            View Details
          </a>
          <router-link to='/particulier/offers/' class="inline-block rounded bg-primary px-4 py-2 text-xs font-medium text-white mx-2">
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
    const trips = ref([]);

    const checkUser = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        return user;
      } catch (error) {
        console.error('Error fetching user:', error.message);
        throw error;
      }
    };

    const fetchTrips = async () => {
      try {
        const currentUser = await checkUser();
        const userId = currentUser.id;

        const { data, error } = await supabase
            .from('trips')
            .select(`
            tripid,
            triptype,
            status,
            price,
            drivername,
            dateeffect
          `)
            .eq('userid', userId)
            .eq('status', 'Done');

        if (error) {
          console.error('Error fetching trips:', error.message);
          return;
        }
        trips.value = data;
      } catch (error) {
        console.error('Error fetching trips:', error.message);
      }
    };

    onMounted(fetchTrips);

    return {
      trips
    };
  },
};
</script>
