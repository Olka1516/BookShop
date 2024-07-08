<template>
  <div class="info-content">
    <img class="book-img" :src="`${props.image}`" alt="" />
    <div class="info-container">
      <div class="info-texts">
        <h1>
          {{ props.title }}
        </h1>
        <p>{{ props.description }}</p>
      </div>
      <NuxtLink :to="LINK_TEMPLATES.ABOUT()" class="no-bg-no-border">Details</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LINK_TEMPLATES } from "~/mocks/links";
const props = defineProps<{
  id: string;
  title: string;
  image: string;
  description: string;
}>();
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.info-books;
</style>
