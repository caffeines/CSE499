<template>
  <div>
    <carousel :per-page="1">
      <slide class="hello">
        <div class="slide__one-header">
          <img src="@/assets/img/slide-logo.png" alt="Slide logo" class="slide__one-header-logo" />
        </div>
      </slide>
      <slide>Slide 2 Content</slide>
      <slide>Slide 2 Content</slide>
      <slide>Slide 2 Content</slide>
    </carousel>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: {
    Carousel,
    Slide
  }
};
</script>

<style></style>
