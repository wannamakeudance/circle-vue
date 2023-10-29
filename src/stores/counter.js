import { ref } from "vue";
import { defineStore } from "pinia";

// TODO: The reason why we use state management is that we want to reuse cart count in different pages in the future
export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);
  function increment() {
    count.value++;
  }

  return { count, increment };
});
