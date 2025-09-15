<template>
  <div class="modal"
       v-if="show"
       @click="hideDialog"
  >
    <div @click.stop
         class="modal__content">
      <button class="modal__content-btn" @click="hideDialog" type="button" aria-label="close">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_2210_13742" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32"
                height="32">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M7.05727 7.05727C7.57797 6.53657 8.42219 6.53657 8.94289 7.05727L24.9429 23.0573C25.4636 23.578 25.4636 24.4222 24.9429 24.9429C24.4222 25.4636 23.578 25.4636 23.0573 24.9429L7.05727 8.94289C6.53657 8.42219 6.53657 7.57797 7.05727 7.05727Z"
                  fill="var(--title)"/>
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M24.9429 7.05727C25.4636 7.57797 25.4636 8.42219 24.9429 8.94289L8.94289 24.9429C8.42219 25.4636 7.57797 25.4636 7.05727 24.9429C6.53657 24.4222 6.53657 23.578 7.05727 23.0573L23.0573 7.05727C23.578 6.53657 24.4222 6.53657 24.9429 7.05727Z"
                  fill="var(--title)"/>
          </mask>
          <g mask="url(#mask0_2210_13742)">
            <rect width="32" height="32" fill="var(--title)"/>
          </g>
        </svg>
      </button>
      <span class="modal__content-title">{{ t('modal.title') }}</span>
      <span class="modal__content-text">{{ t('modal.description') }}</span>
      <div class="wrap-form">
        <app-form/>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppForm from "../../molecules/AppForm/AppForm.vue";

const {t} = useI18n();

const emits = defineEmits(['update:show']);

const hideDialog = () => {
  emits('update:show', false);
}

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  }
});


const lockScroll = () => {
  document.body.classList.add("no-scroll");
  document.querySelector('.header').style.zIndex = '2';
};

const unlockScroll = () => {
  document.body.classList.remove("no-scroll");
  document.querySelector('.header').style.zIndex = '3';
};

watch(() => props.show, (val) => {
  if (val) lockScroll();
  else unlockScroll();
});
</script>

<style scoped lang="scss">
@import "AppModal.scss";
</style>