<template>
  <div class="container">
    <h1>Add new book</h1>
    <div class="content">
      <div><InputsDragFile @update="(item) => setImage(item)" :v="v$.image" /></div>
      <div class="form">
        <div class="form-input">
          <InputsText type="Title" v-model="data.title" :v="v$.title" />
          <InputsErrorMessage :v="v$.title" />
        </div>
        <div class="form-input">
          <InputsDescription
            type="Description"
            v-model="data.description"
            :v="v$.description"
          />
          <InputsErrorMessage :v="v$.description" />
        </div>
        <div class="form-input">
          <InputsText type="Author" v-model="data.author" :v="v$.author" />
          <InputsErrorMessage :v="v$.author" />
        </div>
        <div class="form-input">
          <InputsText
            type="Category"
            v-model="data.category"
            :v="v$.category"
          />
          <InputsErrorMessage :v="v$.category" />
        </div>
        <div class="form-input">
          <InputsNumber type="Price" v-model="data.price" :v="v$.price" />
          <InputsErrorMessage :v="v$.price" />
        </div>
        <div class="form-input">
          <InputsNumber type="Amount" v-model="data.amount" :v="v$.amount" />
          <InputsErrorMessage :v="v$.amount" />
        </div>
      </div>
    </div>
    <button @click="submit()">Submit</button>
  </div>
</template>

<script setup lang="ts">
import { required, maxLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { AddBook } from "~/types";

const data: AddBook = reactive({
  title: "",
  description: "",
  author: "",
  price: null,
  amount: null,
  image: null,
  category: "",
});

const rules = {
  title: { required, maxLength: maxLength(50) },
  description: { required, maxLength: maxLength(255) },
  author: { required },
  price: { required },
  amount: { required },
  image: { required },
  category: { required },
};

const v$ = useVuelidate(rules, data);
const submit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
};

const setImage = (item: File) => {
  data.image = item
}
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.admin-new-book;
</style>
