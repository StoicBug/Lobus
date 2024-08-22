<template>
    <section class="bg-gradient-to-b from-white to-gray-100 py-16" id="comment-march">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary text-sm font-semibold uppercase tracking-wide">{{ $t('stepsIntroTitle') }}</span>
          <h2 class="text-3xl font-bold mt-2">{{ $t('stepsTitle') }}</h2>
          <p class="text-gray-600 mt-4 max-w-2xl mx-auto">
            {{ $t('stepsSubtitle') }}
          </p>
        </div>
  
        <div class="space-y-24">
          <!-- Step 1 -->
          <div class="flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0">
              <div class="bg-white bg-landing-bg p-8 rounded-lg shadow-lg">
                <img src="../assets/images/home/Envoyez_votre_demande.svg" alt="Step 1" class="w-full h-64 object-contain">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pl-12">
              <h3 class="text-3xl font-bold text-primary mb-4">
                <span class="text-5xl block mb-2">01</span>
                {{ $t('stepsStep1Title') }}
              </h3>
              <p class="text-gray-600 text-lg">{{ $t('stepsStep1Content') }}</p>
            </div>
          </div>
  
          <!-- Step 2 -->
          <div class="flex flex-col md:flex-row-reverse items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0">
              <div class="bg-white bg-landing-bg p-8 rounded-lg shadow-lg">
                <img src="../assets/images/home/Comparez_les_prix_et_services.svg" alt="Step 2" class="w-full h-64 object-contain">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pr-12">
              <h3 class="text-3xl font-bold text-primary mb-4">
                <span class="text-5xl block mb-2">02</span>
                {{ $t('stepsStep2Title') }}
              </h3>
              <p class="text-gray-600 text-lg">{{ $t('stepsStep2Content') }}</p>
            </div>
          </div>
  
          <!-- Step 3 -->
          <div class="flex flex-col md:flex-row items-center">
            <div class="w-full md:w-1/2 mb-8 md:mb-0">
              <div class="bg-white bg-landing-bg p-8 rounded-lg shadow-lg">
                <img src="../assets/images/home/Choisissez_votre_transporteur.svg" alt="Step 3" class="w-full h-64 object-contain">
              </div>
            </div>
            <div class="w-full md:w-1/2 md:pl-12">
              <h3 class="text-3xl font-bold text-primary mb-4">
                <span class="text-5xl block mb-2">03</span>
                {{ $t('stepsStep3Title') }}
              </h3>
              <p class="text-gray-600 text-lg">{{ $t('stepsStep3Content') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  
  <script>
  export default {
    name: 'StepsSection',
  }
  </script>
