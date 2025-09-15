<template>
  <div class="video">
    <span class="video__title container-small">{{ title }}</span>
    <div class="container-middle">
      <iframe width="964" height="542" :src="src" title="YouTube video player" frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
             ></iframe>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
    default: "AppVideo"
  },
  src: {
    type: String,
    required: true
  }

});
</script>

<style scoped>
@import "AppVideo.scss";
</style>