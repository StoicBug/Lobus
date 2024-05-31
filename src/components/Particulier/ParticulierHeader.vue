<template>
  <header aria-label="Page Header" class="bg-gray-50">
    <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div class="flex items-center sm:justify-between sm:gap-4">
        <!-- Logo -->
        <div class="relative hidden sm:block">
          <RouterLink to="/">
            <img src="../../assets/Logo.png" alt="" class="w-36">
          </RouterLink>
        </div>

        <!-- Navigation Links -->
        <div class="flex flex-1 items-center justify-between gap-8 sm:justify-end">
          <!-- Links and Icons -->
          <div class="flex gap-4">
            <!-- Navigation Links -->
            <RouterLink to="/" class="block shrink-0 rounded-lg p-2.5  sm:hidden">LOBUS</RouterLink>
            <a href="#" class="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700">
              <!-- Notification Icon -->
              <span class="sr-only">Notifications</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </a>
            <!-- Profile Dropdown -->
            <button type="button" class="group flex shrink-0 items-center rounded-lg transition relative dropdown">
              <!-- Profile Image -->
              <img alt="Man"
                   src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                   class="h-10 w-10 rounded-full object-cover" />
              <!-- Profile Info -->
              <p class="ml-2 hidden text-left text-xs sm:block">
                <strong class="block font-medium"></strong>
                <span class="text-gray-500">{{ currentUser ? currentUser.email : 'Guest@gmail.com' }}</span>
              </p>
              <!-- Dropdown Icon -->
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="ml-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                   viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd" />
              </svg>
              <!-- Dropdown Content -->
              <div class="dropdown-content hidden absolute z-10">
                <a href="/particulier" class="py-3 px-5 block">Offers</a>
                <a href="/" class="py-3 px-5 block" @click.prevent="logOut">Log Out</a>
              </div>
            </button>
          </div>
        </div>
      </div>

      <!-- Welcome Message -->
      <div class="mt-8">
        <h1 class="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back <span class="text-primary"></span>!
        </h1>
        <p class="mt-1.5 text-sm text-gray-500">
          You have 3 new offers. Keep it up! 🚀
        </p>
      </div>
    </div>
  </header>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { supabase } from '../../supabase';

const currentUser = ref(null);

// Fetch the current user's information
async function checkUser() {
  const { data, error } = await supabase.auth.getUser();
  if (data?.user) {
    currentUser.value = {
      name: data.user.user_metadata.full_name || 'User',
      email: data.user.email,
    };
  } else {
    console.error('Error fetching user:', error);
  }
}

// Call the checkUser function on component mount
onMounted(() => {
  checkUser();
});


// Logout function
async function logOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.log('Error logging out:', error.message);
  } else {
    console.log('Logged out!');
    currentUser.value = null; // Reset currentUser to null after logging out
    window.location.href = '/'; // Redirect to home page after logging out
  }
}
</script>
<style scoped>
.dropdown {
  position: relative;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
  top: 42px;
  right: 0;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
