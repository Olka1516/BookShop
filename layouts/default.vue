<template>
  <header>
    <div class="header-navs">
      <img class="logo-img" src="/logo.png" alt="" />
      <button v-for="nav in navs">{{ nav }}</button>
    </div>
    <div class="header-navs">
      <InputsSearch />
      <NuxtLink to="/basket"><img src="/basket.svg" alt="" /></NuxtLink>
    </div>
  </header>

  <slot />

  <footer>
    <h1 class="footer-title">Tell friends about us!</h1>
    <div class="footer-navs">
      <a v-for="media in mediaNavs" href="">
        <img :src="`/${media}.svg`" :alt="media" />
      </a>
    </div>
    <hr />
    <div class="footer-navs">
      <button class="no-bg-no-border" v-for="nav in navs">{{ nav }}</button>
    </div>
    <h4 class="footer-logo">@BookShop</h4>
  </footer>
</template>

<script setup lang="ts">
const navs = ref(["Home", "Categories", "Shop"]);
const mediaNavs = ref([
  "instagram",
  "linkedin",
  "telegram",
  "twitter",
  "viber",
  "youtube",
]);
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.default;
</style>
