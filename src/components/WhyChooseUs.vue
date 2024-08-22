<template>
    <section class="bg-gradient-to-br from-blue-50 to-indigo-100 py-20" id="LOBUS-garantit">
      <div class="container mx-auto px-4">
        <div class="text-center mb-16">
          <span class="text-primary text-sm font-semibold uppercase tracking-wide">{{ $t('whyChooseUsIntroTitle') }}</span>
          <h2 class="text-3xl font-bold mt-2">{{ $t('whyChooseUsTitle') }}</h2>
        </div>
  
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(item, index) in items" :key="index" 
               class="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
            <div class="flex items-center p-6">
              <div class="flex-shrink-0 mr-4">
                <img :src="item.image" :alt="item.title" class="w-16 h-16">
              </div>
              <div>
                <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ $t(item.title) }}</h3>
                <p class="text-gray-600">{{ $t(item.content) }}</p>
              </div>
            </div>
            <div class="px-6 py-4 bg-gray-50 border-t border-gray-200">
              <a href="#" class="text-primary font-medium hover:underline">{{ $t('learnMore') }} →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>

  <script>
export default {
  name: 'WhyChooseUsSection',
  data() {
    return {
      items: [
        {
          image: '../assets/images/home/whyChooseUsCard1.svg',
          title: 'whyChooseUsTitle1',
          content: 'whyChooseUsContent1'
        },
        {
          image: '../assets/images/home/whyChooseUsCard2.svg',
          title: 'whyChooseUsTitle2',
          content: 'whyChooseUsContent2'
        },
        {
          image: '../assets/images/home/whyChooseUsCard3.svg',
          title: 'whyChooseUsTitle3',
          content: 'whyChooseUsContent3'
        },
        {
          image: '../assets/images/home/whyChooseUsCard4.svg',
          title: 'whyChooseUsTitle4',
          content: 'whyChooseUsContent4'
        }
      ]
    }
  }
}
</script>