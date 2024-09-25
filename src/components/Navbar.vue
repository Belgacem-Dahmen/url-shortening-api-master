<script setup lang="ts"></script>

<template>
  <nav class="navbar">
    <div class="nav_left">
      <img class="nav_logo" src="../assets/images/logo.svg" alt="" />
      <div class="nav_links">
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Ressources</li>
        </ul>
      </div>
    </div>
    <div class="nav_right">
      <p>Login</p>
      <button class="nav_right-button">Sign up</button>
    </div>
  </nav>
</template>

<style scoped>
nav {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--grayish-violet);
  font-weight: var(--font-weight-bold);
}
.nav_left {
  display: flex;
  gap: 25px;
}
.nav_right {
  display: flex;
  align-items: center;
  gap: 35px;
}

.nav_links ul {
  display: flex;
  list-style: none;
}

.nav_links ul > li {
  margin: 0 20px;
}

.nav_right-button {
  display: flex;
  padding: 10px 30px;
  border-radius: 25px;
  border: none;
  color: white;
  background-color: var(--cyan);
}
</style>
