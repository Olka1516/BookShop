<template>
  <div class="order-container">
    <div class="order-container-inner">
      <h1>Order Summary</h1>
      <hr />
      <div class="order-content">
        <div class="order-row">
          <h2>Total products</h2>
          <h2>{{ orderAmount }}</h2>
        </div>
        <div class="order-row">
          <h2>Total shipping</h2>
          <h2>For the customer's account</h2>
        </div>
      </div>
    </div>
    <div class="order-container-inner">
      <hr />
      <div class="order-row">
        <h2>Total</h2>
        <h2>{{ orderAmount }}</h2>
      </div>
      <button class="order-btn">Order</button>
    </div>
  </div>
</template>

<script setup lang="ts">
const orderAmount = useState("orderAmount", () => 0);
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket-order;
</style>
