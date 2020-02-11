<template>
  <div>
    <HeroSection />
    <Slider />
    <Welcome />
    <BestProducts />
    <ShopByCatagory />
    <Offer />
    <newproduct />
  </div>
</template>

<script>
import HeroSection from '../components/home/HeroSection.vue';
import Slider from '../components/home/Slider.vue';
import Welcome from '../components/home/Welcome.vue';
import ShopByCatagory from '../components/home/ShopByCatagory.vue';
import BestProducts from '../components/home/BestProducts.vue';
import Offer from '../components/home/Offer.vue';
import Newproduct from '../components/home/Newproduct.vue';

export default {
  name: 'home',
  components: {
    HeroSection,
    Slider,
    Welcome,
    ShopByCatagory,
    BestProducts,
    Offer,
    Newproduct
  }
};
</script>
<style></style>
