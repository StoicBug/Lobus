<template>
    <div class="my-10 w-11/12 mx-auto">
      <h2 class="sr-only">Steps</h2>
    
      <div
        class="relative after:absolute after:inset-x-0 after:top-1/2 after:block after:h-0.5 after:-translate-y-1/2 after:rounded-lg after:bg-gray-100"
      >
        <ol
          class="relative z-10 flex justify-between text-sm font-medium text-gray-500"
        >
          <li class="flex items-center gap-2 bg-white p-2">
            <span
              class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6"
            >
              1
            </span>
    
            <span class="hidden sm:block"> Information </span>
          </li>
    
          <li class="flex items-center gap-2 bg-white p-2">
            <span
              class="h-6 w-6 rounded-full bg-secondary text-center text-[10px] font-bold leading-6 text-white"
            >
              2
            </span>
    
            <span class="hidden sm:block"> Valider </span>
          </li>
    
          <li class="flex items-center gap-2 bg-white p-2">
            <span
              class="h-6 w-6 rounded-full bg-gray-100 text-center text-[10px] font-bold leading-6"
            >
              3
            </span>
    
            <span class="hidden sm:block"> Valider et Continue </span>
          </li>
        </ol>
      </div>
    </div>
        
    </template>
    
    <script>
    
    </script>
    
    <style scoped>
    
    .step-wizard-list {
      color: #333;
      list-style-type: none;
      border-radius: 10px;
      display: flex;
      padding: 20px 10px;
      position: relative;
      z-index: 10;
      width: full;
    }
    
    .step-wizard-item {
      padding: 0 20px;
      flex-basis: 0;
      -webkit-box-flex: 1;
      -ms-flex-positive: 1;
      flex-grow: 1;
    
      display: flex;
      flex-direction: column;
      text-align: center;
      min-width: 170px;
      position: relative;
    }
    .step-wizard-item + .step-wizard-item:after {
      content: "";
      position: absolute;
      left: 0;
      top: 19px;
      background: #394f63;
      width: 100%;
      height: 2px;
      transform: translateX(-50%);
      z-index: -10;
    }
    .progress-count {
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      font-weight: 600;
      margin: 0 auto;
      position: relative;
      z-index: 10;
      color: transparent;
    }
    .progress-count:after {
      content: "";
      height: 40px;
      width: 40px;
      background: #394f63;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: -10;
    }
    .progress-count:before {
      content: "";
      height: 10px;
      width: 20px;
      border-left: 3px solid #fff;
      border-bottom: 3px solid #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -60%) rotate(-45deg);
      transform-origin: center center;
    }
    .progress-label {
      font-size: 14px;
      font-weight: 600;
      margin-top: 10px;
    }
    .current-item .progress-count:before,
    .current-item ~ .step-wizard-item .progress-count:before {
      display: none;
    }
    .current-item ~ .step-wizard-item .progress-count:after {
      height: 10px;
      width: 10px;
    }
    .current-item ~ .step-wizard-item .progress-label {
      opacity: 0.5;
    }
    .current-item .progress-count:after {
      border: 2px solid #394f63;
    }
    .current-item .progress-count {
      color: #fff;
    }
    
    @media only screen and (max-width: 768px) {
      .progress-label {
        display: none;
      }
      .step-wizard-item {
        padding: 0;
        min-width: 110px;
      }
    }
    </style>