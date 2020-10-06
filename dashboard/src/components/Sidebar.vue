<template>
  <div>
    <template>
      <v-card
        width="256"
      >
        <v-navigation-drawer app
                             disable-resize-watcher="true" v-model="drawer" color="#0E1A35" >
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
          <br>
          <br>
          <v-card
            class="white--text mx-auto"
            width="300"
            flat
            color="#0E1A35"
          >
            <v-list light>
              <v-list-item class="white--text" link="true" to="">
                <v-list-item-icon>
                  <v-icon>mdi-home</v-icon>
                </v-list-item-icon>

                <v-list-item-title>Home</v-list-item-title>
              </v-list-item>

              <v-list-group
                prepend-icon="mdi-account-circle"
              >
                <template v-slot:activator>
                  <v-list-item-title class="white--text">Users</v-list-item-title>
                </template>

                <v-list-group
                  no-action
                  sub-group
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Admin</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="([title, icon], i) in admins"
                    :key="i"
                    link
                  >
                    <v-list-item-title v-text="title"></v-list-item-title>

                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>

                <v-list-group
                  no-action
                  sub-group
                >
                  <template v-slot:activator>
                    <v-list-item-content>
                      <v-list-item-title>Actions</v-list-item-title>
                    </v-list-item-content>
                  </template>

                  <v-list-item
                    v-for="([title, icon], i) in cruds"
                    :key="i"
                    link
                  >
                    <v-list-item-title v-text="title"></v-list-item-title>

                    <v-list-item-icon>
                      <v-icon v-text="icon"></v-icon>
                    </v-list-item-icon>
                  </v-list-item>
                </v-list-group>
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
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
  }),
};
</script>
<style>
.v-list-item__title{
 color: #fff;
}
.mdi{
  color: #fff !important;
}
</style>
