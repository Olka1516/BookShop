<template>
  <header>
    <div class="header-navs">
      <img class="logo-img" src="/logo.png" alt="" />
      <NuxtLink
        v-for="nav in navs"
        :to="nav()"
        :class="{ button: nav.name !== 'SIGN_UP' }"
        >{{
          (nav.name.charAt(0).toUpperCase() + nav.name.slice(1).toLowerCase())
            .split("_")
            .join(" ")
        }}</NuxtLink
      >
    </div>
    <div class="header-navs">
      <InputsSearch />
      <NuxtLink :to="LINK_TEMPLATES.BASKET()"
        ><img src="/basket.svg" alt=""
      /></NuxtLink>
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
      <NuxtLink
        class="no-bg-no-border"
        v-for="nav in navs.slice(0, 2)"
        :to="nav()"
        >{{
          nav.name.charAt(0).toUpperCase() + nav.name.slice(1).toLowerCase()
        }}</NuxtLink
      >
    </div>
    <h4 class="footer-logo">@BookShop</h4>
  </footer>
</template>

<script setup lang="ts">
import { LINK_TEMPLATES } from "~/mocks/links";

const navs = ref([
  LINK_TEMPLATES.HOME,
  LINK_TEMPLATES.CATEGORIES,
  LINK_TEMPLATES.SIGN_IN,
  LINK_TEMPLATES.SIGN_UP,
]);
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
