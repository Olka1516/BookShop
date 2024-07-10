<template>
  <div class="table-content">
    <img class="table-row-img" :src="`temp/${book.image}`" alt="" />
    <div class="table-container">
      <div>
        <h2>{{ book.title }}</h2>
        <p>{{ book.author }}</p>
      </div>
      <div class="table-amount">
        <h3>{{ book.price }}$ / pcs.</h3>
        <div class="table-amount-inner">
          <button class="table-amount-btn" @click="changeAmount(-1)">-</button>
          <h3 class="table-amount-text">{{ totalAmount }}</h3>
          <button class="table-amount-btn" @click="changeAmount(1)">+</button>
        </div>
      </div>
    </div>
  </div>
  <div class="table-container table-container-end">
    <button class="circle-white" @click="deleteBook()">
      <img class="table-row-svg" src="/public/trash.svg" alt="" />
    </button>
    <h2>{{ totalPrice * totalAmount }}</h2>
  </div>
</template>

<script setup lang="ts">
import type { Book } from "~/types";

const orderAmount = useState<number>("orderAmount");

const props = defineProps<{ book: Book }>();
const emit = defineEmits<{
  (e: "deleteBook", id: string): void;
}>();
const totalAmount = ref(1);
const totalPrice = ref(props.book.price);

const changeAmount = (number: number) => {
  if (
    totalAmount.value + number <= 0 ||
    totalAmount.value + number > props.book.amount
  )
    return;
  totalAmount.value += number;
  orderAmount.value += number * props.book.price;
};

const deleteBook = () => {
  let basket = localStorage.getItem("basket");
  let newBasket = JSON.parse(basket!);
  newBasket = newBasket.filter((book: Book) => book.id !== props.book.id);

  const jsonBasket = JSON.stringify(newBasket);
  localStorage.setItem("basket", jsonBasket);
  emit("deleteBook", props.book.id);
};

onMounted(() => {
  orderAmount.value += totalPrice.value;
});
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket-table-card;
</style>
