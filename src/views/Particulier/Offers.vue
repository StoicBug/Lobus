<template>
  <ParticulierHeader/>
  <div class="mx-auto max-w-screen-xl px-4 py-8">
    <section class="bg-white">
      <div class="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        <div class="mx-auto max-w-3xl text-center">
          <h2 class="text-3xl font-bold text-gray-900 sm:text-4xl">
            View Your Personalized Travel Offers with Lobus
          </h2>
          <p class="mt-4 text-gray-500 sm:text-xl">
            Simply review the offers in the table below and choose the one that best suits your preferences and budget.
            With Lobus, finding reliable and affordable transportation for your trip has never been easier.
            Start comparing offers today and travel with confidence, knowing you're getting the best deal possible.
          </p>
        </div>
        <div class="mt-8 sm:mt-12">
          <dl class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Best Offer</dt>
              <dd class="text-4xl font-extrabold text-primary md:text-5xl">$4.8m</dd>
            </div>
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Number of offers</dt>
              <dd class="text-4xl font-extrabold text-primary md:text-5xl">24</dd>
            </div>
            <div class="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
              <dt class="order-last text-lg font-medium text-gray-500">Number of offers</dt>
              <dd class="text-4xl font-extrabold text-primary md:text-5xl">86</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <h1 class="py-4 font-semibold text-2xl">Les Offres</h1>
    <table class="min-w-full divide-y-2 divide-gray-200 text-sm">
      <thead>
      <tr>
        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Type</th>
        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Date Effectue</th>
        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Transporteur</th>
        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Prix</th>
        <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">Status</th>
        <th class="px-4 py-2"></th>
      </tr>
      </thead>
      <tbody class="divide-y divide-gray-200">
      <tr v-for="trip in trips" :key="trip.tripid">
        <td class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{{ trip.triptype }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ trip.dateeffect }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ trip.drivername }}</td>
        <td class="whitespace-nowrap px-4 py-2 text-gray-700">{{ trip.price }}</td>
        <td class="whitespace-nowrap px-4 py-2" :class="{'text-red-600': trip.status === 'Canceled', 'text-green-600': trip.status === 'Done'}">{{ trip.status }}</td>
        <td class="whitespace-nowrap px-4 py-2">
          <a href="#" @click.prevent="updateTripStatus(trip.tripid, 'Done')"
             :class="{'cursor-not-allowed opacity-50': isActionDisabled(trip.status)}"
             class="inline-block rounded bg-green-600 px-4 py-2 text-xs font-medium text-white mx-2"
             :disabled="isActionDisabled(trip.status)">Accept</a>
          <a href="#" @click.prevent="updateTripStatus(trip.tripid, 'Canceled')"
             :class="{'cursor-not-allowed opacity-50': isActionDisabled(trip.status)}"
             class="inline-block rounded bg-red-600 px-4 py-2 text-xs font-medium text-white"
             :disabled="isActionDisabled(trip.status)">Refuse</a>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
  <div class="mt-80">
    <Footer/>
  </div>
</template>

<script>
import ParticulierHeader from '../../components/Particulier/ParticulierHeader.vue';
import Footer from '../../components/Footer.vue';
import { onMounted, ref } from 'vue';
import { supabase } from '../../supabase.js';

export default {
  name: "Offers",
  components: {
    ParticulierHeader,
    Footer
  },
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
            .eq('userid', userId);

        if (error) {
          console.error('Error fetching trips:', error.message);
          return;
        }
        trips.value = data;
      } catch (error) {
        console.error('Error fetching trips:', error.message);
      }
    };

    const updateTripStatus = async (tripid, status) => {
      try {
        const { data, error } = await supabase
            .from('trips')
            .update({ status: status })
            .eq('tripid', tripid);

        if (error) {
          console.error('Error updating trip status:', error.message);
          return;
        }
        // Update the local state to reflect the change
        const trip = trips.value.find(t => t.tripid === tripid);
        if (trip) {
          trip.status = status;
        }
      } catch (error) {
        console.error('Error updating trip status:', error.message);
      }
    };

    const isActionDisabled = (status) => {
      return status === 'Done' || status === 'Canceled';
    };

    onMounted(fetchTrips);

    return {
      trips,
      updateTripStatus,
      isActionDisabled
    };
  },

}
</script>
