<template>
  <div class="modal"
       v-if="show"
       @click="hideDialog"
  >
    <div @click.stop
         class="modal__content">
      <div class="modal__content-title"><span class="modal__content-title-error">{{ t('error.titleError') }}</span><br>
        <span class="modal__content-title-call">{{ t('error.titleCallPrefix') }}
          <a class="modal__content-title-number" href="tel:+112345678">+1 408 462 5586</a>.</span>
       </div>
      <a  href="tel:+112345678">><svg class="modal__content-icon" id="Layer_1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1"><path d="m16.24707 22.50439a16.82653 16.82653 0 0 0 2.81348-.23828 3.06 3.06 0 0 0 2.39257-2.04687l.95411-2.83985a1.76451 1.76451 0 0 0 -1.11623-2.24023l-3.44141-1.13867a1.75783 1.75783 0 0 0 -1.79688.416l-2.31931 2.12013c-.42481.10449-2.36524.42432-4.5293-1.74023-2.1709-2.17041-1.84863-4.1001-1.74121-4.5293l2.10449-2.30322a1.77 1.77 0 0 0 .43262-1.81348l-1.13867-3.44092a1.76582 1.76582 0 0 0 -2.24121-1.1167l-2.83985.95313a3.06589 3.06589 0 0 0 -2.04687 2.39355 14.85779 14.85779 0 0 0 4.0576 13.26905 14.43275 14.43275 0 0 0 10.45607 4.29589zm-13.52734-17.39697a2.0643 2.0643 0 0 1 1.3789-1.61328l2.83985-.95314a.77537.77537 0 0 1 .24707-.041.76594.76594 0 0 1 .72656.52393l1.13867 3.43994a.785.785 0 0 1 -.206.80859l-2.1983 2.40576a.49731.49731 0 0 0 -.10248.17188c-.03907.11181-.92774 2.77344 1.95312 5.65332 2.87988 2.88135 5.543 1.99365 5.65234 1.95263a.48831.48831 0 0 0 .17188-.10253l2.42187-2.21387a.77073.77073 0 0 1 .792-.18994l3.4414 1.13867a.766.766 0 0 1 .4834.97266l-.9541 2.83984a2.06474 2.06474 0 0 1 -1.61328 1.37939 13.88513 13.88513 0 0 1 -12.39458-3.77881 13.87409 13.87409 0 0 1 -3.77832-12.39404zm19.63379-3.46094a.49983.49983 0 0 1 0 .707l-7.146 7.14652h4.79248a.5.5 0 0 1 0 1h-6a.49971.49971 0 0 1 -.5-.5v-6a.5.5 0 0 1 1 0v4.79346l7.14648-7.147a.49983.49983 0 0 1 .70704.00002z" fill="#000000" style="fill: rgb(230, 230, 230);"></path></svg></a>
      <button @click="hideDialog" type="button" aria-label="close" class="modal__content-btn"> {{ t('error.ok') }} </button>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from '#imports';
const emits = defineEmits(['update:show']);

let hideDialog = () => {
  emits('update:show', false);
}

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  }
});
const { t } = useI18n();
</script>

<style scoped lang="scss">
@import "UnsuccessfulModal";
</style>