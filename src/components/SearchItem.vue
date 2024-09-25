<script lang="ts">
import { ref } from "vue";
export default {
  setup() {
    const url = ref("");
    const shortenUrl = (url) => {
      return url;
    };
    return {
      url,
      shortenUrl,
    };
  },
};
</script>

<template>
  <div class="SearchItem">
    <input
      class="SearchItem_input"
      type="text"
      placeholder="Shorten a link here..."
      v-model="url"
    />
    <button @click="shortenUrl" class="SearchItem_button">Shorten it</button>
  </div>
</template>

<style>
.SearchItem {
  background-image: url("../assets/images/bg-shorten-desktop.svg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;

  min-width: 100%;
  background-color: var(--dark-violet);
  margin-top: 200px;
  display: flex;
  gap: 20px;
  padding: 50px;
  border-radius: 10px;
}

.SearchItem_input {
  flex: 1;
  padding: 20px;
  border-radius: 10px;
  outline: none;
}
.SearchItem_button {
  display: flex;
  justify-content: center;
  padding: 20px 50px;
  background: var(--cyan);
  color: white;
  border-radius: 10px;
  border: none;
}
</style>
