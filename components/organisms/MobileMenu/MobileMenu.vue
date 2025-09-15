<template>
  <div class="mobile-menu">
    <nav class="mobile-menu__nav">
      <ul class="mobile-menu__list">
        <li class="mobile-menu__item" v-for="(item, ind) in menu" :key="ind">
          <a @click="scrollToComponent(item.path)">{{ item.name }}</a>
        </li>
      </ul>
    </nav>
    <app-button :text="t('header.cta')"
                @click="openModalHandler"
                class="mobile-menu__btn"/>

    <div class="mobile-menu__contact">
      <a class="mobile-menu__contact-number" href="tel:+112345678">+1 408 462 5586</a>
      <a class="mobile-menu__contact-mail" href="mailto:zazhogin@releasebooster.com">zazhogin@releasebooster.com</a>
    </div>
    <app-modal v-model:show="showModal"/>
  </div>
</template>

<script setup>
import AppButton from "../../atoms/AppButton/AppButton.vue";
import AppModal from "../AppModal/AppModal.vue";
const { t } = useI18n();


import {ref, watch, onUnmounted} from "vue";
const emit = defineEmits(['toggleMobileMenu']);
let showModal = ref(false);


const openModalHandler = () => {
  console.log('Кнопка нажата, открываем модалку');
  showModal.value = true;
}



const menu = ref([
  {
    name: t('menu.ease'),
    path: "#actionCards"
  },
  {
    name: t('menu.why'),
    path: "#whyWe"
  },
  {
    name: t('menu.flowers'),
    path: "#flowers"
  },
  {
    name: t('menu.news'),
    path: "#news"
  },
  {
    name: t('menu.contact'),
    path: "#footer"
  },
]);
  const scrollToComponent = (path) => {
    const el = document.querySelector(path);
    if (el) {
      el.scrollIntoView({behavior: 'smooth'});
      emit('toggleMobileMenu');
    }
  };

</script>

<style scoped>
@import "MobileMenu.scss";
</style>