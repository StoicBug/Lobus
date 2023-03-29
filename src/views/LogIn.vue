<template>
    <NavBar />
    <div class="py-14  bg-landing-bg bg-no-repeat bg-cover my-2">
        <LogIn />
    </div>
    <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';
import LogIn from '../components/AllerSimple/LogIn.vue'


export default {
    components: { Footer, NavBar, LogIn }
};
</script>

<style scoped>

</style>