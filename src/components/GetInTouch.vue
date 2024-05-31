<template>
  <div>
    <div class="container lg:mb-24 mt-16">
      <div class="grid grid-cols-1 text-center">
        <h3 class="mb-6 md:text-2xl text-xl font-medium">Besoin de plus d'informations ? Contactez-nous dès maintenant !
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">Nous sommes là pour répondre à toutes vos questions et vous aider à chaque étape de votre parcours. N'hésitez pas à nous contacter pour toute assistance supplémentaire.</p>

        <div class="mt-6 mb-14 md:mb-0">
          <router-link to="/contact" class="py-2 px-5  inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"><i class="uil uil-phone align-middle me-2"></i> Contacter nous</router-link>
        </div>
      </div><!--end grid-->
    </div><!--end container-->
  </div>
</template>

<script>
export default {
  name: "GetInTouchInner"
}
</script>

<style  scoped>

</style>