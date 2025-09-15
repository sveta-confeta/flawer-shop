<template>
  <div class="number-list container-small">
    <h3 class="number-list__title">{{title}}
    </h3>
  <ol class="number-list__list">
    <li class="number-list__list-item" v-for="(item,ind) in items" :key="ind">
      <span class="number-list__list-item-text">{{item.text}}</span>
    </li>
  </ol>
</div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
  },
  items: {
    type: Array,
    required: true
  }

});
</script>

<style scoped>
@import "NumberList.scss";
</style>