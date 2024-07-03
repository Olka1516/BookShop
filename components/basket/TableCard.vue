<template>
  <div class="table-content">
    <img class="table-row-img" :src="`${book.image}`" alt="" />
    <div class="table-container">
      <div>
        <h2>{{ book.title }}</h2>
        <p>{{ book.author }}</p>
      </div>
      <div class="table-amount">
        <h3>{{ book.price }}$ / pcs.</h3>
        <div class="table-amount-inner">
          <button class="table-amount-btn" @click="changeAmount(-1)">-</button>
          <h3 class="table-amount-text">{{ totalAmount }}</h3>
          <button class="table-amount-btn" @click="changeAmount(1)">+</button>
        </div>
      </div>
    </div>
  </div>
  <div class="table-container">
    <img class="table-row-svg" src="/public/trash.svg" alt="" />
    <h2>{{ totalPrice * totalAmount }}</h2>
  </div>
</template>

<script setup lang="ts">
import type { Book } from "~/types";

const headers = ref(["Image", "Title", "Author", "Amount", "Price"]);

const props = defineProps<{ book: Book }>();
const totalAmount = ref(1);
const totalPrice = ref(props.book.price);

const changeAmount = (number: number) => {
  if (
    totalAmount.value + number <= 0 ||
    totalAmount.value + number > props.book.amount
  )
    return;
  totalAmount.value += number;
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket-table-card;
</style>
