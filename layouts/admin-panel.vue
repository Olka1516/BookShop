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

    <slot />
  </div>
</template>

<script setup lang="ts">
const allNavs = ref(["All Books", "All Orders", "New book"]);
const activeNav = useState("activeNav", () => "All Books");

const changeNav = (nav: string) => {
  activeNav.value = nav;
};

const isActive = (nav: string) => {
  return nav === activeNav.value;
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.admin-sidebar;
</style>
