<template>

  <section class="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800" id="features">
    <div class="container">
      <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-6 md:text-2xl text-xl font-medium">Client's Review</h3>

        <p class="text-slate-400 max-w-xl mx-auto">This is just a simple text made for this unique and awesome template, you can replace it with any text.</p>
      </div><!--end grid-->

      <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
        <ul v-for="client in clientData" :key="client.index" class="space-y-8">
          <li class="rounded-lg shadow-lg dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
            <div class="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
              <img :src="client.image1" class="size-16 rounded-full shadow dark:shadow-gray-800" alt="">

              <div class="ps-4">
                <a href="" class="text-lg h5 hover:text-violet-600 duration-500 ease-in-out">{{ client.name1
                  }}</a>
                <p class="text-slate-400">{{ client.position1 }}</p>
              </div>
            </div>

            <div class="mt-6">
              <p class="text-slate-400">{{ client.desc1 }}</p>
              <ul class="list-none mb-0 text-amber-400 mt-2">
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>
          </li>

          <li class="rounded-lg shadow-lg dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
            <div class="flex items-center pb-6 border-b border-gray-100 dark:border-gray-800">
              <img :src="client.image2" class="size-16 rounded-full shadow dark:shadow-gray-800" alt="">

              <div class="ps-4">
                <a href="" class="text-lg h5 hover:text-violet-600 duration-500 ease-in-out">{{ client.name2 }}</a>
                <p class="text-slate-400">{{ client.position2 }}</p>
              </div>
            </div>

            <div class="mt-6">
              <p class="text-slate-400">{{ client.desc2 }}</p>
              <ul class="list-none mb-0 text-amber-400 mt-2">
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
                <li class="inline"><i class="mdi mdi-star"></i></li>
              </ul>
            </div>
          </li>
        </ul>


      </div>
    </div><!--end container-->
  </section>
  <!-- End -->

</template>

<script>
//


export default {
  name: "clientVue",
  data() {
    return {
      clientData: [
        {
          id: 1,
          name1: "Thomas Israel",
          name2: "Barbara McIntosh",
          position1: 'C.E.O',
          position2: 'C.E.O',
          desc1: "I didn't know a thing about icon design until I read this book. Now I can create any icon I need in no time. Great resource!",
          desc2: "There are so many things I had to do with my old software that I just don't do at all with Techwind. Suspicious but I can't say I don't love it."

        },
        {
          id: 1,
          name1: "Carl Oliver",
          name2: "Jill Webb",
          position1: 'C.E.O',
          position2: 'C.E.O',
          desc1: "The best part about Techwind is every time I pay my employees, my bank balance doesn't go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.",
          desc2: "I'm trying to get a hold of someone in support, I'm in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away."

        },
        {
          id: 1,
          name1: "Barbara McIntosh",
          name2: "Janisha Doll",
          position1: 'C.E.O',
          position2: 'C.E.O',
          desc1: "TI used to have to remit tax to the EU and with Techwind I somehow don't have to do that anymore. Nervous to travel there now though.",
          desc2: "This is the fourth email I've sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important."

        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped></style>