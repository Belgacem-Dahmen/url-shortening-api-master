<script lang="ts" setup>

import { ref } from "vue";
import axiosInstance from '../axios/axiosConfig.js';

// Référence pour stocker l'URL
const user_url = ref<string>('');

const getLinks = async () => {
  const options = {
    url: '/urls?limit=2&page=1&order=date',
    method: 'GET',

  }
  try {
    const response = await axiosInstance(options);
    console.log('Réponse:', response.data);
  } catch (error) {
    console.error('Erreur:', error);
  }
}

const shortenUrl = async (text: string) => {
  const options = {
    method: 'POST',
    url: 'api/url/add',
    data: {
      url: text,


    }
  };

  try {
    const response = await axiosInstance(options);
    console.log('Réponse:', response.data);
  } catch (error) {
    console.error('Erreur:', error);
  }
};


</script>


<template>
  <div class="SearchItem">
    <input class="SearchItem_input" type="text" placeholder="Shorten a link here..." v-model="user_url" />
    <button @click="shortenUrl(user_url)" class="SearchItem_button">Shorten it</button>
    <button @click="getLinks">get Links</button>
  </div>
  <div v-if="user_url" class="searchResult">
    <p class="searchResult_url">{{ user_url }} </p>
    <div class="searchResult_actions">
      <p class="searchResult_shortenedurl"> bitly.123.com</p>
      <button class="searchResult_button">copy</button>
    </div>
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

.searchResult {
  color: white;
  min-width: 100%;
  background-color: gray;
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding: 15px;
  border-radius: 10px;
}

.searchResult_actions {
  display: flex;
  gap: 20px;
  align-items: center;
}

.searchResult_shortenedurl {
  color: var(--cyan);
}

.searchResult_button {
  background-color: var(--cyan);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
}
</style>
