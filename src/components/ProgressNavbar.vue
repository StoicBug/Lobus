<template>
  <nav class="sticky top-1/2 transform -translate-y-1/2 h-16 right-0 hidden lg:block z-50">
    <div class="bg-white bg-opacity-90 backdrop-blur-sm rounded-l-lg shadow-lg p-4 max-w-[200px]">
      <ul class="space-y-2">
        <li v-for="(item, index) in navItems" :key="index">
          <a :href="item.href" 
             class="block py-2 px-4 rounded-md transition-all duration-300 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
             :class="{ 'bg-blue-100 text-blue-600': activeSection === item.href }"
             @click="setActiveSection(item.href)">
            <div class="flex items-center">
              <component :is="item.icon" class="w-5 h-5 mr-2" />
              <span>{{ item.text }}</span>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'NavigationSidebar',
  setup() {
    const activeSection = ref('');

    const navItems = [
      { href: '#comment-macrh', text: 'Comment ça marche', icon: "" },
      { href: '#LOBUS-garantit', text: 'Ce que LOBUS vous garantit', icon: "" },
      { href: '#plan-trip2', text: 'Plan Your Trip', icon: "" },
      { href: '#plan-trip', text: 'Partners', icon: "" },
      { href: '#testamonials', text: 'Testimonials', icon: "" },
      { href: '#hero', text: 'Go Back Top', icon: "" },
    ];

    const setActiveSection = (href) => {
      activeSection.value = href;
    };

    return {
      activeSection,
      navItems,
      setActiveSection,
    };
  },
}
</script>