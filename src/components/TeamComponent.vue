<template>
  <div>
    <div class="container lg:mt-24 mt-16">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-4 md:text-2xl text-xl font-medium">Meet Our Teammates</h3>

        <p class="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome
          template, you can replace it with any text.</p>
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

import box from '../assets/BoxModel.png'
export default {

  name: "TeamVue",
  data() {
    return {
      TeamData: [
        {
          image: box,
          name: 'Zakariae ABDOUNI',
          position: 'Designer',
        },
        {
          image: box,
          name: 'Romaysae',
          position: 'Designer',
        },
        {
          image: box,
          name: 'El bachir',
          position: 'Designer',
        }
      ]
    }
  },
}
</script>

<style scoped></style>