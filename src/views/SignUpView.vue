<script>
import NavBar from "../components/NavBar.vue";
import Footer from '../components/Footer.vue';
import SignUp from '../components/SignUp.vue'

export default {

  components: {Footer, NavBar, SignUp}
}
</script>

<template>
  <NavBar />
  <div class="py-14  bg-landing-bg bg-no-repeat bg-cover my-2">
    <SignUp />
  </div>
  <Footer />

</template>

<style scoped>

</style>