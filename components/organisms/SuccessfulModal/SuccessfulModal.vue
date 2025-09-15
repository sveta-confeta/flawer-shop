<template>
  <div class="modal"
       v-if="show"
       @click="hideDialog"
  >
    <div @click.stop
         class="modal__content">
      <span class="modal__content-title">Thank you! <br>Your message is submitted.</span>
      <svg class="modal__content-icon" xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 512 512"><path d="M507.353,368.736l-29-13.383A39.836,39.836,0,0,0,480,344V88a40.045,40.045,0,0,0-40-40H40A40.045,40.045,0,0,0,0,88V344a40.045,40.045,0,0,0,40,40H316.9L288.41,469.47a8,8,0,0,0,10.943,9.794l208-96a8,8,0,0,0,0-14.528ZM40,64H440a24.035,24.035,0,0,1,23.6,19.652L252.137,207.612a24.021,24.021,0,0,1-24.274,0L16.4,83.652A24.035,24.035,0,0,1,40,64ZM16,344V101.963L219.771,221.415a40.039,40.039,0,0,0,40.458,0L464,101.963V344a24.18,24.18,0,0,1-.429,4.529L299.353,272.736a8,8,0,0,0-10.943,9.794L316.9,368H40A24.028,24.028,0,0,1,16,344ZM309.437,456.987,333.767,384H408a8,8,0,0,0,0-16H333.767l-24.33-72.987L484.909,376Z" fill="#000000" style="fill: rgb(245, 245, 245);"></path></svg>
      <button @click="hideDialog" type="button" aria-label="close" class="modal__content-btn"> ОK </button>
    </div>
  </div>
</template>

<script setup>
const emits = defineEmits(['update:show']);

let hideDialog = () => {
  emits('update:show', false);
}

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  }
});
</script>

<style scoped lang="scss">
@import "SuccessfulModal";
</style>