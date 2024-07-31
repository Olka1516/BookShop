<template>
  <div :class="{ 'black-bg': isOpen }"></div>
  <header>
    <div class="header-navs">
      <img class="logo-img" src="/logo.png" alt="" />
      <button class="header-empty" v-for="nav in navs">{{ nav }}</button>
    </div>
    <div class="header-navs">
      <InputsSearch />
      <NuxtLink :to="LINK_TEMPLATES.BASKET()" class="header-empty"
        ><img src="/icons/basket.svg" alt=""
      /></NuxtLink>
      <button class="circle-white" id="open" @click="toggleSidebar(true)">
        <img src="/icons/person.svg" alt="" />
      </button>
    </div>
  </header>
  <Burger :visible="isOpen" @close="toggleSidebar(false)" :navs="navs" />

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
import { LINK_TEMPLATES } from "~/mocks/links";

const navs = ref(["Home", "Categories", "Shop"]);
const mediaNavs = ref([
  "instagram",
  "linkedin",
  "telegram",
  "twitter",
  "viber",
  "youtube",
]);

const isOpen = ref(false);

const toggleSidebar = (value: boolean) => {
  isOpen.value = value;
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.default;
</style>
