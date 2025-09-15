<template>
  <a v-if="isExternal" :href="href" :target="targetValue" :download="downloadValue" :rel="relValue">
    <slot></slot>
  </a>
  <a v-else-if="isContacts" :href="href">
    <slot></slot>
  </a>
  <NuxtLink v-else :to="href">
    <slot></slot>
  </NuxtLink>
</template>

<script setup>
import { ref, computed } from 'vue';

const href = ref('');
const target = ref('');

const isExternal = computed(() => href.value.includes('http'));
const isContacts = computed(() => href.value.includes('mailto:') || href.value.includes('tel:'));
const isFile = computed(() => href.value.split(/([^\/]+)\.([^\/]+)$/)[2]);
const targetValue = computed(() => {
  if (target.value) return target.value;
  else if (isExternal.value || isFile.value) return '_blank';
  else return null;
});
const downloadValue = computed(() => isFile.value ? true : null);
const relValue = computed(() => targetValue.value === '_blank' ? 'nofollow' : null);
</script>
