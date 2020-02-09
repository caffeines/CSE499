<template>
  <div>
    <Drawer />
    <v-app-bar color="primary" dense dark flat>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-show="!isMobile">{{appName}}</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-text-field
        class="mt-7"
        label="Search"
        color="primary"
        append-icon="mdi-magnify"
        dense
        filled
        rounded
        single-line
        loading
        background-color="#fff"
        light
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn icon :small="isMobile">
        <v-icon>mdi-cart</v-icon>
      </v-btn>
      <v-btn icon v-show="isMobile" small>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import Drawer from './Drawer.vue';
import { appName } from '../../constant/app';
import { breakpoint } from '../../mixins/breakpoint';
import { eventBus } from '../../main';

export default {
  components: {
    Drawer
  },
  mixins: [breakpoint],
  data() {
    return {
      searchText: '',
      drawer: false
    };
  },
  computed: {
    appName() {
      return appName;
    }
  },
  methods: {
    toggleDrawer() {
      eventBus.$emit('toggleDrawer');
    }
  }
};
</script>
