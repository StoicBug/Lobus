<template>
  <div>
    <component :is="currentUser ? 'ParticulierHeader' : 'NavBar'" />
    <Hero />
    <div>
      <ChatBot />
      <StepsPanel />
      <WhyChooseUs />
      <Partners />
      <Testimonials />
    </div>
    <Footer />
  </div>
</template>

<script>
import { supabase } from '../supabase'
import NavBar from "./../components/NavBar.vue";
import ParticulierHeader from "./../components/Particulier/ParticulierHeader.vue";
import Hero from "../components/Hero.vue";
import StepsPanel from "../components/StepsPanel.vue";
import WhyChooseUs from "../components/WhyChooseUs.vue";
import Policy from "../components/Policy.vue";
import Partners from "../components/Partners.vue";
import Testimonials from "../components/Testimonials.vue";
import Footer from "../components/Footer.vue";
import ChatBot from "../components/ChatBot.vue";

export default {
  components: {
    ChatBot,
    NavBar,
    ParticulierHeader,
    Hero,
    StepsPanel,
    WhyChooseUs,
    Policy,
    Partners,
    Testimonials,
    Footer,
  },
  data() {
    return {
      currentUser: null,
    }
  },
  async created() {
    this.currentUser = await this.checkUser();
  },
  methods: {
    async checkUser() {
      const { data: { user } } = await supabase.auth.getUser();
      return user;
    }
  }
}
</script>
