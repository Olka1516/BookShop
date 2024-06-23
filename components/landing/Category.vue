<template>
  <div class="container">
    <div class="category-navs">
      <h1>Category</h1>
      <div class="navs">
        <button class="no-bg-no-border">All genres</button>
        <button class="no-bg-no-border">Science</button>
        <button class="no-bg-no-border">Fiction</button>
        <button class="no-bg-no-border">Business</button>
        <button class="no-bg-no-border">Philosophy</button>
        <button class="no-bg-no-border">Fantasy</button>
      </div>
    </div>
    <div class="info-books">
      <div v-for="book in arrBooks">
        <DetailedInfoBooks
          :title="book.title"
          :image="book.image"
          :description="book.description"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const arrBooks = ref([
  {
    title: "Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/1.jpg",
  },
  {
    title: "Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/2.jpg",
  },
  {
    title: "Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/3.jpg",
  },
  {
    title: "Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/4.jpg",
  },
]);
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.category;
</style>
