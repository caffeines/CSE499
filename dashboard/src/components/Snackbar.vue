<template>
  <v-card>
    <v-snackbar v-model="snackShow" :color="getStatus" right :timeout="6000" top>
      {{ getText }}
      <v-btn dark :color="!getStatus? 'pink': ''" text @click="offSnackbar">
        <v-icon>mdi-close-circle</v-icon>
      </v-btn>
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getStatus', 'getText', 'getSnackbar']),
    snackShow: {
      get() {
        return this.getSnackbar;
      },
      set(newVal) {
        if (!newVal) {
          this.offSnackbar();
        }
      },
    },
  },
  methods: {
    ...mapActions(['offSnackbar']),
  },
};
</script>
