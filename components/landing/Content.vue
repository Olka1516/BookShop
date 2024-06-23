<template>
  <div class="container content-container">
    <img class="content-img content-img-1" src="/1.png" alt="" />
    <img class="content-img content-img-2" src="/2.png" alt="" />
    <img class="content-img content-img-3" src="/3.png" alt="" />
    <img class="content-img content-img-4" src="/3.png" alt="" />
    <div class="content">
      <div>
        <p>The bookworm editors</p>
        <h1>Featured Books of the <b>June</b></h1>
      </div>
      <img class="content-main-img" src="/contentBooks.png" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.content;
</style>
