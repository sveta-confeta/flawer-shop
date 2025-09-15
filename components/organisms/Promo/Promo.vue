<template>
  <div class="promo">
    <img :src="`${$config.app.baseURL}images/promo-bg.webp`" alt="background image" class="promo-picture" />
    <div class="promo__context container">
      <h2 class="promo__context-text">{{ t('promo.experts', 'Professional experts') }}</h2>
      <div class="promo__context-title-wrap">
        <h1 class="promo__context-title">{{t('promo.title', 'Advantages of the Flower business')}}</h1>
        <img class="promo__context-underline-mob" src="/images/icons/underlining/main-underlining-mob.svg"
             alt="underline">
      </div>
      <app-button
          class="promo__context-btn"
          @click="openModalHandler"
          :text="t('header.cta')"/>
    </div>
  </div>
  <app-modal v-model:show="showModal"/>
</template>

<script setup>
import AppModal from "../AppModal/AppModal.vue";
import AppButton from "../../atoms/AppButton/AppButton.vue";

import {ref} from "vue";

const { t } = useI18n();
let showModal = ref(false);

const openModalHandler = () => {
  showModal.value = true;
}
</script>

<style>
@import 'Promo.scss';
</style>