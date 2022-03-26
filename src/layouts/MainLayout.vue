<template>
  <div>
    <q-form @submit.prevent="onSubmit()">
      <q-input outlined label="Phone Number" v-model="formData.phonenumber" />
      <q-input outlined label="Name" v-model="formData.Name" />
      <q-btn type="submit">submit</q-btn>
    </q-form>
  </div>
  <q-page-container>
    <router-view />
  </q-page-container>
</template>

<script>
import { mapActions } from "vuex";
import { sendMessage } from "../boot/send-whatsapp";
import { reactive } from "vue";
export default {
  setup() {
    const formData = reactive({
      Name: "",
      phonenumber: "",
    });
    const onSubmit = async () => {
      await sendMessage({ ...formData });
    };
    return { formData, onSubmit };
  },
};
</script>
