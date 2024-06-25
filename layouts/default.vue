<template>
  <header>
    <div class="header-navs">
      <img class="logo-img" src="/logo.png" alt="" />
      <button>Home</button>
      <button>Categories</button>
      <button>Shop</button>
    </div>
    <InputsSearch />
  </header>

  <slot />

  <footer>
    <h1 class="footer-title">Tell friends about us!</h1>
    <div class="footer-navs">
      <a href="">
        <img src="/instagram.svg" alt="" />
      </a>
      <a href="">
        <img src="/linkedin.svg" alt="" />
      </a>
      <a href="">
        <img src="/telegram.svg" alt="" />
      </a>
      <a href="">
        <img src="/twitter.svg" alt="" />
      </a>
      <a href="">
        <img src="/viber.svg" alt="" />
      </a>
      <a href="">
        <img src="/youtube.svg" alt="" />
      </a>
    </div>
    <hr />
    <div class="footer-navs">
      <button class="no-bg-no-border">Home</button>
      <button class="no-bg-no-border">Categories</button>
      <button class="no-bg-no-border">Shop</button>
    </div>
    <h4 class="footer-logo">@BookShop</h4>
  </footer>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.default;
</style>
