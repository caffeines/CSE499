<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" temporary fixed app>
      <v-app-bar flat>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" @click="$router.push('/')" class="titleClass" />
      </v-app-bar>
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
    </v-navigation-drawer>
    <v-app-bar flat app>
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
      title: 'FlashCard',
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
            title: 'Home',
            to: '/',
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
          title: 'Home',
          to: '/',
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
