<template>
    <NavBar />
    <div class="container mx-auto py-10">
      <StepsHeader />
      <div class="shadow-lg bg-landing-bg bg-no-repeat bg-cover bg-opacity-20">
        <div class="grid grid-cols-3 gap-4 w-full py-10 text-center">
          <div class="col-span-1 text-lg font-medium">
            Estimation basse <br />
            800dh
          </div>
          <div class="col-span-1 text-xl font-semibold">
            Prix moyen estimé <br />
            <span class="text-primary text-2xl">1200dh </span>TCC <br />
            <span class="font-normal text-lg">(soit 1200dh par personne)</span>
          </div>
          <div class="col-span-1 text-lg font-medium">
            Estimation haute <br />
            1200dh
          </div>
        </div>
        <hr class="text-gray w-11/12 mx-auto" />
        <div class="px-10">
          <h2 class="py-6 text-lg font-medium">Votre Voyage</h2>
          <p class="text-left text-gray pb-10">
            Aller simple Nantes, France - Paris, France <br />
            Aller: 23/03/2023 <br />
            Distance routiére: 384 km <br />
            Passagers: 30
          </p>
        </div>
        <hr class="text-gray w-11/12 mx-auto" />
        <div class="px-10">
          <h2 class="py-6 text-lg font-medium">Bagages</h2>
          <div class="p-2">
            <div class="mb-8 grid grid-cols-6 gap-5">
              <div class="col-span-2">
                <label for="" class="mr-2">Valise classique </label> <br />
                <label class="switch">
                  <input type="checkbox" v-model="checkedBagage" value="valiseClassique"/>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="col-span-2">
                <label for="" class="mr-2">Grande valise </label> <br />
                <label class="switch">
                  <input type="checkbox" v-model="checkedBagage" value="grandeValise"/>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="col-span-2">
                <label for="" class="mr-2">Bagage volumineux</label> <br />
                <label class="switch">
                  <input type="checkbox" v-model="checkedBagage" value="bagaeVolumineux" />
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="col-span-2">
                <label for="" class="mr-2">Matérielle de surf </label> <br />
                <label class="switch">
                  <input type="checkbox" v-model="checkedBagage" value="materialSurf"/>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="col-span-2">
                <label for="" class="mr-2">Matérielle de golf</label> <br />
                <label class="switch">
                  <input type="checkbox"  v-model="checkedBagage" value="materialGolf"/>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="col-span-2">
                <label for="" class="mr-2">Pas de bagage </label> <br />
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
          <h2 class="py-6 text-lg font-medium">Les équipements</h2>
          <div class="p-2">
            <div class="grid grid-cols-6 gap-5">
              <div class="col-span-2">
                <label for="" class="mr-2">Micro audio </label> <br />
                <label class="switch">
                  <input type="checkbox" value="microAudio" v-model="equipements"/>
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="col-span-2">
                <label for="" class="mr-2">Siege bébé </label> <br />
                <label class="switch">
                  <input type="checkbox" value="siegeBebe" v-model="equipements" />
                  <span class="slider round"></span>
                </label>
              </div>
              <div class="col-span-2">
                <label for="" class="mr-2">Glacié</label> <br />
                <label class="switch">
                  <input type="checkbox" value="glacie" v-model="equipements"/>
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="px-5 py-10">
          <RouterLink class="text-white bg-primary px-6 py-3 rounded-md mx-3" to="/transfert/etape2" @click="submit">Etape Suivante</RouterLink>
          <RouterLink  class="underline mx-3 my-8 block sm:inline-block" to="/transfert">Retour a l’etape precedante</RouterLink>
        </div>
      </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import NavBar from "../../components/NavBar.vue";
  import StepsHeader from "../../components/Transfert/StepsHeader.vue";
  import Footer from "../../components/Footer.vue";

  import { ref } from "vue";
  import { useTransfer } from "../../stores/transfer";
  
  export default {
    components: { NavBar, StepsHeader, Footer },
    setup() {
      const transfer  = useTransfer();

      const checkedBagage = ref([])
      const equipements = ref([])

      const submit = ()=>{
        transfer.setBagages(checkedBagage.value)
        transfer.setEquipements(equipements.value)
      }

      return { 
        checkedBagage,
        equipements,
        submit
       };
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
  