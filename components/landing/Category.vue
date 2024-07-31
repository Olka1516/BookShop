<template>
  <div class="container" :class="{ 'light-theme': theme === 'white' }">
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
          :theme="theme"
        />
      </div>
    </div>
    <div class="category-btn-more">
      <NuxtLink :to="LINK_TEMPLATES.ABOUT()" class="no-bg-with-border"
        >See more</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { LINK_TEMPLATES } from "~/mocks/links";
import type { Book } from "~/types";

const runtimeConfig = useRuntimeConfig();
defineProps<{ theme?: string }>();
const genres = ref([
  "All genres",
  "Science",
  "Fiction",
  "Business",
  "Philosophy",
  "Fantasy",
]);

const data: Book[] = await $fetch(
  `${runtimeConfig.public.API_BASE_URL}/book/get-all-book`
);
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.category;
</style>
