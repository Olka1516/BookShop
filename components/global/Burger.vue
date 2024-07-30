<template>
  <div class="sidebar" :class="{ close: !visible }">
    <button class="circle-white back" @click="$emit('close')">
      <img src="/icons/backWhite.svg" alt="" />
    </button>
    <div class="sidebar-content">
      <div class="sidebar-navs">
        <button
          v-for="nav in navs"
          @click="$emit('navChange', nav)"
          class="button-navs"
        >
          {{ nav }}
        </button>
        <NuxtLink :to="LINK_TEMPLATES.BASKET()" class="burger-basket"
          ><img src="/icons/basketWhite.svg" alt=""
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LINK_TEMPLATES } from "~/mocks/links";

defineProps<{
  visible: boolean;
  navs: string[];
}>();
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.layout-burger;
</style>
