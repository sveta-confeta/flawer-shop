<template>
  <div class="mark-list container-small">
    <h3 class="mark-list__title"> {{ title }}
    </h3>
    <ul class="mark-list__list">
      <li class="mark-list__list-item" v-for="(item,ind) in items" :key="ind">
        <span class="mark-list__list-item-point"></span>
        <div class="mark-list__list-item-wrap">
          <span class="mark-list__list-item-title">{{ item.title }}</span>
          <span class="mark-list__list-item-text">{{ item.text }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,

  },
  items: {
    type: Array,
    required: true,
  }

});
</script>

<style scoped>
@import "MarkList.scss";
</style>