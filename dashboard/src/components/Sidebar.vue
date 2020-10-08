<template>
  <div>
    <template>
      <v-card
        width="256"
      >
        <v-navigation-drawer app
                             disable-resize-watcher="true" v-model="drawer" color="#0E1A35" class="sidebar-icon" >
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title class="title">
                Application
              </v-list-item-title>
              <v-list-item-subtitle>
                subtext
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>
          <br>
          <v-card
            class="white--text mx-auto"
            width="300"
            flat
            color="#0E1A35"
          >
            <v-list light>
              <v-list-item class="white--text" link="true" to="/">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>Dashboard</v-list-item-title>
              </v-list-item>

              <v-list-group
                prepend-icon="mdi-account-circle" class="sidebar-icon"
              >
                <template v-slot:activator>
                  <v-list-item-title class="white--text">Users</v-list-item-title>
                </template>
                <v-list-item link to="/manageuser">
                  <v-list-item-title>Manage User</v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>mdi-file-outline</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item link to="/manageuser">
                  <v-list-item-title>Create User</v-list-item-title>
                  <v-list-item-icon>
                    <v-icon>mdi-plus-outline</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-card>
        </v-navigation-drawer>
      </v-card>
    </template>
<!--    <v-btn @click="drawer=!drawer">click</v-btn>-->
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    drawer: true,
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [

      ['Manage User', 'mdi-file-outline'],
      ['Create User', 'mdi-plus-outline'],
      // ['Update', 'mdi-update'],
      // ['Delete', 'mdi-delete'],
    ],
  }),
};
</script>
<style>
.v-list-item__title{
 color: #fff;
}
.sidebar-icon .mdi{
  color: #fff !important;
}
</style>
