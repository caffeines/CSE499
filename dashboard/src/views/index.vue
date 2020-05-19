<template>
  <v-app>
    <dashboard-core-drawer />
  </v-app>
</template>

<script>
export default {
  name: 'DashboardIndex',

  components: {
    DashboardCoreDrawer: () => import('../components/Drawer/Drawer'),
  },
};
</script>
