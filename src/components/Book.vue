<script setup>
import axios from "axios";
import { useCounterStore } from '../stores/counter';
import { API_HOST } from '../const';

const props = defineProps({
  book: {
    id: String,
    title: String,
    author: String,
    price: Number,
    availableStock: Number,
    isbn: String
  },
  showActions: Boolean
});

const bookId = props.book.id;

const clickToDetail = () => {
  location.href = `/book/${bookId}`
};

async function purchaseBook() {
  try {
    const response = await axios.post(`${API_HOST}books/${bookId}/purchase`);
    if (!response.data) {
      console.log('No books data')
      return;
    }

    if (response.data.message !== 'Purchase successful') {
      alert('Purchase failed');
      return;
    }

    const store = useCounterStore();
    store.increment();

  } catch (error) {
    alert(`Server error in purchaseBook: ${error.response.data.message}`);
  }
}

</script>

<template>
  <v-card class="book-container">

    <v-img class="align-end text-white" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover>
      <v-card-title>{{ book.title }}</v-card-title>
    </v-img>

    <v-card-subtitle class="book-author">
      <img class="author-icon" src="@/assets/account.svg" alt="author" width="20">
      {{ book.author }}
    </v-card-subtitle>

    <div class="book-price">NZD {{ book.price }}</div>

    <div class="book-available-stock">
      <span>Available Stock : {{ book.availableStock }}</span>
      <span class="book-isbn">ISBN {{ book.isbn }}</span>
    </div>

    <v-card-actions v-if="showActions">
      <v-btn color="orange" @click="clickToDetail">
        DETAIL
      </v-btn>
      <v-btn color="orange" @click="purchaseBook()">
        PURCHASE
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<style scoped>
.book-container .book-author {
  display: flex;
  line-height: 3rem;
  width: 320px;
}

.author-icon {
  margin-right: 1rem;
}

.book-price {
  padding-left: 1rem;
  font-weight: 500;
}

.book-available-stock {
  padding-top: .6rem;
  padding-left: 1rem;
  color: #6b6969;
  font-size: .8rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
}

.book-isbn {
  color: #999;
  padding-right: 1rem;
}
</style>