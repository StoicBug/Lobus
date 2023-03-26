<template>
    <form
          novalidate=""
          action=""
          class="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <div class="grid grid-cols-6 gap-6 col-span-full lg:col-span-3 p-10">
            <div class="col-span-full sm:col-span-3">
              <label class="sr-only" for="name">Name</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm shadow-md"
                placeholder="Name"
                type="text"
                id="name"
              />
            </div>
            <div class="col-span-full sm:col-span-3">
              <label class="sr-only" for="lastname">Last Name</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm shadow-md"
                placeholder="Lastname"
                type="text"
                id="lastname"
              />
            </div>
            <div class="col-span-full sm:col-span-3">
              <label class="sr-only" for="email">email</label>
              <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm shadow-md"
                placeholder="email"
                type="email"
                id="email"
              />
            </div>
            <div class="col-span-full">
              <label for="password" class="sr-only">Password</label>

              <div class="relative">
                <input
                  type="password"
                  class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-md"
                  placeholder="Enter password"
                />

                <span
                  class="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
              <label for="password" class="sr-only">Password</label>

              <div class="relative py-5">
                <input
                  type="password"
                  class="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-md"
                  placeholder="Confirm password"
                />

                <span
                  class="absolute inset-y-0 right-0 grid place-content-center px-4"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div class="col-span-full sm:col-span-2">
              <div>
                <label for="" class="mr-2">Acceptation des règles générale</label> <br />
                <label class="switch">
                  <input type="checkbox" />
                  <span class="slider round"></span>
                </label>
              </div>
            </div>
          </div>
        </form>
</template>

<script>
export default{

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