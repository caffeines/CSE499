<template>
  <div>
    <HeroSection />
    <Slider />
    <ShopByCatagory />
    <newproduct />
  </div>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue';
import Slider from '../components/home/Slider.vue';
import ShopByCatagory from '../components/home/ShopByCatagory.vue';
import Newproduct from '../components/home/Newproduct.vue';

export default {
  name: 'home',
  components: {
    HeroSection,
    Slider,
    ShopByCatagory,
    Newproduct
  }
};
</script>
<style >
</style>
