<template>
  <div class="quote" :class="quoteClass">
    <div class="quote__wrap-icon">
      <svg fill="var(--primary)" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" viewBox="0 0 6.82666 6.82666" xmlns="http://www.w3.org/2000/svg"><g id="Layer_x0020_1"><g id="_485100896"><path id="_485101088" d="m1.68182 1.36891c-.657228-.00000394-1.19206.534823-1.19206 1.19218.00001181.657228.534827 1.19206 1.19206 1.19206.204866-.00000787.406811-.0528622.584272-.152862.0107205-.00609055.0226575-.00900787.0344803-.00901181.0134016 0 .0267874.00377559.0383583.0114528.0219331.0142402.0341024.0395827.0314252.0656457-.0383622.37965-.136902.733484-.292929 1.05175-.137874.281118-.318386.527882-.539213.737626 1.07794-.57624 1.51666-1.80569 1.36867-2.79898-.0929331-.6235-.463571-1.28986-1.22507-1.28986z"></path><path id="_485100920" d="m5.08407 1.36891c-.657354-.00000394-1.19206.534823-1.19206 1.19218.00000787.657228.534701 1.19206 1.19206 1.19206.204756-.00000787.406815-.0528622.58428-.152862.0107244-.00609055.0225276-.00900787.0343465-.00901181.0134016 0 .0267953.00377559.0384882.0114528.0219291.0142402.0339803.0395827.0314252.0656457-.0383661.37965-.137024.733484-.293051 1.05175-.137866.281118-.318264.527882-.539087.737626 1.0777-.57624 1.51653-1.80569 1.36854-2.79898-.0929213-.6235-.463445-1.28986-1.22494-1.28986z"></path></g></g></svg>
    </div>
    <blockquote class="quote__wrap-content">
      <span class="quote__title">{{ title }} </span>
      <footer>
         <cite class="quote__text">{{ text }} </cite>
      </footer>
    </blockquote>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
  },
  quoteClass: {
    type: String,
  }

});
</script>

<style scoped>
@import "QuoteText.scss";
</style>