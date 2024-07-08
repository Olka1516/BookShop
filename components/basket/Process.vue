<template>
  <div>
    <h1>Order processing</h1>
    <div class="orcess-processing">
      <div class="form">
        <h2>Personal information</h2>
        <hr />
        <div class="form-row">
          <div class="form-input">
            <InputsText
              v-model="data.firstname"
              :v="v$.firstname"
              type="First name"
            />
          </div>
          <div class="form-input">
            <InputsText
              v-model="data.lastname"
              :v="v$.lastname"
              type="Last name"
            />
          </div>
        </div>
        <div class="form-row">
          <div class="form-input">
            <InputsPhone v-model="data.phone" :v="v$.phone" type="Phone" />
          </div>
          <div class="form-input">
            <InputsText v-model="data.email" :v="v$.email" type="Email" />
          </div>
        </div>
      </div>
      <div class="form">
        <h2>Order address</h2>
        <hr />
        <div class="form-row">
          <div class="form-input">
            <InputsText v-model="data.country" :v="v$.country" type="Country" />
          </div>
          <div class="form-input">
            <InputsText v-model="data.town" :v="v$.town" type="Town" />
          </div>
        </div>
        <div class="form-input">
          <InputsText
            v-model="data.department"
            :v="v$.department"
            type="Department"
          />
        </div>
      </div>
      <div class="form">
        <h2>Order comment</h2>
        <hr />
        <div class="form-input">
          <InputsDescription
            v-model="data.comment"
            :v="v$.comment"
            type="Comment"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { email, required } from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";

const data = reactive({
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
  country: "",
  town: "",
  department: "",
  comment: "",
});

const rules = {
  firstname: { required },
  lastname: { required },
  phone: { required },
  email: { required, email },
  country: { required },
  town: { required },
  department: { required },
  comment: { required },
};

const v$ = useVuelidate(rules, data);

const submit = async () => {
  const isFormCorrect = await v$.value.$validate();
  if (!isFormCorrect) {
    return;
  }
};
</script>

<style scoped lang="scss">
@use "@/assets/index";
@include index.basket-process;
</style>
