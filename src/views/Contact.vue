<template>
  <div>
    <Navbar />
    <!-- Hero Start -->
    <section class="bg-hero-pattern h-full bg-cover bg-no-repeat bg-fixed bg-primary pb-10 pt-10 m-0 z-50" id="hero">

      <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 class="font-medium leading-normal text-3xl mt-10 text-white">Prêt à nous contacter ?</h3>
        </div><!--end grid-->
      </div><!--end container-->

    </section>
    <!-- Hero End -->
    <ContactUs />
    <Footer />
  </div>
</template>

<script>
import ContactUs from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
import Navbar from '../components/Navbar.vue';

export default {
  name: "ContactVue",
  components: { Navbar, ContactUs, Footer }
}
</script>

<style  scoped>

</style>