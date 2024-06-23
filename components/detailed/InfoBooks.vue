<template>
  <div class="container">
    <img class="book-img" :src="`${props.image}`" alt="" />
    <div class="info-container">
      {{ props.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  title: string;
  image: string;
  description: string;
}>();
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.info-books;
</style>
