<template>
  <div class="title-section">
    <h3 class="title-section__title">{{title}}</h3>
    <span class="title-section__text">{{text}}</span>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  }

});
</script>

<style>
@import "AppTitle.scss";
</style>