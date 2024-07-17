<template>
  <div class="container">
    <div class="orders-content">
      <h1>Orders</h1>
    </div>
    <div class="table-header">
      <h2 v-for="nav in tableHeader">{{ nav }}</h2>
    </div>
    <div class="table-items">
      <div v-for="order in data" class="table-items-content">
        <div v-for="item in order">
          <h3 v-if="!Array.isArray(item) && order.comment !== item && order.id !== item">
            {{ item }}
          </h3>
        </div>
        <NuxtLink class="circle-white" :to="LINK_TEMPLATES.ADMINTABLE(order.id)"
          ><img src="/link.svg"
        /></NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data: data } = await useFetch("/api/orders");
import { LINK_TEMPLATES } from "~/mocks/links";

const tableHeader = ref([
  "First name",
  "Last name",
  "Phone",
  "Email",
  "Country",
  "Town",
  "Department",
  "Action",
]);
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.orders;
</style>
