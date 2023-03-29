<template>
  <NavBar />
  <div class="container mx-auto py-10">
    <StepsHeader />
    <div class="bg-landing-bg bg-cover">
      <div class="shadow-lg">
        
        <div class="w-auto mx-auto text-center border-silver ">
          <div class="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
  <button
    class="inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:relative"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
      />
    </svg>

    Edit
  </button>

  <button
    class="inline-flex items-center gap-2 rounded-md bg-white px-4 py-2 text-sm text-blue-500 shadow-sm focus:relative"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="h-4 w-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
      />
    </svg>

    Delete
  </button>
</div>
          <button class="px-6 py-2 border-r-2 border-y-2 border-l-2 border-silver" :class="classObject()"
            @click="toggle()">
            Particulier 
          </button>
          <button class="px-6 py-2 border-silver text-silver border-r-2 border-y-2" :class="{
            'bg-primary': !checked,
            'text-white': !checked,
            'border-y-2': !checked,
            'text-silver': !checked,
          }" @click="toggle()">
            Société 
          </button>
        </div>
        <RouterView :checked="checked"></RouterView>

        <div class="px-5 py-10">
          <RouterLink class="text-white bg-primary px-6 py-3 rounded-md mx-3" to="etape2">Etape Suivante</RouterLink>
          <RouterLink class="underline mx-3" to="/etape1">Retour a l’etape precedante</RouterLink>
        </div>
        <p class="px-10 pb-10" @click="getpath">Vous n’avez pas de compte chez Groupito ? <RouterLink to="/etape2/4"
            class=" text-primary text-lg font-medium underline cursor-pointer">Indiquez vos coordonnées</RouterLink>
        </p>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import StepsHeader from "../../components/AllerSimple/StepsHeader.vue";
import Footer from "../../components/Footer.vue";
import Particulier from "../../components/AllerSimple/Particulier.vue";
import Societe from "../../components/AllerSimple/Societe.vue";
import ValiderEtContinue from "../../components/AllerSimple/ValiderEtContinue.vue";


import {useRoute} from 'vue-router'
import {computed} from 'vue'


export default {

  components: { NavBar, StepsHeader, Footer, Particulier, Societe, ValiderEtContinue },
  data() {
    return {
      checked: true,
    };
  },
  methods: {
    toggle() {
      //true id for Particulier, false for Société
      this.checked = !this.checked;
      console.log(this.checked);
    },
    classObject() {
      return {
        "bg-primary": this.checked,
        "text-white": this.checked,
        "border-y-2": this.checked,
        "text-silver": this.checked,
      };
    },
  },
  setup() {
    const path = useRoute()
    console.log(path.path)
    return {
      path: computed(() => path.path),
    }
  },
};
</script>

<style scoped></style>
