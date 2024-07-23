<template>
  <div class="container">
    <NuxtLink class="order-exit circle-white" :to="LINK_TEMPLATES.ADMINPANEL()"
      ><img src="/icons/back.svg"
    /></NuxtLink>
    <div class="order">
      <div class="order-content">
        <div class="order-texts">
          <h1>
            {{ data.firstname }}
            {{ data.lastname }}
          </h1>
          <h1>
            {{ data.country }}
            {{ data.town }}
            {{ data.department }}
          </h1>
        </div>
        <div class="order-texts">
          <h2>
            {{ data.email }}
          </h2>
          <h2>
            {{ data.phone }}
          </h2>
        </div>
        <div v-if="data.comment" class="order-comment">
          <h3>
            {{ data.comment }}
          </h3>
        </div>
      </div>
      <hr />
      <div>
        <div v-for="book in data.orders" class="table-row">
          <BasketTableCard :book="book" admin="ADMIN" />
        </div>
      </div>
      <hr />
      <div class="order-texts">
        <h1>Summary</h1>
        <h1>{{ sum() }}$</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { LINK_TEMPLATES } from "~/mocks/links";
import type { Order } from "~/types/order";
const route = useRoute();

definePageMeta({
  layout: "admin-panel",
});
const data: Order = await $fetch("/api/" + route.params.id);

const sum = () => {
  let res = 0;
  for (let i = data.orders.length - 1; i >= 0; i--) {
    res += data.orders[i].price * data.orders[i].amount;
  }
  return res;
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.admin-order;
</style>
