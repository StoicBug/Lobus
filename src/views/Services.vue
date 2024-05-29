<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section class="bg-hero-pattern h-full bg-cover bg-no-repeat bg-fixed bg-primary pb-10 pt-10 m-0 z-50" id="hero">

      <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 class="font-medium leading-normal text-3xl mt-10 text-white">Our Services</h3>
        </div><!--end grid-->
      </div><!--end container-->

    </section>
    <!-- Hero End -->
    <Features />
    <clients />
    <GetInTouch />
    <Footer />
  </div>
</template>

<script>
import Features from '../components/Features.vue';
import GetInTouch from '../components/GetInTouch.vue';
import Navbar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue';
import clients from "../components/clients.vue";

export default {
  name: "ServicesVue",
  components: { Navbar, Features, clients,  GetInTouch, Footer}
}
</script>

<style scoped>

</style>