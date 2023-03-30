<template>
  <form novalidate="" action="" class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
    <div class="grid grid-cols-6 gap-6 col-span-full lg:col-span-3 p-10">
      <div class="col-span-full sm:col-span-4 sm:col-start-2">
        <div class="relative focus-within:text-gray-400 mt-2">
          <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </span>
          <input type="text" name="q" v-model="prenom"
            class="py-3 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg w-full"
            placeholder="Prenom" autocomplete="off" />
        </div>
      </div>
      <div class="col-span-full sm:col-span-4 sm:col-start-2">
        <div class="relative focus-within:text-gray-400 mt-2">
          <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
          </span>
          <input type="text" name="q" v-model="nom"
            class="py-3 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg w-full"
            placeholder="Nom" autocomplete="off" />
        </div>
      </div>
      <div class="col-span-full sm:col-span-4 sm:col-start-2">
        <div class="relative focus-within:text-gray-400 mt-2">
          <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>
          </span>
          <input type="email" name="q" v-model="email"
            class="py-3 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg w-full"
            placeholder="Email" autocomplete="off" />
        </div>
      </div>
      <div class="col-span-full sm:col-span-4 sm:col-start-2">
        <div class="relative focus-within:text-gray-400 mt-2 mb-6">
          <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </span>
          <input type="password" name="q" v-model="password"
            class="py-3 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg w-full"
            placeholder="Password" autocomplete="off" />
        </div>

        <div class="relative focus-within:text-gray-400 mt-2 ">
          <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </span>
          <input type="password" name="q" v-model="password_confirmation"
            class="py-3 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg w-full "
            placeholder="Confirm Password" autocomplete="off" />
        </div>
      </div>
      <div class="col-span-full sm:col-span-4 sm:col-start-2">
        <div>
          <label for="" class="mr-2">Acceptation des règles générale</label>
          <br />
          <label class="switch">
            <input type="checkbox" v-model="isAgree" />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
      <div class="col-span-full sm:col-span-4 sm:col-start-2 py-5">
        <RouterLink class="text-white bg-primary px-6 py-3 rounded-md mr-3" to="etape2" @click="submit">Etape Suivante
        </RouterLink>
        <RouterLink class="underline mx-3" to="/etape1">Retour a l’etape precedante</RouterLink>
      </div>
    </div>
  </form>
</template>

<script>

import { useAllerSimple } from "../../stores/AllerSimple"
import { ref } from "vue";


export default {

  setup() {
    const allerSimple = useAllerSimple();

    const prenom = ref("");
    const nom = ref("");
    const email = ref("");
    const password = ref("");
    const password_confirmation = ref("");
    const isAgree = ref(false);

    const submit = () => {
      allerSimple.registerParticulier(prenom.value, nom.value, email.value, password.value, password_confirmation.value, isAgree.value);
    };

    return {
      prenom,
      nom,
      email,
      password,
      password_confirmation,
      isAgree,
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

input:checked+.slider {
  background-color: #f46036;
}

input:focus+.slider {
  box-shadow: 0 0 1px #f46036;
}

input:checked+.slider:before {
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
