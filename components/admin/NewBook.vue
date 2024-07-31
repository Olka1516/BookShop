<template>
  <div class="container">
    <h1>Add new book</h1>
    <div class="content">
      <div>
        <InputsDragFile
          @update="(item) => setImage(item)"
          :v="v$.image"
          :submits="submits"
          :url="props.data?.image"
        />
      </div>
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
import type { AddBook, Book } from "~/types";

const props = defineProps<{ data?: Book }>();
const runtimeConfig = useRuntimeConfig();
const submits = ref(0);
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

const setToDefault = () => {
  data.title = "";
  data.description = "";
  data.author = "";
  data.price = null;
  data.amount = null;
  data.image = null;
  data.category = "";

  submits.value++;
};

const v$ = useVuelidate(rules, data);
const submit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  try {
    const formData = new FormData();
    formData.append("file", data.image!);
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("author", data.author);
    formData.append("price", data.price!.toString());
    formData.append("amount", data.amount!.toString());
    formData.append("category", data.category);
    if (props.data && props.data.id) {
      formData.append("id", props.data.id);
      await $fetch(`${runtimeConfig.public.API_BASE_URL}/book/update-book`, {
        method: "PUT",
        body: formData,
      });
      // here create redirection 
    } else {
      await $fetch(`${runtimeConfig.public.API_BASE_URL}/book/add-book`, {
        method: "POST",
        body: formData,
      });
      setToDefault();
    }
  } catch (err) {
    // In future here will be notification for user
    console.log("error", err);
  }
};

const setImage = (item: File) => {
  data.image = item;
};

onBeforeMount(() => {
  if (!props.data) return;
  data.amount = props.data.amount;
  data.title = props.data.title;
  data.description = props.data.description;
  data.author = props.data.author;
  data.price = props.data.price;
  data.image = props.data.image;
  data.category = props.data.category;
});
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.admin-new-book;
</style>
