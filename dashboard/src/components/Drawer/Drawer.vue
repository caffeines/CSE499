<template>
  <v-app light>
    <v-navigation-drawer v-model="drawer" temporary fixed app
    style="background-color:#A5D6A7">
      <v-app-bar flat style="background-color:#A5D6A7">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" @click="$router.push('/')" class="titleClass" />
      </v-app-bar>
          <v-list-item two-line :class="miniVariant && 'px-0'">
            <v-list-item-avatar>
              <img src="https://randomuser.me/api/portraits/men/81.jpg">
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>Name</v-list-item-title>
              <v-list-item-subtitle>position</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-spacer />

      <v-list>
        <v-list-item v-for="(item, i) in getItems" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
       <template v-slot:append>
        <div class="pa-2">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar flat app  style="background-color:#A5D6A7">
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" @click="$router.push('/')" class="titleClass" />
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container fluid class="pa-0 ma-0">
        <router-view></router-view>
      </v-container>
    </v-content>
    <Snackbar></Snackbar>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      drawer: false,
      title: 'Admin',
      loginStatus: false,
    };
  },
  computed: {
    ...mapGetters(['isLogedIn']),
    getItems() {
      if (this.isLogedIn) {
        const items = [
          {
            icon: 'mdi-home',
            title: 'Dashboard',
            to: '/',
          },
          {
            icon: 'mdi-home',
            title: 'Product',
            to: '/product',
          },
          {
            icon: 'mdi-account',
            title: 'Profile',
            to: '/profile',
          },
          {
            icon: 'mdi-logout',
            title: 'Logout',
            to: '/logout',
          },
        ];
        return items;
      }
      const items = [
        {
          icon: 'mdi-home',
          title: 'Dashboard',
          to: '/',
        },
        {
          icon: 'mdi-home',
          title: 'Product',
          to: '/product',
        },
        {
          icon: 'mdi-account-plus',
          title: 'Signup',
          to: '/signup',
        },
        {
          icon: 'mdi-login',
          title: 'Singin',
          to: '/login',
        },
      ];
      return items;
    },
  },
  async mounted() {
    this.isLogedInRequest();
    await this.topicsRequest();
    await this.cardsRequest();
  },
  methods: {
    ...mapActions(['cardsRequest', 'topicsRequest', 'isLogedInRequest']),
  },
};
</script>
<style lang="scss" scoped>
.titleClass {
  cursor: pointer !important;
}
#app {
  background-color: rgba(238, 238, 238, 0.726);
}
a {
  text-decoration: none;
  :hover {
    color: #000;
  }
}
</style>
