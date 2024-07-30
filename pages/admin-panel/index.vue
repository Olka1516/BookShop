<template>
  <div class="panel-content">
    <LandingCategory v-if="activeNav === 'All Books'" theme="white" />
    <AdminOrders v-if="activeNav === 'All Orders'" />
    <AdminNewBook v-if="activeNav === 'New book'" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "admin-panel",
});

const activeNav = useState<string>("activeNav");
</script>

<style scoped lang="scss">
@use "@/assets/index";
</style>
