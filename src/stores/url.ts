import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", () => {
  const url = ref(0);
  const searchResult = ref()
 
  async function shortenUrl(url) {
    try {
      const response = await axios.get('https://spoo.me/');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return { url, searchResult, increment };
});
