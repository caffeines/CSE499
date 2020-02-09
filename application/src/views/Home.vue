<template>
  <div>
    <HeroSection />
    <Slider />
    <ShopByCatagory />
  </div>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue';
import Slider from '../components/home/Slider.vue';
import ShopByCatagory from '../components/home/ShopByCatagory.vue';

export default {
  name: 'home',
  components: {
    HeroSection,
    Slider,
    ShopByCatagory
  }
};
</script>
