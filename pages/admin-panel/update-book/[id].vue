<template>
  <AdminNewBook :data="data" />
</template>

<script setup lang="ts">
import type { Book } from '~/types';

const runtimeConfig = useRuntimeConfig();
definePageMeta({
  layout: false,
});

const route = useRoute();

const data: Book = await $fetch(
  `${runtimeConfig.public.API_BASE_URL}/book/get-book/` + route.params.id
);
</script>

<style scoped lang="scss">
@use "@/assets/index";
</style>
