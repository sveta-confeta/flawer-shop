<template>
  <div class="main-page">
    <Promo/>
    <lazy-stats-section/>
    <lazy-why-we/>
    <lazy-case-cards/>
    <lazy-news-cards/>
  </div>
</template>

<script setup lang="ts">
import LazyCaseCards from "../components/organisms/CaseCards/LazyCaseCards.vue";
import Promo from "../components/organisms/Promo/Promo.vue";
import LazyWhyWe from "../components/organisms/WhyWe/LazyWhyWe.vue";
import LazyNewsCards from "../components/organisms/NewsCards/LazyNewsCards.vue";
import LazyStatsSection from "../components/organisms/LazyStatsSection.vue";

</script>

<style lang="scss">
@import "assets/scss/breakpoints";
@import "assets/scss/scale";
.main-page {
  background:var( --bg);
  border-radius: 0 0 50px 50px;
  @media (max-width: $tablet) {
    border-radius: 0 0 16px 16px;
  }
  @media(min-width: $laptop) {
    border-bottom-left-radius: size-decstop(50);
    border-bottom-right-radius: size-decstop(50);
  }
}
</style>