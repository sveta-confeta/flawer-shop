<template>
  <div class="statistics container" id="actionCards">
    <app-title :title="t('ease.title')"/>
    <Swiper class="swiper-container small-container"
            :slidesPerView="'auto'"
            :loop="false"
            :space-between="8"
            :breakpoints="{
            1440: {
              spaceBetween: 12
            }
          }">
      <SwiperSlide v-for="(card, index) in cardsData" :key="index">
        <StatsItem
            :key="index"
            :value="card.value"
            :label="card.label"
            :img="card.img"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import StatsItem from "./StatsItem.vue";
import AppTitle from "../molecules/AppTitle/AppTitle.vue";
import { computed } from 'vue';

const { te, t, tm } = useI18n();

const cardsData = computed(() => [
  {value: t('ease.cardsData.area1.value'), label: t('ease.cardsData.area1.label'), img: "/images/stats/img1.jpg" },
  {value: t('ease.cardsData.area2.value'), label: t('ease.cardsData.area2.label'), img: '/images/stats/img2.jpg'},
  {value: t('ease.cardsData.area3.value'), label: t('ease.cardsData.area3.label'), img: '/images/stats/img3.jpeg'},
  {value: t('ease.cardsData.area4.value'), label: t('ease.cardsData.area4.label'), img: '/images/stats/img4.webp'},
]);

</script>

<style scoped lang="scss">
.statistics {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
  @media(max-width: $tablet) {
    padding-top: 64px;
  }
  @media(min-width: $laptop) {
    padding-top: size-decstop(120);
  }

  .swiper-container {
    display: flex;
    overflow: hidden;
    justify-content: center;
    position: relative;
    z-index: 10;
    max-width: 1013px;
    width: 100%;
    @media(min-width: $laptop) {
      max-width: size-decstop(1220);
    }
  }
  .swiper-slide {
    width: 240px;
    min-width: 240px;
    flex-shrink: 0;
    @media(min-width: $laptop) {
      width: size-decstop(296);
      min-width: size-decstop(296);
    }
  }
}
</style>

