<template>
  <div class="error">
    <span v-if="(props.v.$error && props.v.$dirty) || props.error">
      <small class="text-error">{{ getError() }}</small>
    </span>
  </div>
</template>

<script setup lang="ts">
import { ErrorMessageEnum } from "~/types";
import type { ErrorObject } from "@vuelidate/core";

const props = defineProps<{
  v: {
    $error: boolean;
    $dirty: boolean;
    $errors: ErrorObject[];
    $path: string;
  };
  error?: string;
}>();

const {
  EmailIsNotValid,
  IsRequired,
  EmailInUse,
  PasswordMinLength,
  PasswordIsEqual,
  UsernameInUse,
  UsernameOrPasswordWrong,
} = ErrorMessageEnum;

const getError = () => {
  const { $message: message } = props.v.$errors?.[0] ?? { $message: null };
  switch (props.v.$path) {
    case "email":
      if (message === EmailIsNotValid) return EmailIsNotValid;
      else if (message === IsRequired) return "Email is required";
      else if (props.error === EmailInUse) return "Email is already in use!";
      break;
    case "password":
      if (message === IsRequired) return "Password is required";
      else if (message === PasswordMinLength) return PasswordMinLength;
      else if (props.error === UsernameOrPasswordWrong)
        return "Username or password is wrong";
      break;
    case "confirmPassword":
      if (message === IsRequired) return "Password is required";
      else if (message === PasswordIsEqual)
        return "The value must be equal to the password";
      break;
    case "username":
      if (message === IsRequired) return "Username is required";
      else if (props.error === UsernameInUse)
        return "Username is already taken!";
      break;
  }
};
</script>
<style lang="scss" scoped>
@use "@/assets/index";
@include index.error;
</style>
