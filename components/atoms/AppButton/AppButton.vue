<template>
  <app-link v-if="href" :href="href" :class="classBtn" :disabled="disabled">
    <span class="btn__content">
      <span v-if="text" class="btn__text">{{ text }}</span>
    </span>
  </app-link>
  <button
      class="btn"
      v-else
      :disabled="disabled"
      :type="type"
      @click="handlerClick"
      :class="[classBtn, `btn--${theme}`]"
  >
    <span class="btn__content">
        <span v-if="icon" class="btn__icon">
        <svg class="change-color" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
           <mask id="mask0_8182_4672" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
              <path class="change-color" fill-rule="evenodd" clip-rule="evenodd" d="M1.58301 10.0004C1.58301 10.4606 1.9561 10.8337 2.41634 10.8337L17.4163 10.8337C17.8766 10.8337 18.2497 10.4606 18.2497 10.0004C18.2497 9.54017 17.8766 9.16707 17.4163 9.16707L2.41634 9.16707C1.9561 9.16707 1.58301 9.54017 1.58301 10.0004Z" fill=""/>
              <path class="change-color" fill-rule="evenodd" clip-rule="evenodd" d="M8.00558 15.5897C8.33102 15.2642 8.33102 14.7366 8.00559 14.4112L3.59485 10.0004L8.00559 5.58966C8.33102 5.26423 8.33102 4.73659 8.00558 4.41115C7.68015 4.08571 7.15251 4.08572 6.82707 4.41115L1.82708 9.41115C1.50165 9.73659 1.50165 10.2642 1.82708 10.5897L6.82707 15.5897C7.15251 15.9151 7.68015 15.9151 8.00558 15.5897Z" fill=""/>
          </mask>
    <g mask="url(#mask0_8182_4672)">
        <rect width="20" height="20" class="change-color" transform="matrix(1 0 0 -1 0 20.0005)" fill="#ECF0F5"/>
    </g>
</svg>


      </span>
      <span v-if="text" class="btn__text">{{ text }}</span>
    </span>
  </button>
</template>

<script setup>
import AppLink from "../AppLink/AppLink.vue";


import {computed} from 'vue';

const props = defineProps({
  click: {
    type: Function,
  },
  classBtn: {
    type: String,
  },
  href: {
    type: String,
  },
  text: {
    type: String,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: 'button',
  },
  icon: {
    type: Boolean,
  },
  theme: {
    type: String,
    default: 'blue',
    validator: value => ['blue', 'transparent'].includes(value)
  }
});

const buttonProps = computed(() => ({
  href: props.href,
  class: buttonClasses.value,
  disabled: props.disabled,
  type: props.type,
}));

const buttonClasses = computed(() => ({
  btn: true,
  [`btn--${props.theme}`]: true,
  [props.classBtn]: !!props.classBtn,
  'btn--link': props.href,
}));

const emit = defineEmits(['click']);
const handlerClick = (event) => {
  emit('click', event);
};
</script>

<style lang="scss">
@import 'AppButton';
</style>
