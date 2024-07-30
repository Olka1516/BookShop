<template>
  <div class="form">
    <h1>SIGN UP</h1>
    <div class="form-input">
      <InputsText
        type="Username"
        v-model="data.username"
        :v="v$.username"
        :error="error"
      />
      <InputsErrorMessage :v="v$.username" :error="error" />
    </div>
    <div class="form-input">
      <InputsText
        type="Email"
        v-model="data.email"
        :v="v$.email"
        :error="error"
      />
      <InputsErrorMessage :v="v$.email" :error="error" />
    </div>
    <div class="form-input">
      <InputsPassword
        type="Password"
        v-model="data.password"
        :v="v$.password"
      />
      <InputsErrorMessage :v="v$.password" />
    </div>
    <div class="form-input">
      <InputsPassword
        type="Сonfirm password"
        v-model="data.confirmPassword"
        :v="v$.confirmPassword"
      />
      <InputsErrorMessage :v="v$.confirmPassword" />
    </div>
    <div class="sign-btns">
      <button @click="submit()">Submit</button>
      <NuxtLink class="no-bg-with-border" :to="LINK_TEMPLATES.SIGN_IN()"
        >Sign in</NuxtLink
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { LINK_TEMPLATES } from "~/mocks/links";
import { email, required, sameAs, minLength } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import type { TRequestError } from "~/types";

const runtimeConfig = useRuntimeConfig();

definePageMeta({
  layout: "auth",
});

const error = ref("");

const data = reactive({
  username: "olka",
  email: "olka@gmail.com",
  password: "123456",
  confirmPassword: "123456",
});

const rules = {
  username: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
  confirmPassword: {
    required,
    sameAs: sameAs(computed(() => data.password)),
  },
};

const v$ = useVuelidate(rules, data);
const submit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) return;
  try {
    await $fetch(`${runtimeConfig.public.API_BASE_URL}/auth/sign-up`, {
      method: "post",
      body: {
        username: data.username,
        email: data.email,
        password: data.password,
      },
    });
  } catch (err) {
    const message = err as TRequestError;
    error.value = message.data.message;
  }
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.sign;
</style>
