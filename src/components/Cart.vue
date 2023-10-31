<script setup>
import { useCounterStore } from '../stores/counter';
import CartHeartIcon from '../components/icons/CartHeartIcon.vue';
const store = useCounterStore();

</script>
<template>
    <div class="cart-container">
        <div v-if="store.count" class="red-circle">
            {{ store.count }}
        </div>
        <CartHeartIcon />
    </div>
</template>
<style scoped>
.red-circle {
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    font-weight: bold;
    background: red;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    position: absolute;
    bottom: 3rem;
    z-index: 1;
}

.cart-container {
    position: fixed;
    bottom: 3rem;
    right: 1rem;
}
</style>