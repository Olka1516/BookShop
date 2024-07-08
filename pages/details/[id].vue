<template>
  <div class="details">
    <div class="details-line"></div>
    <img class="details-book-img" :src="`/temp/${dataFetch.image}`" alt="" />
    <div class="details-content">
      <div class="details-content-texts">
        <div>
          <h1>{{ dataFetch.title }}</h1>
          <h2>{{ dataFetch.author }}</h2>
        </div>
        <div class="details-stars">
          <div class="details-star" v-for="n in 5">
            <img v-if="dataFetch.star >= n" src="/star-full.svg" alt="" />
            <img v-else src="/star.svg" alt="" />
          </div>
        </div>
        <p>{{ dataFetch.description }}</p>
      </div>
      <div class="details-buy">
        <h2>${{ dataFetch.price }}</h2>
        <button>Buy</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from "~/types";

const route = useRoute();
const dataFetch: Book = await $fetch(
  `${process.env.API_URL}/book/get-book/` + route.params.id
);
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.details-book;
</style>
