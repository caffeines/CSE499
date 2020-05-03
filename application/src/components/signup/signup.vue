<template>
  <div id="app">
    <v-app id="inspire">
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar color="primary" dark flat>
                  <v-toolbar-title class="login-title">Sign Up</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-tooltip bottom>
                    <template> </template>
                  </v-tooltip>
                  <v-tooltip right>
                    <template> </template>
                  </v-tooltip>
                </v-toolbar>
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Name"
                      name="login"
                      type="text"
                    ></v-text-field>
                    <v-text-field
                      label="Email"
                      name="login"
                      type="email"
                    ></v-text-field>

                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      type="password"
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      label="Confirm Password"
                      name="password"
                      type="password"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="error" class="login-button">Sign Up</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
