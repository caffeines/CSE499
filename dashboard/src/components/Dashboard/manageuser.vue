<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-card-title>
              Manage Users
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-card-title>
            <v-data-table
              :headers="headers"
              :items="desserts"
              :search="search"
            ></v-data-table>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      headers: [
        {
          text: 'Full Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Image', value: 'image' },
        { text: 'Username', value: 'username' },
        { text: 'Email', value: 'email' },
        { text: 'Role', value: 'role' },
        { text: 'Status', value: 'status' },
        { text: 'Action', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Nasib Sarker',
          image: 'image',
          username: 'Nasib',
          email: 'nasib@example.com',
          role: 'Admin',
          status: 'Active',
          action: '<v-btn>Delete</v-btn>',
        },
      ],
    };
  },
};
</script>
<style>
</style>
