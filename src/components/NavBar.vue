<template>
  <nav class="shadow-sm">
    <div class="px-8 py-6 flex justify-between items-center container mx-auto">
      <RouterLink class="text-3xl font-extrabold italic" to="/">
        LOB<span class="text-orange-600">U</span>S
      </RouterLink>
      <span
        class="md:hidden absolute right-6 top-6 cursor-pointer text-4xl"
        @click="toggle()"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </span>
      
      <ul
        class="md:flex md:w-auto md:static absolute md:px-0 md:pb-0 md:py-0 md:shadow-none pb-10 top-14 px-2 w-full duration-500 ease-out bg-white shadow-lg py-10 justify-center items-center z-30 overflow-y-hidden"
        :class="[open ? 'right-0' : 'right-[-100%] hidden']"
      >
      <li class="px-4">
        <select name="" id="" v-model="$i18n.locale">
        <option value="fr">Francais</option>
        <option value="en">English</option>
      </select>
      </li>
        <li class="text-center">
          <button class="font-medium text-silver">
            <RouterLink to="/login-transporteur">Inscription Transporteur</RouterLink>
          </button>
        </li>
        <li class="text-center">
          <button
            class="ml-4 bg-primary px-4 py-2 rounded-lg text-white font-medium shadow-sm"
          >
            <RouterLink to="/login">Se connecter</RouterLink>
            
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    let open = ref(false);

    const toggle = () => {
      open.value = !open.value;
    };

    return {
      open,
      toggle,
    };
  },

  data() {
    return {
      lang : ['fr', 'en']
    };
  },
};
</script>

<style scoped></style>
