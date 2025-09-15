<template>
  <div class="case-card" :class="cardClass" v-for="card in cards" :key="card.id">
    <NuxtLink :to="'/case/' + card.id" class="case-card__link">
      <img :src="card.src" :alt="card.alt" class="case-picture" />
      <span class="case-card__title">{{ card.title }}</span>
      <span class="case-card__text">{{ card.tags }}</span>
    </NuxtLink>

  </div>
</template>
<script setup lang="ts">
import {PropType, ref} from "vue";
import type { ICard } from '../../../stores/caseCards';

const props = defineProps({
  cards: {
    type:  Array as PropType<ICard[]>,
    required: true,
    default: () => []
  },
  cardClass: String

});

</script>

<style>
@import 'CaseCard.scss';
</style>