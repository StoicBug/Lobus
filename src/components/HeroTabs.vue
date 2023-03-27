<template>
    <div class="lg:w-4/5 container mx-auto mt-10 ">
        <div
            class="flex items-center -ml-4 overflow-x-auto overflow-y-hidden flex-nowrap  text-white">
            <RouterLink rel="noopener noreferrer" to="/"
                class="flex items-center flex-shrink-0 px-2 md:px-5 py-3 space-x-2 bg-secondary ml-6 md:ml-16 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Aller-Simple</span>
            </RouterLink>
            <RouterLink rel="noopener noreferrer" to="/aller-retour"
                class="flex items-center flex-shrink-0 px-2 ml-1 md:px-5 py-3 space-x-2  bg-secondary md:ml-4 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Aller-Retour</span>
            </RouterLink>
            <RouterLink rel="noopener noreferrer" to="/circuit"
                class="flex items-center flex-shrink-0 px-2 ml-1 md:px-5 py-3 space-x-2  bg-secondary md:ml-4 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                </svg>
                <span>Circuit</span>
            </RouterLink>
            <RouterLink rel="noopener noreferrer" to="/transfert-aeroport"
                class="flex items-center flex-shrink-0 px-2 ml-1 md:px-5 py-3 space-x-2  bg-secondary md:ml-4 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
                <span>Transfert-aéroport</span>
            </RouterLink>
        </div>
        <RouterView></RouterView>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    }
}
</script>

<style scoped>

.router-link-exact-active{
    background: white;
    color: #394F63;
}

</style>