<template>
  <div class="sidebar" :class="{ close: !visible }">
    <button class="circle-white back" @click="$emit('close')">
      <img src="/icons/backWhite.svg" alt="" />
    </button>
    <div class="sidebar-content">
      <h1>Hello, Admin!</h1>
      <div class="sidebar-navs">
        <button
          v-for="nav in navs"
          :key="nav"
          :class="{ active: nav === activeNav }"
          @click="$emit('navChange', nav)"
          class="button-navs"
        >
          <div v-if="nav === activeNav" class="active-left-round"></div>
          {{ nav }}
        </button>
      </div>
      <button class="sidebar-exit">Log out</button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  visible: boolean;
  navs: string[];
  activeNav: string;
}>();
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.admin-sidebar;
</style>
