<template>
  <div>
    <section class="relative md:p-24 p-16" id="about">

      <div class="container mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
          <div class="lg:col-span-5">
            <div class="relative">
              <img src="../assets/images/about.jpg" class="rounded-lg shadow-lg relative" alt="">
              <div class="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center">
                <a href="#!" @click="toggle"  data-type="youtube"  data-id="yba7hPeTSjk" class="lightbox size-20 rounded-full shadow-lg shadow-slate-100 dark:shadow-slate-800 inline-flex items-center justify-center bg-white dark:bg-slate-950 text-violet-600">
                  <i class="mdi mdi-play inline-flex items-center justify-center text-2xl"></i>
                </a>
              </div>
            </div>
          </div><!--end col-->

          <div class="lg:col-span-7">
            <div class="lg:ms-7">
              <h3 class="mb-4 md:text-2xl text-xl font-medium">LOBUS</h3>
              <p class="text-slate-400 dark:text-slate-300 max-w-2xl mx-auto">Commencez à travailler avec LOBUS qui peut fournir tout ce dont vous avez besoin pour générer de la notoriété, générer du trafic et vous connecter. Un texte factice est un texte utilisé dans le secteur de l'édition ou par les concepteurs de sites Web pour occuper l'espace qui sera ensuite rempli de contenu « réel ». Cela est nécessaire lorsque, par exemple, le texte final n'est pas encore disponible. Les textes factices sont utilisés par les compositeurs depuis le XVIe siècle.
              </p>
              <div class="relative mt-8">
                <router-link to="/about"  class="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md">En savoir plus
                    <i class="uil uil-arrow-right"></i></router-link>
              </div>
            </div>
          </div><!--end col-->
        </div><!--end grid-->
      </div><!--end container-->
    </section>
  </div>
</template>

<script>
export default {
  name: "AboutInner",
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    toggle(){
      if (!this.isActive) {
        this.isActive = true
      }else{
        this.isActive = false
      }
    }
  },
}
</script>

<style lang="scss" scoped>

</style>



