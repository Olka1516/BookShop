<template>
  <div class="container content-container">
    <img
      v-for="n in 4"
      :src="`/${n}.png`"
      :class="`content-img content-img-${n}`"
    />
    <div class="content">
      <div>
        <p>The bookworm editors</p>
        <h1>Featured Books of the <b>June</b></h1>
      </div>
      <img class="content-main-img" src="/contentBooks.webp" alt="" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/index";
@include index.content;
</style>
