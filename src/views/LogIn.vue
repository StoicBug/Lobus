<template>
    <NavBar />
    <h1>Hello Wrold!</h1>
    <Footer />
</template>

<script>
import NavBar from '../components/NavBar.vue';
import Footer from '../components/Footer.vue';

export default {
    name: "LogIn",

    components: { Footer, NavBar },

    data() {
        return {
            email: "",
            password: "",
            error: "",
        };
    },
    methods: {
        async login() {
            try {
                await this.$store.dispatch("auth/login", {
                    email: this.email,
                    password: this.password,
                });
                this.$router.push("/dashboard");
            }
            catch (error) {
                this.error = error.response.data.message;
            }
        },
    },
    components: { NavBar }
};
</script>

<style scoped>

</style>