<template>
  <input
    required
    v-model="userInfo"
    @input="
      handleInput($event);
      props.v.$touch();
    "
    :class="{ invalid: isInfoInvalid() }"
  />
  <i>{{ props.type }}</i>
</template>
<script setup lang="ts">
import { ErrorMessageEnum } from "../../types";

const props = defineProps<{
  modelValue: string;
  v: {
    $invalid: boolean;
    $dirty: boolean;
    $touch: Function;
  };
  error?: string;
  type: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", val: string): void;
}>();

const userInfo = ref(props.modelValue);

const handleInput = (event: any) => {
  if (!event.target) return;
  userInfo.value = event.target.value;
  let cleaned = userInfo.value.replace(/\D/g, ""); // Видаляємо всі символи, які не є цифрами
  let formatted = "";

  // Форматуємо номер телефону динамічно
  if (cleaned.length > 0) {
    formatted = "(" + cleaned.substring(0, 3);
  }
  if (cleaned.length >= 4) {
    formatted += ") " + cleaned.substring(3, 6);
  }
  if (cleaned.length >= 7) {
    formatted += "-" + cleaned.substring(6, 10);
  }

  userInfo.value = formatted;
  emit("update:modelValue", userInfo.value);
};

const { UsernameOrPasswordWrong, EmailInUse, EmailIsNotValid, UsernameInUse } =
  ErrorMessageEnum;
const isInfoInvalid = () => {
  return (
    (props.v.$invalid && props.v.$dirty) ||
    ((props.error === EmailInUse || props.error === EmailIsNotValid) &&
      props.type === "Email") ||
    (props.error === UsernameInUse && props.type === "Username") ||
    props.error === UsernameOrPasswordWrong
  );
};

const validatePhoneNumber = () => {
  const phonePattern = /^\(\d{3}\) \d{3}-\d{4}$/;
  if (!phonePattern.test(userInfo.value)) {
    console.log("Please enter a valid phone number.");
  } else {
    console.log("non");
  }
};
</script>
<style scoped lang="scss">
@use "@/assets/index";
@include index.inputs;
</style>
