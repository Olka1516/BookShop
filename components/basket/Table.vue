<template>
  <div>
    <h1>Shopping card items</h1>
    <div class="table">
      <div v-for="book in data" class="table-row">
        <BasketTableCard :book="book" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const data = ref([
  {
    id: "1",
    title: "Book",
    author: "Stephan King",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/1.jpg",
    amount: 4,
    price: 80,
    category: "kill",
  },
  {
    id: "2",
    title: "Book",
    author: "Stephan King",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/2.jpg",
    amount: 10,
    price: 30,
    category: "kill",
  },
]);
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket-table;
</style>
