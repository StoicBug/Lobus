<template>
<ul class="step-wizard-list">
      <li class="step-wizard-item">
        <span class="progress-count">1</span>
        <span class="progress-label">Validation</span>
      </li>
      <li class="step-wizard-item current-item">
        <span class="progress-count">2</span>
        <span class="progress-label">Valider et Continue</span>
      </li>
      <li class="step-wizard-item">
        <span class="progress-count">3</span>
        <span class="progress-label">Terminer</span>
      </li>
      <li class="step-wizard-item">
        <span class="progress-count">4</span>
        <span class="progress-label">Success</span>
      </li>
    </ul>
    
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