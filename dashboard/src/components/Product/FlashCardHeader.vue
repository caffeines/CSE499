<template>
  <v-card width="100%" class="mx-auto mt-0 mb-2 pl-5 pr-5 overflow-hidden" draggable="false" flat>
    <v-card-text>
      <h2 class="title mb-2 text-center" color="black">Choose topics</h2>

      <v-row justify="center" align="center">
        <v-chip-group v-model="selected" column multiple>
          <v-chip
            v-for="(chip, idx) in topics"
            :key="idx"
            :text-color="flag[idx] ? 'white' : 'black'"
            :color="flag[idx] ? 'black' : '#eee'"
            class="font-weight-black"
            @click="handleChips(idx)"
          >
            <v-avatar left v-if="flag[idx]">
              <v-icon>mdi-check</v-icon>
            </v-avatar>
            {{ chip }}
          </v-chip>
        </v-chip-group>
      </v-row>
      <v-col cols="12" md="4" sm="12" class="mx-auto mt-5">
        <v-text-field
          append-icon="mdi-search-web"
          v-model="searchText"
          placeholder="Search here"
          rounded
          filled
          :loading="loading"
          flat
          dense
        ></v-text-field>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data: () => ({
    flag: {},
    selectedTopics: [],
    selected: [],
    searchText: '',
    loading: false,
  }),
  computed: {
    ...mapGetters(['getTopics']),
    topics() {
      const hardCoded = ['Own', 'Known', 'Unknown'];
      return [...hardCoded, ...this.getTopics.slice(0, 12)];
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    getTopics(val) {
      this.chipStatus();
    },
  },
  created() {
    this.chipStatus();
  },
  mounted() {
  },
  methods: {
    chipStatus() {
      const JO = localStorage.getItem('topics');
      this.selectedTopics = JSON.parse(JO) || {};
      this.selectedTopics.forEach((topic) => {
        const index = this.topics.indexOf(topic);
        if (index > -1) {
          this.flag[index] = true;
        }
      });
    },
    handleChips(idx) {
      this.flag[idx] = !this.flag[idx];
      const index = this.selectedTopics.indexOf(this.topics[idx]);
      if (index > -1) {
        this.selectedTopics.splice(index, 1);
      } else {
        this.selectedTopics.push(this.topics[idx]);
      }
      const JO = JSON.stringify(this.selectedTopics);
      localStorage.setItem('topics', JO);
    },
  },
};
</script>
