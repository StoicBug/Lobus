<template>
    <NavBar />
    <div class="container mx-auto py-10">
      <StepsHeader />
      <div class="bg-landing-bg bg-cover">
        <div class="shadow-lg">
          <div class="w-auto mx-auto text-center border-silver">
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
            <RouterLink class="text-white bg-primary px-6 py-3 rounded-md mx-3" to="/circuit/etape2">Etape Suivante</RouterLink>
            <RouterLink class="underline mx-3" to="/circuit/etape1">Retour a l’etape precedante</RouterLink>
          </div>
          <p class="px-10 pb-10" @click="getpath">Vous n’avez pas de compte chez Groupito ? <RouterLink to="/circuit/etape2/4"
              class=" text-primary text-lg font-medium underline cursor-pointer">Indiquez vos coordonnées</RouterLink>
          </p>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import NavBar from "../../components/NavBar.vue";
  import StepsHeader from "../../components/Circuit/StepsHeader.vue";
  import Footer from "../../components/Footer.vue";
  import Particulier from "../../components/Circuit/Particulier.vue";
  import Societe from "../../components/Circuit/Societe.vue";
  
  
  import {useRoute} from 'vue-router'
  import {computed} from 'vue'
  
  
  export default {
  
    components: { NavBar, StepsHeader, Footer, Particulier, Societe },
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
  