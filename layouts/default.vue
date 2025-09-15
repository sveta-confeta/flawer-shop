<template>
  <div>
    <mobile-menu v-show="mobileMenu" @toggleMobileMenu="toggleMobileMenu"/>
    <Header @toggleMobileMenu="toggleMobileMenu" :isMobileMenu="mobileMenu"/>
    <div>
      <slot/>
    </div>
    <lazy-footer/>
  </div>

</template>

<script setup>
import LazyFooter from "../components/organisms/Footer/LazyFooter.vue";
import Header from "../components/organisms/Header/Header.vue";
import MobileMenu from "../components/organisms/MobileMenu/MobileMenu.vue";

import {ref, watch, onMounted} from "vue";
import { useI18n } from '#imports';

const mobileMenu = ref(false);

const toggleMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
}

const checkMobileMenu = () => {
  if (mobileMenu.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
}
watch(mobileMenu, checkMobileMenu);

const { locale } = useI18n();
onMounted(() => {
  if (process.client) {
    document.documentElement.setAttribute('lang', locale.value);
  }
});
</script>

<style>
</style>
