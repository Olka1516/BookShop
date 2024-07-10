<template>
  <div>
    <h1>Shopping card items</h1>
    <div class="table" v-if="newData.length">
      <div v-for="book in newData" class="table-row">
        <BasketTableCard :book="book" @deleteBook="(id) => deleteBook(id)" />
      </div>
    </div>
    <div v-else class="table">
      <h2 class="table-row table-empty">You do not choose your books</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from "~/types";

const newData = ref([]);
onMounted(() => {
  const data = localStorage.getItem("basket");
  newData.value = data ? JSON.parse(data) : [];
});

const deleteBook = (id: string) => {
  newData.value = newData.value.filter((book: Book) => book.id !== id);
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket-table;
</style>
