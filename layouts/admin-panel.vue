<template>
  <div :class="{ 'black-bg': isBtnVisible && isSidebarVisible }"></div>
  <button class="circle-white" id="open" @click="toggleSidebar(true)">
    <img src="/icons/person.svg" alt="" />
  </button>
  <div class="panel-container">
    <Sidebar :visible="isSidebarVisible" @close="toggleSidebar(false)" :navs="allNavs" :activeNav="activeNav" @navChange="changeNav"/>
    <slot />
  </div>
</template>

<script setup lang="ts">
const allNavs = ref(["All Books", "All Orders", "New book"]);
const activeNav = useState('activeNav', () => "All Books");
const isOpen = ref(false);
const btnElement = ref<HTMLElement | null>(null);

const changeNav = (nav: string) => {
  activeNav.value = nav;
  toggleSidebar(false);
};

const toggleSidebar = (value: boolean) => {
  isOpen.value = value;
};

const isSidebarVisible = computed(() => {
  if (!btnElement.value) return false;
  const computedStyle = window.getComputedStyle(btnElement.value);
  return isOpen.value || computedStyle.display === "none";
});

const isBtnVisible = computed(() => {
  if (!btnElement.value) return false;
  const computedStyle = window.getComputedStyle(btnElement.value);
  return computedStyle.display !== "none";
});

onMounted(() => {
  btnElement.value = document.getElementById("open");
});
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.admin-sidebar;
</style>
