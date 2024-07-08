<template>
  <div class="form">
    <h1>SIGN UP</h1>
    <div class="form-input">
      <InputsText type="Username" v-model="data.username" :v="v$.username" />
    </div>
    <div class="form-input">
      <InputsText type="Email" v-model="data.email" :v="v$.email" />
    </div>
    <div class="form-input">
      <InputsPassword
        type="Password"
        v-model="data.password"
        :v="v$.password"
      />
    </div>
    <div class="form-input">
      <InputsPassword
        type="Сonfirm password"
        v-model="data.confirmPassword"
        :v="v$.confirmPassword"
      />
    </div>
    <div class="sign-btns">
      <button>Submit</button>
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
definePageMeta({
  layout: "auth",
});

const data = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
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
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.sign;
</style>
