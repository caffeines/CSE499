<template>
  <v-app>
    <main>
      <v-container fluid class="pa-0 ma-0">
        <Navigation />
        <router-view />
      </v-container>
    </main>
  </v-app>
</template>

<script>
import Navigation from './components/layouts/Navigation.vue';
import { breakpoint } from './mixins/breakpoint';

export default {
  name: 'App',
  mixins: [breakpoint],
  components: {
    Navigation
  },
  computed: {
    isFooterShow() {
      return this.isMobile || this.istablet;
    }
  },
  data: () => ({
    //
  })
};
</script>
<style lang='scss'>
@import './assets/sass/main.scss';
</style>
