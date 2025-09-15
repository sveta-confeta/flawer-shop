<template>
  <div class="challenges-results">
    <div class="challenges-results__wrap">
      <span class="challenges-results__title">Growing Challenges</span>
      <ul class="challenges-results__list">
        <li class="challenges-results__list-item" v-for="(item,ind) in challenges" :key="ind">
          <span class="challenges-results__list-item-el challenges-results__list-item-el--brown"></span>
          <span class="challenges-results__list-item-text">{{item.name}}</span>
        </li>
      </ul>
    </div>
    <div class="challenges-results__wrap">
      <span class="challenges-results__title">Blooming Results</span>
      <ul class="challenges-results__list">
        <li class="challenges-results__list-item" v-for="(item,ind) in results" :key="ind">
          <span class="challenges-results__list-item-el challenges-results__list-item-el--blue"></span>
          <span class="challenges-results__list-item-text">{{item.name}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
const challenges = ref([
  {name:"Fragmented root systems"},
  {name:"Nutrient deficiencies"},
  {name:"Poor pollination"},
  {name:"Inefficient growth processes"}
]);
const results = ref([
  {name:"Healthy, interconnected ecosystem"},
  {name:"Optimal nutrient absorption"},
  {name:"Vibrant cross-pollination between species"},
  {name:"Streamlined photosynthesis process"},
  {name:"Beautiful visual displays of flowering"},
  {name:"Resilient to changing environments"},
]);
</script>

<style scoped>
@import "ChallengesResults.scss";
</style>