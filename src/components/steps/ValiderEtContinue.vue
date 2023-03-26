<template>
    <Particulier v-if="checked"/>
    <Societe v-else/>
</template>

<script>
import Particulier from './Particulier.vue';
import Societe from './Societe.vue';
export default{
    components:{Particulier,Societe},
    props: {
        checked: {
            type: Boolean,
            default: true
        }
    },
}
</script>

<style scoped>
</style>