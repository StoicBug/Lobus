<template>
  <component :is="currentUser ? 'ParticulierHeader' : 'NavBar'" />
  <div class="container mx-auto py-10">
    <StepsHeader :step="4" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <div class="rounded-lg bg-white shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Place de Départ</h3>
        <p>{{ placeDeDepart }}</p>
      </div>
      <div class="rounded-lg bg-white shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Place d'Arrivée</h3>
        <p>{{ placeDArrivee }}</p>
      </div>
      <div class="rounded-lg bg-white shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Date de Départ</h3>
        <p>{{ dateDeDepart }}</p>
      </div>
      <div class="rounded-lg bg-white shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Heure de Départ</h3>
        <p>{{ heureDeDepart }}</p>
      </div>
      <div class="rounded-lg bg-white shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Voyageurs</h3>
        <p>{{ voyageurs }}</p>
      </div>
      <div class="rounded-lg bg-white shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Bagages</h3>
        <p>{{ checkedBagage.join(', ') }}</p>
      </div>
      <div class="rounded-lg bg-white shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Motif du Voyage</h3>
        <p>{{ motif }}</p>
      </div>
      <div class="rounded-lg bg-white shadow-md p-6">
        <h3 class="text-lg font-semibold mb-2">Équipements</h3>
        <p>{{ equipements.join(', ') }}</p>
      </div>
    </div>
    <div class="flex justify-center mt-6">
      <button @click="confirmTrip" class="bg-primary text-white px-6 py-3 rounded-md">
        Confirmer le voyage
      </button>
    </div>
  </div>
  <Footer />
</template>


<script>
import NavBar from "../../components/NavBar.vue";
import StepsHeader from "../../components/AllerSimple/StepsHeader.vue";
import Footer from "../../components/Footer.vue";
import { useAllerSimple } from "../../stores/AllerSimple"
import { ref } from "vue";
import ParticulierHeader from "../../components/Particulier/ParticulierHeader.vue";
import {supabase} from "../../supabase.js";

export default {

  components: {NavBar, StepsHeader, Footer, ParticulierHeader,},

  setup() {

    const allerSimple = useAllerSimple();

    const placeDeDepart = allerSimple.placeDeDepart
    const placeDArrivee = allerSimple.placeDArrivee
    const dateDeDepart = allerSimple.dateDeDepart
    const heureDeDepart = allerSimple.heureDeDepart
    const voyageurs = allerSimple.voyageurs
    const equipements = allerSimple.equipements;
    const checkedBagage = allerSimple.bagages;
    const motif = allerSimple.motif;


    const handleSubmit = () => {
      allerSimple.setEquipements(equipements.value);
      allerSimple.setMotif(motif.value);
      allerSimple.setBagages(checkedBagage.value);
    };

    return {
      handleSubmit,
      checkedBagage,
      motif,
      equipements,
      placeDeDepart,
      placeDArrivee,
      dateDeDepart,
      heureDeDepart,
      voyageurs
    };
  },

  data() {
    return {
      currentUser: null,
    }
  },
  async created() {
    this.currentUser = await this.checkUser();
  },
  methods: {
    async checkUser() {
      const {data: {user}} = await supabase.auth.getUser();
      return user;
    },

    async confirmTrip() {
      const tripData = {
        tripid : '6',
        triptype: 'One-Way', // You need to set this based on your application logic
        baggage: this.checkedBagage.join(', '), // Convert checkedBagage to a string
        reasonfortravel: this.motif,
        equipment: this.equipements.join(', '), // Convert equipements to a string
        status: 'pending', // Set default status as pending or handle based on your logic
        userid: '1', // Replace with actual user id
        driverid: '1' // You may set this based on your application logic
      };

      try {
        const {data, error} = await supabase.from('trips').insert([tripData]);

        if (error) {
          console.error('Error inserting trip data:', error.message);
          // Handle error
        } else {
          console.log('Trip data inserted successfully:', data);
          // go to offers page
          window.location.href = '/particulier';
          // Redirect to success page or perform any other action
        }
      } catch (error) {
        console.error('Error inserting trip data:', error.message);
        // Handle error
      }
    },

  }
};

</script>

<style scoped>
.switch {
  position: relative;
  display: inline-block;
  width: 53px;
  height: 27px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #394f63;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #f46036;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f46036;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

.mx-input {
  padding-left: 30px;
  padding-right: 10px;
}

.mx-icon-calendar {
  left: 8px;
}
</style>
