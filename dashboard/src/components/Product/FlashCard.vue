<template>
  <v-card
    max-width="300"
    class="mx-auto mt-2 mb-2 pl-5 pr-5 custom"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :elevation="hover ? 4 : 0"
    shaped
    ripple
    flat
    @click="showFlashCard"
  >
    <v-list-item>
      <v-list-item-title class="font-weight-black title">{{ cardData.title }} </v-list-item-title>
    </v-list-item>
    <v-card-text>{{ description }}</v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['cardData'],
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    description() {
      const desc = this.cardData.description;
      return desc.length < 85 ? desc : `${desc.substr(0, 85)}...`;
    },
  },
  methods: {
    showFlashCard() {
      console.log('Hey ma ma!');
    },
  },
};
</script>
