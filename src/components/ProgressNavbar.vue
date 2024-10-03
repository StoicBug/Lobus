<template>
  <nav class="sticky top-1/2 transform -translate-y-1/2 h-12 right-0 hidden lg:block z-50">
    <div class="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-md p-2 max-w-[150px]">
      <ul class="space-y-1">
        <li v-for="(item, index) in navItems" :key="index">
          <a :href="item.href" 
             class="block py-1 px-3 rounded-md transition-all duration-200 hover:bg-blue-200 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
             :class="{ 'bg-blue-200 text-blue-700': activeSection === item.href }"
             @click="setActiveSection(item.href)">
            <div class="flex items-center">
              <component :is="item.icon" class="w-4 h-4 mr-1" />
              <span class="text-sm">{{ item.text }}</span>
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