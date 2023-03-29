<script>
export default {};
</script>

<template>
  <div class="bg-white p-10 rounded-md relative">
    <img
      src="../../assets/corner_zelij.png"
      alt=""
      class="absolute top-0 right-0"
    />
    <form action="">
      <div class="grid lg:grid-cols-6 md:grid-cols-4 gap-1 text-silver">
        <div class="col-span-2">
          <label for="" class="">Place de depart</label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <span
              class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              name="q"
              class="py-2 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg"
              placeholder="Place de depart"
              autocomplete="off"
            />
          </div>
          <br />
          <label for="">Place d'arrivée</label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <span
              class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              name="q"
              class="py-2 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg"
              placeholder="Place d’arrivée"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="col-span-2">
          <label for="">Ma date de départ</label>
          <br />
          <input
            type="date"
            class="py-1 px-6 border border-gray rounded-lg mt-2 flex flex-row-reverse justify-between"
          />
          <br />
          <label for="" class="">Aller à</label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <input
              type="time"
              name="q"
              class="py-2 text-sm text-silve px-8 focus:outline-none border border-gray rounded-lg flex justify-between flex-row-reverse w-52"
              placeholder="Adulte(s)"
              autocomplete="off"
            />
          </div>
        </div>
        <div class="col-span-2 p-2">
          <label for="" class="">Voyageurs</label>
          <br />
          <div class="relative focus-within:text-gray-400 mt-2">
            <span
              class="absolute text-silver inset-y-0 left-0 flex items-center justify-between pl-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              name="q"
              class="py-2 text-sm text-silve pl-10 focus:outline-none border border-gray rounded-lg"
              placeholder="Adulte(s)"
              autocomplete="off"
            />
          </div>
        </div>
            
      </div>
      <p class="text-end">
        <RouterLink class="px-6 py-2 rounded-md bg-primary text-white font-medium" to="etape1">Suivant</RouterLink>
      </p>
    </form>
  </div>
</template>

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
  background-color: #394f63;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 18px;
  width: 18px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #f46036;
}

input:focus + .slider {
  box-shadow: 0 0 1px #f46036;
}

input:checked + .slider:before {
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
  left: 8px;
}
</style>
