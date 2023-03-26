<script setup>
import { RouterView } from 'vue-router';

import NavBar from './components/NavBar.vue';
import Hero from './components/Hero.vue'
import StepsPanel from './components/StepsPanel.vue';
import WhyChooseUs from './components/WhyChooseUs.vue';
import Policy from './components/Policy.vue'
import Partners from './components/Partners.vue';
import Testimonials from './components/Testimonials.vue'
import Footer from './components/Footer.vue'

</script>

<template>
  <div class="font-Myfont">
    <RouterView/>
  </div>
</template>

<style scoped>
</style>
