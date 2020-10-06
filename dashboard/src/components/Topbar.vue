<template>
  <v-card
    color="grey lighten-4"
    flat
    tile
  >
    <v-toolbar dense class="topbar">
      <v-app-bar-nav-icon  @click="drawer=!drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-icon
        large
        class="topbar-email-icon"
      >
        mdi-email
      </v-icon>
      <v-badge
        color="green"
        content="6"
        class="topbar-notification-badge"
      >
          <v-icon
            large
            @click="alert('hello')"
          >
            mdi-bell
          </v-icon>
      </v-badge>
      <v-avatar class="topbar-profile-avatar">
        <img
          src="https://cdn.vuetifyjs.com/images/john.jpg"
          alt="John"
        >
      </v-avatar>
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            dark
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            link
          >
            <v-list-item-title class="topbar-menu-list-item">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    drawer: true,
    items: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
};
</script>

<style>
.topbar{
  height: auto !important;
  padding: 15px 0;
}
.topbar-menu-list-item{
  color: #2c2a2a !important;
}
.topbar-profile-avatar{
  margin-right: 10px;
}
.topbar-notification-badge{
  margin-right: 1rem;
}
.topbar-email-icon{
  margin-right: 1rem;
}
</style>
