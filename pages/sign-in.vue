<template>
  <div class="form">
    <h1>SIGN IN</h1>
    <div class="form-input">
      <InputsText type="Username" v-model="data.username" :v="v$.username" />
      <InputsErrorMessage :v="v$.username" :error="error" />
    </div>
    <div class="form-input">
      <InputsPassword
        type="Password"
        v-model="data.password"
        :v="v$.password"
      />
      <InputsErrorMessage :v="v$.password" :error="error" />
    </div>
    <div class="sign-btns">
      <button @click="submit()">Submit</button>
      <NuxtLink class="no-bg-with-border" :to="LINK_TEMPLATES.SIGN_UP()"
        >Sign Up</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { LINK_TEMPLATES } from "~/mocks/links";
import { required, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
definePageMeta({
  layout: "auth",
});

const error = ref("");
const data = reactive({
  username: "",
  password: "",
});

const rules = {
  username: { required },
  password: { required, minLength: minLength(6) },
};

const v$ = useVuelidate(rules, data);
const submit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.sign;
</style>
