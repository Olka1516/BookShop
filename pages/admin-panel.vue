<template>
  <div class="panel-container">
    <div class="sidebar">
      <div class="sidebar-content">
        <h1>Hello, Admin!</h1>
        <div class="sidebar-navs">
          <button
            v-for="nav in allNavs"
            :class="{ active: isActive(nav) }"
            @click="changeNav(nav)"
            class="button-navs"
          >
            <div v-if="isActive(nav)" class="active-left-round"></div>
            {{ nav }}
          </button>
        </div>
        <button class="sidebar-exit">Log out</button>
      </div>
    </div>
    <div class="panel-content">
      <LandingCategory v-if="activeNav === 'All books'" theme="white" />
      <AdminOrders v-if="activeNav === 'All Orders'" />
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();

definePageMeta({
  layout: false,
});

console.log(route.params.id);
const allNavs = ref(["All books", "All Orders"]);
const activeNav = ref("All books");

const changeNav = (nav: string) => {
  activeNav.value = nav;
};

const isActive = (nav: string) => {
  return nav === activeNav.value;
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.admin-panel;
</style>
