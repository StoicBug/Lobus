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
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Grande valise </label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Bagage volumineux</label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Matérielle de surf </label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Matérielle de golf</label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Pas de bagage </label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr class="text-gray w-11/12 mx-auto" />
      <div class="px-10">
        <h2 class="py-6 text-lg font-medium">Motif du voyage</h2>
        <div class="p-2">
          <div class="mb-8 grid grid-cols-6 gap-5">
            <div class="col-span-2">
              <label for="" class="mr-2">Déplacement sportif </label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Déplacement d’entreprise </label>
              <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Mariage ou cérémonie</label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Group d’étudiants</label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Group de touristes résidant</label>
              <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Group de touriste non résidant</label>
              <br />
              <label class="switch">
                <input type="checkbox" />
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
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Siege bébé </label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
            <div class="col-span-2">
              <label for="" class="mr-2">Glacié</label> <br />
              <label class="switch">
                <input type="checkbox" />
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
      <hr class="text-gray w-11/12 mx-auto" />
      <div class="px-10">
        <h2 class="py-6 text-lg font-medium">Détails de voyage supplémentaires</h2>
        <div class="relative focus-within:text-gray-400 mt-2">
            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
              </svg>
            </span>
            <textarea class="py-3 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg w-full"> Si vous souhaitez ajouter des informations supplémentaires sur votre voyage, telles que des demandes spéciales ou des préférences de voyage, veuillez remplir cette section facultative.</textarea>
          </div>
      </div>
      <div class="px-5 py-10">
        <RouterLink class="text-white bg-primary px-6 py-3 rounded-md mx-3" to="/aller-retour/etape2">Etape Suivante</RouterLink>
        <RouterLink  class="underline mx-3 my-8 block sm:inline-block" to="/aller-retour">Retour a l’etape precedante</RouterLink>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script>
import NavBar from "../../components/NavBar.vue";
import StepsHeader from "../../components/AllerRetour/StepsHeader.vue";
import Footer from "../../components/Footer.vue";
import { ref } from "vue";

export default {
  components: { NavBar, StepsHeader, Footer },
}
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