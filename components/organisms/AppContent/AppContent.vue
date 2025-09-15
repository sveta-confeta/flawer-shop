<template>
  <div class="content container-small">
  <h2 class="content__title-h2">{{titleH2}}</h2>
  <Text :text="textSection1"/>
    <important-text :text="importantText"/>
    <Text :text="textSection2"/>
    <quote-text :title="quoteTitle" :text="quoteText"/>
    <Text :text="textSection3"/>
    <h3 class="content__title-h3">{{titleH3}}</h3>
    <Text :text="textSection4"/>
  </div>

</template>

<script setup>
import ImportantText from '../../molecules/ImportantText/ImportantText.vue'
import Text from "../../atoms/Text/Text.vue";
import QuoteText from "../../molecules/QuoteText/QuoteText.vue";

const props = defineProps({
  titleH2: {
    type: String,
  },
  titleH3: {
    type: String,
  },
  importantText: {
    type: String,
  },
  quoteTitle:{
    type: String,
  },
  quoteText:{
    type: String,
  },
  textSection1: {
    type: String,
  },
  textSection2: {
    type: String,
  },
  textSection3: {
    type: String,
  },
  textSection4: {
    type: String,
  }

});

</script>

<style scoped>
@import "AppContent.scss";
</style>