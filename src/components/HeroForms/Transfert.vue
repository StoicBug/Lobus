<template>
  <div class="bg-white p-10 rounded-md relative">
    <img src="../../assets/corner_zelij.png" alt="" class="absolute top-0 right-0" />
    <form action="">
      <div class="grid lg:grid-cols-6 md:grid-cols-4 gap-1 text-silver">
        <div class="col-span-2">
          <label for="" class="">Place de depart</label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <input type="text" v-model="placeDeDeaprt"
              class="py-2 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg"
              placeholder="Place de depart" autocomplete="off" />
          </div>
          <br />
          <label for="">Place d'arrivée</label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
            </span>
            <input type="text" name="q" v-model="placeDarrive"
              class="py-2 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg"
              placeholder="Place d’arrivée" autocomplete="off" />
          </div>
        </div>
        <div class="col-span-2 mt-4 md:mt-0">
          <label for="">Aller</label>
          <br />
          <input type="date" v-model="dateDeDepart" class="py-1 px-6 border border-gray rounded-lg mt-2 flex flex-row-reverse justify-between" />
          <br>
          <label for="">Aller à</label>
          <br />
          <input type="time" v-model="heureDeDepart" class="py-1 px-6 border border-gray rounded-lg mt-2 flex flex-row-reverse justify-between" />
        </div>
        <div class="col-span-2 mt-4 lg:mt-0">
          <label for="" class="">Passagers </label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </span>
            <input type="number" v-model="voyageurs" name="q"
              class="py-2 text-sm text-silver  pl-10 focus:outline-none border border-gray rounded-lg"
              placeholder="Adulte(s)" autocomplete="off" />
          </div>
          <br />
          <label for="" class="">Pancarte </label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
            </span>
            <input type="text" v-model="pancarte" name="q"
              class="py-2 text-sm text-silver  pl-10 focus:outline-none border border-gray rounded-lg"
              placeholder="Adulte(s)" autocomplete="off" />
          </div>
        </div>
        <div class="col-span-2 my-4 ">
          <label for="" class="">N° vol </label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
              </svg>

            </span>
            <input type="text" v-model="numeroDeVol" name="q"
              class="py-2 text-sm text-silver  pl-10 focus:outline-none border border-gray rounded-lg"
              placeholder="Adulte(s)" autocomplete="off" />
          </div>
        </div>
      </div>
      <p class="text-end">
        <button @click="submit">
          <RouterLink  class="px-6 py-2 rounded-md bg-primary text-white font-medium" to="/transfert/etape1" >Suivant
          </RouterLink>
        </button>
      </p>
    </form>
  </div>
</template>
  
<script>

import { ref } from "vue";
import { useTransfer } from "../../stores/Transfer";

export default {

  setup() {

    const transfer = useTransfer();

    const placeDeDeaprt = ref("");
    const placeDarrive = ref("");
    const dateDeDepart = ref("");
    const heureDeDepart = ref("");
    const voyageurs = ref();
    const pancarte = ref("");
    const numeroDeVol = ref("");

    const submit = () => {
      transfer.setPlaceDeDepart(placeDeDeaprt.value);
      transfer.setPlaceDarrive(placeDarrive.value);
      transfer.setDateDeDepart(dateDeDepart.value);
      transfer.setHeureDeDepart(heureDeDepart.value);
      transfer.setVoyageurs(voyageurs.value);
      transfer.setPancarte(pancarte.value);
      transfer.setNumeroDeVol(numeroDeVol.value);
    };


    return {
      placeDeDeaprt,
      placeDarrive,
      dateDeDepart,
      heureDeDepart,
      voyageurs,
      pancarte,
      numeroDeVol,
      submit,
    };
  },

}
</script>
  
<style scoped></style>
  