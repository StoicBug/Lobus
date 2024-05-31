<template>
  <div>
    <div class="container lg:mt-24 mt-16">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-4 md:text-2xl text-xl font-medium">Rencontrez nos équipe
        </h3>

        <p class="text-slate-400 max-w-xl mx-auto">Découvrez les visages derrière notre équipe. Rencontrez les membres qui font de notre projet une réalité.</p>
      </div>

      <div class="grid md:grid-cols-9  grid-cols-1 mt-8 gap-[80px]">
        <div  v-for="item in TeamData" :key="item.index" class="lg:col-span-3 md:col-span-6">
          <div class="group text-center">
            <div class="relative inline-block mx-auto rounded-full overflow-hidden">
              <img :src="item.image" class="" alt="">
            </div>

            <div class="content mt-3">
              <a href="" class="text-lg hover:text-violet-600 transition-all duration-500 ease-in-out h5">{{ item.name }}</a>
              <p class="text-slate-400">{{item.position}}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

import zakariae from '../assets/images/zaka.jpg'
import romi from '../assets/images/romi.jpg'
import bachir from '../assets/images/bachir.jpg'

export default {

  name: "TeamVue",
  data() {
    return {
      TeamData: [
        {
          image: zakariae,
          name: 'Zakariae ABDOUNI',
          position: 'GLSID-2',
        },
        {
          image: romi,
          name: 'Romaysae',
          position: 'GLSID-2',
        },
        {
          image: bachir,
          name: 'El bachir',
          position: 'BDCC-2',
        }
      ]
    }
  },
}
</script>

<style scoped></style>