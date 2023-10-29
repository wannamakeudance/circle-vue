<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
import { API_GET_BOOKS } from '../const';
import Book from '../components/Book.vue';

onMounted(() => {
  fetchOneBook();
});

let book = reactive({
  id: 1,
  title: '',
  author: '',
  isbn: '',
  price: 0,
  availableStock: 15
});
let loaded = ref(false);

async function fetchOneBook() {
  try {
    const route = useRoute();
    const url = `${API_GET_BOOKS}/${route.params.id}`
    const response = await axios.get(url);

    if (!response.data) {
      console.log('No books data')
      return;
    }

    for (let key in book) {
      book[key] = response.data.book[key];
    }

    loaded.value = true;

  } catch (error) {
    alert(`Server error in fetchOneBook: ${error}`);
  }
}

</script>
<template>
  <Book v-if="loaded" class="book-detail" :book="book">
  </Book>
  <v-progress-circular v-else="loaded" :size="70" color="red" indeterminate></v-progress-circular>
</template>

<style scoped>
.book-detail {
  width: 80vw;
  padding-bottom: 4rem;
}
</style>
