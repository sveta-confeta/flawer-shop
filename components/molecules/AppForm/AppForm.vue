
<template>
  <Form
      @submit="submitForm"
      :validation-schema="schema"
      v-slot="{ errors, meta }"
      class="form"
  >
    <div class="form-group">
      <label for="email">Email</label>
      <Field
          id="email"
          name="email"
          type="email"
          :placeholder="t('form.email.placeholder')"
          class="form-input"
          :class="{ 'invalid': errors.email }"
      />
      <ErrorMessage name="email" class="form-error"/>
    </div>

    <div class="form-group">
      <label for="name">Name</label>
      <Field
          id="name"
          name="name"
          type="text"
          :placeholder=" t('form.name.placeholder')"
          class="form-input"
          :class="{ 'invalid': errors.name }"
      />
      <ErrorMessage name="name" class="form-error"/>
    </div>

    <div class="form-group">
      <label for="message">Message</label>
      <Field
          id="message"
          name="message"
          as="textarea"
          :placeholder="t('form.message.placeholder')"
          class="form-input textarea"
          :class="{ 'invalid': errors.message }"
      />
      <ErrorMessage name="message" class="form-error"/>
    </div>

    <AppButton
        class="form-btn"
        type="submit"
        :text="t('form.submit', 'Submit')"
        :disabled="!meta.valid"
    />
  </Form>

  <successful-modal v-model:show="showSuccessfulModal"/>
  <unsuccessful-modal v-model:show="showUnsuccessfulModal"/>
</template>

<script setup>
import { ref, watch } from "vue";
import { Form, Field, ErrorMessage } from "vee-validate";
import * as yup from "yup";
import AppButton from "../../atoms/AppButton/AppButton.vue";
import SuccessfulModal from "../../organisms/SuccessfulModal/SuccessfulModal.vue";
import UnsuccessfulModal from "../../organisms/UnsuccessfulModal/UnsuccessfulModal.vue";

const { t } = useI18n();

let showSuccessfulModal = ref(false);
let showUnsuccessfulModal = ref(false);

// Валидационная схема
const schema = yup.object({
  email: yup.string().email(t('form.email.error')).required(t('form.email.required')),
  name: yup.string().required(t('form.name.error')),
  message: yup.string().required(t('form.message.error')),
});

const submitForm = async (values, { resetForm, setErrors }) => {
  console.log('Form values:', values);

  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log('Form submitted successfully');
    showSuccessfulModal.value = true;
    resetForm();

  } catch (error) {
    console.error('Form submission error:', error);
    showUnsuccessfulModal.value = true;
  }
};

</script>

<style scoped >
@import "AppForm.scss";


</style>
