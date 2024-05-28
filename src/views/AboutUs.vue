<template>
  <div>
    <NavBar />
    <!-- Hero Start -->
    <section class="bg-hero-pattern h-full bg-cover bg-no-repeat bg-fixed bg-primary pb-10 pt-10 m-0 z-50" id="hero">

      <div class="container">
        <div class="grid grid-cols-1 pb-8 text-center mt-10">
          <h3 class="font-medium leading-normal text-3xl mt-10 text-white">Company Story</h3>
        </div><!--end grid-->
      </div><!--end container-->

    </section>
    <!-- Hero End -->
    <about-us />
    <Features />
    <TeamSection />
    <GetInTouch/>
    <Footer />
  </div>
</template>

<script>

import NavBar from "./../components/NavBar.vue";
import AboutUs from "./../components/AboutUs.vue";
import HeroTabs from "../components/HeroTabs.vue";
import Features from "../components/Features.vue";
import TeamSection from "../components/TeamComponent.vue";
import GetInTouch from "../components/GetInTouch.vue";
import Footer from "../components/Footer.vue";

export default {
  components: {Footer, GetInTouch, HeroTabs, NavBar,AboutUs,Features ,TeamSection}
}

</script>

<style scoped>

.blurbox {
  background: linear-gradient(102.62deg, rgba(0, 0, 0, 0.6) 1.57%, rgba(0, 0, 0, 0.2) 56.86%);
  box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
  border-radius: 20px;
}

#noblur {
  position: relative;
  z-index: 20;
}
</style>