<template>
  <div>
    <sidebar/>

    <HelloWorld/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import sidebar from '@/components/Sidebar.vue';
import HelloWorld from '@/components/Topbar.vue';

export default {
  name: 'Home',
  data: () => ({
    drawer: true,
  }),
  components: {
    sidebar,
    HelloWorld,
  },
};
</script>
