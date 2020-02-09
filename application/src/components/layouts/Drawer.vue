<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute :temporary="true" color="#f5f5f5">
      <v-app-bar color="primary" dense dark flat>
        <v-app-bar-nav-icon @click="drawer=!drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{appName}}</v-toolbar-title>
      </v-app-bar>

      <v-list shaped dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, i) in extra" :key="i" class="p-0 m-0">
            <v-list-item-content>
              <v-list-item-title v-text="item" @click="sidebarClick(item)"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-group
          v-for="item in items"
          :key="item.title"
          v-model="item.active"
          :prepend-icon="item.action"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item v-for="subItem in item.items" :key="subItem" @click="sidebarClick(subItem)">
            <v-list-item-content>
              <v-list-item-title v-text="subItem"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { eventBus } from '../../main';
import { appName } from '../../constant/app';
import { breakpoint } from '../../mixins/breakpoint';

export default {
  name: 'Drawer',
  mixins: [breakpoint],
  data() {
    return {
      drawer: false,
      /* items: ['Offers', 'Discounts', 'Product Request'], */
      extra: ['Offers', 'Discounts', 'Product request'],
      items: [
        {
          action: '',
          title: 'Fruits & Vegetables',
          items: ['Fresh Fruits', 'Fresh Vegetables']
        },
        {
          action: '',
          title: 'Beverages',
          items: ['Tea', 'Coffee', 'Juice', 'Soft Drinks', 'Water']
        },
        {
          action: '',
          title: 'Meat & Fish',
          items: ['Meat', 'Frozen Fish', 'Dried Fish', 'Fresh Fish']
        },
        {
          action: '',
          title: 'Snacks',
          items: ['Noodles', 'Soups', 'Pasta & Macaroni', 'Sauces', 'Biscuits']
        }
      ]
    };
  },
  computed: {
    appName() {
      return appName;
    }
  },
  mounted() {
    eventBus.$on('toggleDrawer', () => {
      this.drawer = !this.drawer;
    });
  },
  methods: {
    sidebarClick(text) {
      console.log(text);
    }
  }
};
</script>
