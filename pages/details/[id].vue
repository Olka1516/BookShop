<template>
  <div class="details">
    <div class="details-line"></div>
    <img class="details-book-img" :src="`/${dataFetch.image}`" alt="" />
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
        <div class="details-buttons">
          <button @click="buyBook()">Buy</button>
          <div v-if="role === 'ADMIN'" class="details-buttons admin-buttons">
            <NuxtLink
              :to="LINK_TEMPLATES.ADMINUPDATEBOOK(data.id)"
              class="circle-with-border"
            >
              <img src="/icons/settings.svg" alt="" />
            </NuxtLink>
            <button @click="deleteBook()" class="circle-with-border">
              <img src="/trash.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Book } from "~/types";
import { LINK_TEMPLATES } from "~/mocks/links";

const role = useState<string>("admin");
const runtimeConfig = useRuntimeConfig();
const route = useRoute();
const dataFetch = ref({
  title: "",
  image: "",
  description: "",
  author: "",
  star: 0,
  price: 0,
});

const data: Book = await $fetch(
  `${runtimeConfig.public.API_BASE_URL}/book/get-book/` + route.params.id
);

dataFetch.value = data;

const buyBook = () => {
  let basket = localStorage.getItem("basket");
  const newBasket = basket ? JSON.parse(basket) : [];
  newBasket.push(dataFetch.value);

  const jsonbasket = JSON.stringify(newBasket);
  localStorage.setItem("basket", jsonbasket);
};

const deleteBook = async () => {
  try {
    await $fetch(
      `${runtimeConfig.public.API_BASE_URL}/book/delete-book/` +
        route.params.id,
      {
        method: "DELETE",
      }
    );
  } catch (err) {
    console.log(err);
  }
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.details-book;
</style>
