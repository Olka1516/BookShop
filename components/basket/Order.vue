<template>
  <div class="order-container">
    <div>
      <h1>Order Summary</h1>
      <hr />
      <div class="order-content">
        <div class="order-row">
          <h2>Total products</h2>
          <h2>90</h2>
        </div>
        <div class="order-row">
          <h2>Total shipping</h2>
          <h2>190</h2>
        </div>
      </div>
    </div>
    <div>
      <hr />
      <div class="order-row">
        <h2>Total</h2>
        <h2>190</h2>
      </div>
      <button class="order-btn">Order</button>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket-order;
</style>
