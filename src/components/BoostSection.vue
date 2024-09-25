<template>
  <div class="boostSection">
    <h1 class="boostSection_header">Boost your links today</h1>
    <button class="boostSection_button">Get Started</button>
  </div>
</template>

<style>
.boostSection {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--dark-violet);
  padding: 50px 0;
  background-image: url("../assets/images/bg-boost-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}

.boostSection_button {
  background-color: var(--cyan);
  border-radius: 30px;
  border: none;
  padding: 10px 35px;
  color: white;
}

.boostSection_button:hover {
  cursor: pointer;
}
</style>
