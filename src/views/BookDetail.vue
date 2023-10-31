<script setup>
import { reactive, ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';
import axios from 'axios';
import { API_GET_BOOKS } from '../const';
import Book from '../components/Book.vue';
import HomeIcon from '../components/icons/HomeIcon.vue';

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
  <div v-if="loaded">
    <router-link class="back-home text-orange" to="/">
      <HomeIcon class="home-icon" /> Back
    </router-link>
    <Book class="book-detail" :book="book" />
  </div>
  <v-progress-circular v-else="loaded" :size="70" color="red" indeterminate />
</template>

<style scoped>
.book-detail {
  width: 80vw;
  padding-bottom: 2rem;
  margin-bottom: 2rem;
}

.back-home {
  display: flex;
  align-items: center;
  width: 5rem;
  margin: 1rem 0 1rem 0;
  padding: .2rem 0 .2rem;
}

.home-icon {
  margin-right: 1rem;
}
</style>
