<script>
import NavBar from './../components/NavBar.vue'
import Hero from '../components/Hero.vue';
import StepsPanel from '../components/StepsPanel.vue';
import WhyChooseUs from '../components/WhyChooseUs.vue';
import Policy from '../components/Policy.vue';
import Partners from '../components/Partners.vue';
import Testimonials from '../components/Testimonials.vue';
import Footer from '../components/Footer.vue'

export default{
    components: {
        NavBar,
        Hero,
        StepsPanel,
        WhyChooseUs,
        Policy,
        Partners,
        Testimonials,
        Footer
  }
}

</script>

<template>
    <NavBar/>
    <Hero/>
    <StepsPanel/>
    <WhyChooseUs/>
    <Policy/>
    <Partners/>
    <Testimonials/>
    <Footer/>
</template>
