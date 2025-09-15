<template>
  <footer class="footer" id="footer">
    <div class="footer__wrap container">
      <div class="footer-content">
        <h3 class="footer-content__headline">
          {{ t('footer.headline', "Make better a reality") }}
        </h3>
        <h3 class="footer-content__description">
          {{ t('footer.description', "Maximizes business performance") }}
        </h3>
      </div>
      <div class="footer-contact">
        <a class="footer-contact__number" href="tel:+112345678">+375 00 000 000</a>
        <a class="footer-contact__mail" href="mailto:zazhogin@releasebooster.com">flawer@gmail.com</a>
        <span class="footer-contact__address">{{ t('footer.addressLabel') }} {{ t('footer.addressValue') }}</span>
      </div>
      <div class="footer-form">
        <app-form/>
      </div>
    </div>
    <ul class="footer-soc container">
      <li>
        <a href="#" target="_blank"  class="footer-soc__item-link">
        <IconFacebook/>
        </a>
      </li>
      <li>
        <a href="#" target="_blank"  class="footer-soc__item-link">
        <IconLinkedin/>
        </a>
      </li>
    </ul>
  </footer>
</template>

<script setup>

import AppForm from "../../molecules/AppForm/AppForm.vue";
import IconFacebook from "../../atoms/IconFacebook.vue";
import IconLinkedin from "../../atoms/IconLinkedin.vue";
const { t } = useI18n();


</script>

<style scoped>
@import "Footer.scss";
</style>


