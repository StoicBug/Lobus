<template>
    <section class="bg-hero-pattern h-full bg-cover bg-no-repeat bg-fixed375] pb-10 pt-10 m-0 z-50" id="hero">
        <div class="blurbox pl-10 pr-5 lg:w-5/6 mx-auto pt-12 pb-36 text-white container">
            <h1 class=" text-3xl font-bold md:w-4/6">{{ $t('heroTitle') }}</h1>
            <p class="pt-2 md:w-2/3">
                {{ $t('heroSubtitle')  }}
            </p>
        </div>
        <div class="lg:w-5/6 mx-auto -mt-36" id="noblur">
                <HeroTabs />
            </div>
    </section>
</template>

<script>
import HeroTabs from './HeroTabs.vue';

export default {
    components: { HeroTabs },
    data() {
        return {
        }
    }
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