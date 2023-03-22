<template>
    <div class="lg:w-4/5 container mx-auto mt-10 ">
        <div
            class="flex items-center -mx-4 overflow-x-auto overflow-y-hidden flex-nowrap dark:bg-gray-800 dark:text-gray-100 text-white">
            <a rel="noopener noreferrer" href="#"
                class="flex items-center flex-shrink-0 px-2 md:px-5 py-3 space-x-2 dark:text-gray-400 bg-white text-silver ml-6 md:ml-16 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                </svg>
                <span>Aller-Simple</span>
            </a>
            <a rel="noopener noreferrer" href="#"
                class="flex items-center flex-shrink-0 px-2 ml-1 md:px-5 py-3 space-x-2 dark:text-gray-50 bg-secondary md:ml-4 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                <span>Aller-Retour</span>
            </a>
            <a rel="noopener noreferrer" href="#"
                class="flex items-center flex-shrink-0 px-2 ml-1 md:px-5 py-3 space-x-2 dark:text-gray-400 bg-secondary md:ml-4 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <polygon
                        points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2">
                    </polygon>
                </svg>
                <span>Circuit</span>
            </a>
            <a rel="noopener noreferrer" href="#"
                class="flex items-center flex-shrink-0 px-2 ml-1 md:px-5 py-3 space-x-2 dark:text-gray-400 bg-secondary md:ml-4 rounded-t-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
                </svg>
                <span>Transfert-aéroport</span>
            </a>
        </div>
        <div class="bg-white p-10 rounded-md relative">

            <img src="../assets/corner_zelij.png" alt="" class="absolute top-0 right-0">
            <form action="">
                <div class="grid lg:grid-cols-6 md:grid-cols-4 gap-1 text-silver">
                    <div class="col-span-2">
                        <label for="" class="">Place de depart</label>
                        <br>
                        <div class="relative focus-within:text-gray-400 mt-2">
                            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            <input type="text" name="q"
                                class="py-2 text-sm text-silver bg-gray-900 pl-10 focus:outline-none  focus:text-gray-900 border border-gray rounded-lg"
                                placeholder="Place de depart" autocomplete="off">
                        </div>
                        <br>
                        <label for="">Place d'arrivée</label>
                        <br>
                        <div class="relative focus-within:text-gray-400 mt-2">
                            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                                </svg>
                            </span>
                            <input type="text" name="q"
                                class="py-2 text-sm text-silver bg-gray-900 pl-10 focus:outline-none  focus:text-gray-900 border border-gray rounded-lg"
                                placeholder="Place d’arrivée" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-span-2">
                        <label for="">Ma date de départ</label>
                        <br>
                        <input type="date" class="py-1 px-6 border border-gray rounded-lg mt-2 flex flex-row-reverse justify-between" />
                        <br>
                        <label for="" class="">Voyageurs</label>
                        <br>
                        <div class="relative focus-within:text-gray-400 mt-2">
                            <span class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                    stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                </svg>

                            </span>
                            <input type="text" name="q"
                                class="py-2 text-sm text-silver bg-gray-900 pl-10 focus:outline-none  focus:text-gray-900 border border-gray rounded-lg"
                                placeholder="Adulte(s)" autocomplete="off">
                        </div>
                    </div>
                    <div class="col-span-2 p-2">
                        <div class="mb-8 flex items-center">
                            <div>
                                <label for="" class=" mr-2">climatisé</label> <br>
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>
                            <div class="pl-4"><label for="" class="mr-2">Siége en cuire</label> <br>
                                <label class="switch">
                                    <input type="checkbox">
                                    <span class="slider round"></span>
                                </label>
                            </div>


                        </div>
                        <label for="" class=" mr-2">Wifi 24h/24h</label> <br>
                        <label class="switch">
                            <input type="checkbox">
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <p class="text-end"><button class="px-6 py-2 rounded-md bg-primary text-silver font-medium">Suivant</button>
                </p>
            </form>
        </div>
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
.switch {
    position: relative;
    display: inline-block;
    width: 53px;
    height: 27px;
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}


.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #394F63;
    -webkit-transition: .4s;
    transition: .4s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider {
    background-color: #F46036;
}

input:focus+.slider {
    box-shadow: 0 0 1px #F46036;
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.mx-input {
    padding-left: 30px;
    padding-right: 10px;
}
.mx-icon-calendar {
    left: 8px
}
</style>