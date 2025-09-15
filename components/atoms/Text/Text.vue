<template>
    <span class="text">{{text}}</span>
</template>

<script setup>
const props = defineProps({
  text: {
    type: String,
    required:true
  }

});
</script>

<style scoped>
@import "Text.scss";
</style>