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
      <div v-for="book in data">
        <DetailedInfoBooks
          :id="book.id"
          :title="book.title"
          :image="book.image"
          :description="book.description"
        />
      </div>
    </div>
    <div class="category-btn-more">
      <NuxtLink :to="LINK_TEMPLATES.ABOUT()" class="no-bg-with-border">See more</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LINK_TEMPLATES } from "~/mocks/links";
import { data } from "~/mocks/mock";
const genres = ref([
  "All genres",
  "Science",
  "Fiction",
  "Business",
  "Philosophy",
  "Fantasy",
]);
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.category;
</style>
