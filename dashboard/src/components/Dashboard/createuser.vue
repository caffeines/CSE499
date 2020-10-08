<template>
 <div>
   <v-container>
     <form>
       <v-text-field
         v-model="name"
         :error-messages="nameErrors"
         :counter="10"
         label="Full Name"
         required
         @input="$v.name.$touch()"
         @blur="$v.name.$touch()"
       ></v-text-field>
       <v-text-field
         v-model="username"
         :error-messages="usernameErrors"
         :counter="10"
         label="Username"
         required
         @input="$v.username.$touch()"
         @blur="$v.username.$touch()"
       ></v-text-field>
       <v-text-field
         v-model="email"
         :error-messages="emailErrors"
         label="E-mail"
         required
         @input="$v.email.$touch()"
         @blur="$v.email.$touch()"
       ></v-text-field>
       <v-text-field
         v-model="password"
         :error-messages="emailErrors"
         label="Password"
         type="password"
         required
         @input="$v.email.$touch()"
         @blur="$v.email.$touch()"
       ></v-text-field>

       <v-btn
         class="mr-4"
         @click="submit"
       >
         submit
       </v-btn>
     </form>
   </v-container>
 </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import { required, maxLength, email } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    username: { required, maxLength: maxLength(6) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      },
    },
  },

  data: () => ({
    name: '',
    username: '',
    email: '',
    password: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
  }),

  computed: {
    checkboxErrors() {
      const errors = [];
      if (!this.$v.checkbox.$dirty) return errors;
      // eslint-disable-next-line no-unused-expressions
      !this.$v.checkbox.checked && errors.push('You must agree to continue!');
      return errors;
    },
    selectErrors() {
      const errors = [];
      if (!this.$v.select.$dirty) return errors;
      // eslint-disable-next-line no-unused-expressions
      !this.$v.select.required && errors.push('Item is required');
      return errors;
    },
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      // eslint-disable-next-line no-unused-expressions
      !this.$v.name.maxLength && errors.push('Name must be at most 10 characters long');
      // eslint-disable-next-line no-unused-expressions
      !this.$v.name.required && errors.push('Name is required.');
      return errors;
    },
    usernameErrors() {
      const errors = [];
      if (!this.$v.username.$dirty) return errors;
      // eslint-disable-next-line no-unused-expressions
      !this.$v.username.maxLength && errors.push('UserName must be at most 6 characters long');
      // eslint-disable-next-line no-unused-expressions
      !this.$v.username.required && errors.push('UserName is required.');
      return errors;
    },
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      // eslint-disable-next-line no-unused-expressions
      !this.$v.email.email && errors.push('Must be valid e-mail');
      // eslint-disable-next-line no-unused-expressions
      !this.$v.email.required && errors.push('E-mail is required');
      return errors;
    },
  },

  methods: {
    submit() {
      this.$v.$touch();
    },
    clear() {
      this.$v.$reset();
      this.name = '';
      this.email = '';
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
<style></style>
