<template>
  <div>
    <div class="container lg:mb-24 mt-16">
      <div class="grid grid-cols-1 text-center">
        <h3 class="mb-6 md:text-2xl text-xl font-medium">Have Question ? Get in touch!</h3>

        <p class="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>

        <div class="mt-6 mb-14 md:mb-0">
          <router-link to="/contact" class="py-2 px-5  inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-600 hover:bg-orange-700 border-orange-600 hover:border-orange-700 text-white rounded-md"><i class="uil uil-phone align-middle me-2"></i> Contact us</router-link>
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