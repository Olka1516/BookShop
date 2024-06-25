<template>
  <div class="details">
    <div class="details-line"></div>
    <img class="details-book-img" src="/temp/1.jpg" alt="" />
    <div class="details-content">
      <div class="details-content-texts">
        <div>
          <h1>{{ data.title }}</h1>
          <h2>{{ data.author }}</h2>
        </div>
        <div class="details-stars">
          <div class="details-star" v-for="n in 5">
            <img v-if="data.stars >= n" src="/star-full.svg" alt="" />
            <img v-else src="/star.svg" alt="" />
          </div>
        </div>
        <p>{{ data.description }}</p>
      </div>
      <div class="details-buy">
        <h2>${{ data.price }}</h2>
        <button>Buy</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

const data = reactive({
  id: "2",
  title: "Book about unicorns",
  author: "Stephan King",
  stars: 3,
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi. 
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur veniam aliquid ad porro odit doloremque ex culpa totam dolor explicabo, quis quia maxime nisi id eligendi aspernatur nihil, neque commodi.`,
  image: "/temp/2.jpg",
  price: "24",
});
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.details-book;
</style>
