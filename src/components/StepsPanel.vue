<template >
    <div class="bg-landing-bg bg-no-repeat bg-cover bg-opacity-40" id="comment-macrh">

    
    <section class="container mx-auto pt-10" >
        <div class="text-center">
            <p class="text-primary">{{ $t('stepsIntroTitle') }}</p>
            <h1 class="text-2xl font-semibold ">- {{ $t('stepsTitle') }} -</h1>
            <p class="pt-4">
                {{ $t('stepsSubtitle') }}
            </p>
        </div>
        <div class="grid grid-cols-6 pt-10 gap-3">
            <div class="col-span-4 col-start-2 md:col-span-2 md:col-start-2">
                <img class="w-full p-5" src="../assets/images/home/Envoyez_votre_demande.svg" alt="">
            </div>
            <div class="col-span-4 col-start-2 md:col-span-2 md:col-start-4 flex flex-col justify-center">
                <h1 class="text-4xl font-semibold text-primary">01. <br /> {{ $t('stepsStep1Title') }} </h1>
                <p class="mt-2">
                    {{ $t('stepsStep1Content') }}
                </p>
            </div>
        </div>
        <div class="grid grid-cols-6 pt-10 gap-3">
            <div class="col-span-4 col-start-2 md:col-span-2 md:col-start-2 flex flex-col justify-center">
                <h1 class="text-4xl font-semibold text-primary">02. <br /> {{ $t('stepsStep2Title') }}</h1>
                <p class="mt-2">{{ $t('stepsStep2Content') }}</p>
            </div>
            <div class="col-span-4 row-start-1 col-start-2 md:col-span-2 md:col-start-4">
                <img class="w-full p-5" src="../assets/images/home/Comparez_les_prix_et_services.svg" alt="">
            </div>
        </div>
        <div class="grid grid-cols-6 pt-10 gap-3">
            <div class="col-span-4 col-start-2 md:col-span-2 md:col-start-2">
                <img class="w-full p-5" src="../assets/images/home/Choisissez_votre_transporteur.svg" alt="">
            </div>
            <div class="col-span-4 col-start-2 md:col-span-2 md:col-start-4 flex flex-col justify-center">
                <h1 class="text-4xl font-semibold text-primary">03. <br /> {{ $t('stepsStep3Title') }}</h1>
                <p class="mt-2">{{ $t('stepsStep3Content') }}</p>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
  data() {
    return {
    }
  }
}
</script>

<style>
</style>
