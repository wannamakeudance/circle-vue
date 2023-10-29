<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";
import Cart from '../components/Cart.vue';
import Book from '../components/Book.vue';
import { API_GET_BOOKS } from '../const';

onMounted(() => {
  fetchBooks();
});

let books = ref([]);

async function fetchBooks() {
  try {
    const response = await axios.get(API_GET_BOOKS);
    if (!response.data) {
      console.log('No books data')
      return;
    }

    books.value = response.data.books;
  } catch (error) {
    alert(`Server error in fetchBooks: ${error}`);
  }
}
</script>

<template>
  <div class="books-list">
    <Book v-for="book in books" :book="book" :showActions="true">
    </Book>
  </div>
  <Cart></Cart>
</template>

<style scoped>
.books-list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
}

@media (max-width: 1024px) {
  .books-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 548px) {
  .books-list {
    grid-template-columns: 1fr;
  }
}
</style>

