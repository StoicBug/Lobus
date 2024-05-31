<template>
  <div class="mx-auto max-w-screen-xl px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
      <h1 class="text-2xl font-bold sm:text-3xl">J'ai déjà un compte</h1>
      <p class="mt-4 text-gray-500">
        Explorez Lobus, votre destination idéale pour trouver le plan parfait pour votre voyage !
      </p>
    </div>

    <form @submit.prevent="login" action="" class="mx-auto mt-8 mb-0 max-w-md space-y-4">
      <div>
        <label for="email" class="sr-only">Email</label>
        <div class="relative focus-within:text-gray-400 mt-2">
          <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z" />
            </svg>
          </span>
          <input type="email" name="q"
                 class="py-3 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg w-full"
                 placeholder="Email" v-model="email" autocomplete="off" />
        </div>
      </div>

      <div>
        <label for="password" class="sr-only">Password</label>
        <div class="relative focus-within:text-gray-400 mt-2 mb-6">
          <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                 stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
            </svg>
          </span>
          <input type="password" name="password" v-model="password"
                 class="py-3 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg w-full"
                 placeholder="Password" autocomplete="off" />
        </div>
      </div>

      <div class="flex items-center justify-between">
        <p class="text-sm text-gray-500">
          <a class="underline" href="">Mode de passe oublié</a>


        </p>
        <button><RouterLink to="/signup">Sign Up</RouterLink></button>
        <a href="/" class="py-3 px-5 block" @click.prevent="login">Log In</a>

        <!--     <input
                type="submit"
                class="text-white bg-primary px-6 py-3 rounded-md mx-3"
                value="Send magic link"
            />
           <button class="py-2 px-4 bg-red-400" @click.prevent="seeCurrentUser">SEE USER</button>
                 <button class="py-2 px-4 bg-red-400" @click.prevent="logOut">LOG OUT</button>
                 -->
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../supabase'

const email = ref('')
const password = ref('')

async function login() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  });

  if (error) {
    console.error('Error logging in:', error.message);
  } else {
    console.log('Logged In!');
    window.location.href = '/'; // Navigate to the home page
  }
}

async function seeCurrentUser() {
  const user = await supabase.auth.getSession();
  console.log("USER SESSION ==>", user.data.session.user)
}

async function logOut() {
  const {error} = await supabase.auth.signOut();
  if (error) {
    console.log('Error logging out:', error.message)
  } else {
    console.log('Logged out!')
  }
}

</script>

<style scoped></style>
