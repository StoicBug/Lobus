<template>
  <component :is="currentUser ? 'ParticulierHeader' : 'NavBar'" />
  <div class="container mx-auto py-10">
    <StepsHeader :step="2" />
    <div class="shadow-lg bg-landing-bg bg-no-repeat bg-cover bg-opacity-20">
      <div class="px-10">
        <h2 class="py-6 text-lg font-medium">Votre Voyage</h2>
        <p class="text-left text-gray pb-10">
          AllerSimple : Du {{ placeDeDepart }} à {{ placeDArrivee }} <br />
          Date De Depart: {{ dateDeDepart }} <br />
          Heure : {{ heureDeDepart }} <br />
          Passagers: {{ voyageurs }}
        </p>
      </div>
      <hr class="text-gray w-11/12 mx-auto" />
      <div class="px-10">
        <h2 class="py-6 text-lg font-medium">Bagages</h2>
        <div class="p-2">
          <div class="mb-8 grid grid-cols-6 gap-5">
            <div class="col-span-2">
              <label class="mr-2">Valise classique</label><br />
              <label class="switch">
                <input type="checkbox" v-model="checkedBagage" value="valiseClassique" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label class="mr-2">Grande valise</label><br />
              <label class="switch">
                <input type="checkbox" v-model="checkedBagage" value="grandeValise" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label class="mr-2">Bagage volumineux</label><br />
              <label class="switch">
                <input type="checkbox" v-model="checkedBagage" value="bagaeVolumineux" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label class="mr-2">Matérielle de surf</label><br />
              <label class="switch">
                <input type="checkbox" v-model="checkedBagage" value="materialSurf" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label class="mr-2">Matérielle de golf</label><br />
              <label class="switch">
                <input type="checkbox" v-model="checkedBagage" value="materialGolf" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label class="mr-2">Pas de bagage</label><br />
              <label class="switch">
                <input type="checkbox" v-model="checkedBagage" value="pasBagae" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr class="text-gray w-11/12 mx-auto" />
      <div class="px-10">
        <h2 class="py-6 text-lg font-medium">Motif du voyage</h2>
        <select v-model="motif" class="mb-5">
          <option value="deplacementSportif">Déplacement sportif</option>
          <option value="deplacementEntre" selected="selected">Déplacement d’entreprise</option>
          <option value="mariageCer">Mariage ou cérémonie</option>
          <option value="groupEtudiant">Group d’étudiants</option>
          <option value="groupTouristRes">Group de touristes résidant</option>
          <option value="groupTourNonRes">Group de touriste non résidant</option>
        </select>
      </div>
      <hr class="text-gray w-11/12 mx-auto" />
      <div class="px-10">
        <h2 class="py-6 text-lg font-medium">Les équipements</h2>
        <div class="p-2">
          <div class="grid grid-cols-6 gap-5">
            <div class="col-span-2">
              <label class="mr-2">Micro audio</label><br />
              <label class="switch">
                <input type="checkbox" v-model="equipements" value="microAudio" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label class="mr-2">Siege bébé</label><br />
              <label class="switch">
                <input type="checkbox" v-model="equipements" value="siegeBebe" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label class="mr-2">Glacié</label><br />
              <label class="switch">
                <input type="checkbox" v-model="equipements" value="glacie" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="px-5 py-10">
        <RouterLink v-if="currentUser" class="text-white bg-primary px-6 py-3 rounded-md mx-3" to="etape3" @click="handleSubmit">Etape Suivante</RouterLink>
        <RouterLink v-else class="text-white bg-primary px-6 py-3 rounded-md mx-3" to="etape2" @click="handleSubmit">Etape Suivante</RouterLink>
        <RouterLink class="underline mx-3 my-8 block sm:inline-block" to="/">Retour a l’etape precedante</RouterLink>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import StepsHeader from "../../components/AllerSimple/StepsHeader.vue";
import Footer from "../../components/Footer.vue";
import { useCircuit } from "../../stores/Circuit";
import { ref } from "vue";
import ParticulierHeader from "../../components/Particulier/ParticulierHeader.vue";
import { supabase } from "../../supabase.js";

export default {
  components: {NavBar, StepsHeader, Footer, ParticulierHeader},

  setup() {
    const circuit = useCircuit();

    const checkedBagage = ref([]);
    const motif = ref('');
    const equipements = ref([]);

    const placeDeDepart = circuit.placeDeDepart;
    const placeDArrivee = circuit.placeDArrivee;
    const dateDeDepart = circuit.dateDeDepart;
    const heureDeDepart = circuit.heureDeDepart;
    const voyageurs = circuit.voyageurs;

    const handleSubmit = () => {
      circuit.setEquipements(equipements.value);
      circuit.setMotif(motif.value);
      circuit.setBagages(checkedBagage.value);
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
      voyageurs,
    };
  },

  data() {
    return {
      currentUser: null,
    };
  },
  async created() {
    this.currentUser = await this.checkUser();
  },
  methods: {
    async checkUser() {
      const {data: {user}} = await supabase.auth.getUser();
      return user;
    },
  },
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
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #f46036;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f46036;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

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
  padding-left: 10px;
  padding-right: 10px;
  border-right: 1px solid #ddd;
}
</style>
