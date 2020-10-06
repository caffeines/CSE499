<template>
  <v-app>
    <v-content>
      <sidebar/>
      <HelloWorld/>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

// eslint-disable-next-line import/extensions
import HelloWorld from './components/Topbar';
import sidebar from './components/Sidebar.vue';

export default {
  name: 'App',

  components: {
    HelloWorld,
    sidebar,
  },

  data: () => ({
    //
  }),
};
</script>
