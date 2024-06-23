<template>
  <div class="container">
    <h1>New Books</h1>
    <div class="carousel">
      <button class="circle-white arrow arrow-left" @click="prev">
        <img src="/arrow-left.svg" alt="Previous" />
      </button>
      <div class='carousel-content'>

        <div
        v-for="(n, index) in arrImg.slice(firstIndex, lastIndex)"
        :key="index"
        class="carousel-container"
        :id="`carousel-${index + 1}`"
        @="setTransform(index)"
        >
        <img class="carousel-books" :src="`/temp/${n}.jpg`" alt="Book Image" />
      </div>
    </div>
      <button class="circle-white arrow arrow-right" @click="next">
        <img src="/arrow-right.svg" alt="Next" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const arrImg = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
const firstIndex = ref(0);
const lastIndex = ref(7);

const arr = ref([-3, -2, -1, 0, 1, 2, 3]);

const setTransform = async (index: number) => {
  const img = document.getElementById("carousel-" + (index + 1));
  if (img) {
    img.style.transform = `translate3d(0,0, ${
      -Math.abs(arr.value[index]) * 200
    }px)`;
    if (arr.value[index] !== 0) {
      img.style.zIndex = `${-Math.abs(arr.value[index])}`
      img.style.opacity = `${1 - 1 / (5 + Math.abs(arr.value[index]))}`;
    }
  }
};

const prev = () => {
  if (firstIndex.value === 0) return;
  firstIndex.value -= 1;
  lastIndex.value -= 1;
};

const next = () => {
  if (lastIndex.value === arrImg.value.length) return;
  firstIndex.value += 1;
  lastIndex.value += 1;
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.carousel;
</style>
