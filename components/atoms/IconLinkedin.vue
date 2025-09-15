<template>
  <div class="icon" v-html="svgCode"></div>
</template>

<script setup>
import { ref } from 'vue';
const svgCode = ref(`
<svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_4066_864" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="33">
<g clip-path="url(#clip0_4066_864)">
<path d="M29.6313 0.951172H2.3625C1.05625 0.951172 0 1.98242 0 3.25742V30.6387C0 31.9137 1.05625 32.9512 2.3625 32.9512H29.6313C30.9375 32.9512 32 31.9137 32 30.6449V3.25742C32 1.98242 30.9375 0.951172 29.6313 0.951172ZM9.49375 28.2199H4.74375V12.9449H9.49375V28.2199ZM7.11875 10.8637C5.59375 10.8637 4.3625 9.63242 4.3625 8.11367C4.3625 6.59492 5.59375 5.36367 7.11875 5.36367C8.6375 5.36367 9.86875 6.59492 9.86875 8.11367C9.86875 9.62617 8.6375 10.8637 7.11875 10.8637ZM27.2687 28.2199H22.525V20.7949C22.525 19.0262 22.4937 16.7449 20.0562 16.7449C17.5875 16.7449 17.2125 18.6762 17.2125 20.6699V28.2199H12.475V12.9449H17.025V15.0324H17.0875C17.7188 13.8324 19.2688 12.5637 21.575 12.5637C26.3813 12.5637 27.2687 15.7262 27.2687 19.8387V28.2199Z" fill="#333333"/>
</g>
</mask>
<g mask="url(#mask0_4066_864)">
<rect class="change-color" y="0.951172" width="32" height="32" fill="#D9DDE3"/>
</g>
<defs>
<clipPath id="clip0_4066_864">
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
