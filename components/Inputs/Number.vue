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
const props = defineProps<{
  modelValue: number | null | string;
  v: {
    $invalid: boolean;
    $dirty: boolean;
    $touch: Function;
  };
  error?: string;
  type: string;
}>();

const emit = defineEmits<{
  (e: "update:modelValue", val: number): void;
}>();

const userInfo = ref(props.modelValue);

const handleInput = (event: any) => {
  if (!event.target) return;
  if (isNaN(+event.target.value)) {
    userInfo.value = event.target.value.slice(0, event.target.value.length - 1);
    return;
  }
  if (event.target.value[0] === "0") {
    userInfo.value = "";
    return;
  }
  userInfo.value = event.target.value;
  emit("update:modelValue", +event.target.value);
};

const isInfoInvalid = () => {
  return props.v.$invalid && props.v.$dirty;
};

watch(
  () => props.modelValue,
  () => {
    userInfo.value = props.modelValue;
    props.v.$dirty = false;
  }
);
</script>
<style scoped lang="scss">
@use "@/assets/index";
@include index.inputs;
</style>
