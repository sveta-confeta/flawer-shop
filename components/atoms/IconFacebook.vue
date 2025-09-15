<template>
  <div class="icon" v-html="svgCode"></div>
</template>

<script setup>
import { ref } from 'vue';
const svgCode = ref(`
  <svg  width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_4066_875" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="33">
      <g clip-path="url(#clip0_4066_875)">
        <path d="M16 0.951172C7.16352 0.951172 0 8.11469 0 16.9512C0 24.4545 5.16608 30.7509 12.135 32.4801V21.8408H8.83584V16.9512H12.135V14.8443C12.135 9.39853 14.5997 6.87437 19.9462 6.87437C20.96 6.87437 22.7091 7.07341 23.4246 7.27181V11.7038C23.047 11.6641 22.391 11.6443 21.5763 11.6443C18.953 11.6443 17.9392 12.6382 17.9392 15.2219V16.9512H23.1654L22.2675 21.8408H17.9392V32.8341C25.8618 31.8773 32.0006 25.1317 32.0006 16.9512C32 8.11469 24.8365 0.951172 16 0.951172Z" fill="#333333"/>
      </g>
    </mask>
    <g mask="url(#mask0_4066_875)">
      <rect class="change-color" y="0.951172" width="32" height="32" fill="#D9DDE3"/>
    </g>
    <defs>
      <clipPath id="clip0_4066_875">
        <rect width="32" height="32" fill="white" transform="translate(0 0.951172)"/>
      </clipPath>
    </defs>
  </svg>
`);
</script>

<style lang="scss">
@import "../../assets/scss/breakpoints";
@import "../../assets/scss/scale";

.icon svg {
  width: 32px;
  height: 33px;
  @media(min-width: $laptop) {
    width: size-decstop(32);
    height: size-decstop(33);
  }
  .change-color {
    fill: var(--text-btn-link);
  }
}

</style>
