<template>
  <div class="container">
    <div class="category-navs">
      <h1>Category</h1>
      <div class="navs">
        <div v-for="genre in genres">
          <button class="no-bg-no-border">{{ genre }}</button>
        </div>
      </div>
    </div>
    <div class="info-books">
      <div v-for="book in arrBooks">
        <DetailedInfoBooks
          :id="book.id"
          :title="book.title"
          :image="book.image"
          :description="book.description"
        />
      </div>
    </div>
    <div class="category-btn-more">
      <NuxtLink to="/about" class="no-bg-with-border">See more</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
const genres = ref([
  "All genres",
  "Science",
  "Fiction",
  "Business",
  "Philosophy",
  "Fantasy",
]);
const arrBooks = ref([
  {
    id: "1",
    title: "Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/1.jpg",
  },
  {
    id: "2",
    title: "Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/2.jpg",
  },
  {
    id: "3",
    title: "Book",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.",
    image: "/temp/3.jpg",
  },
  {
    id: "4",
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
