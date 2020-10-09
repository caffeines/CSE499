<template>
 <div>
   <v-container>
     <v-row>
       <v-col cols="12">
         <div class="text-center">
           <h1 class="display-1 mb-5 mt-5">Create New User</h1>
         </div>
       </v-col>
     </v-row>
     <form>
      <v-row>
        <v-col cols="12" md="6" sm="6">
          <v-text-field
            v-model="name"
            :error-messages="nameErrors"
            :counter="100"
            label="Full Name"
            outlined
            required
            @input="$v.name.$touch()"
            @blur="$v.name.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="username"
            :error-messages="usernameErrors"
            :counter="10"
            label="Username"
            outlined
            required
            @input="$v.username.$touch()"
            @blur="$v.username.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="email"
            :error-messages="emailErrors"
            label="E-mail"
            outlined
            required
            @input="$v.email.$touch()"
            @blur="$v.email.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="password"
            :error-messages="passErrors"
            label="Password"
            outlined
            type="password"
            required
            @input="$v.password.$touch()"
            @blur="$v.password.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="rePassword"
            :error-messages="rePassErrors"
            label="Confirm Password"
            outlined
            type="password"
            required
            @input="$v.rePassword.$touch()"
            @blur="$v.rePassword.$touch()"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6">
          <v-text-field
            v-model="phone"
            :error-messages="phoneErrors"
            label="Phone"
            outlined
            @input="$v.phone.$touch()"
            @blur="$v.phone.$touch()"
          ></v-text-field>
          <v-text-field
            v-model="address"
            :error-messages="addressErrors"
            label="Address"
            outlined
            @input="$v.address.$touch()"
            @blur="$v.address.$touch()"
          ></v-text-field>
          <v-select
            v-model="select"
            :items="items"
            :rules="[v => !!v || 'Item is required']"
            label="Item"
            required
            outlined
          ></v-select>
        </v-col>
      </v-row>
     </form>
   </v-container>
 </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
// eslint-disable-next-line no-unused-vars
import { required, maxLength, email, minLength, sameAs } from 'vuelidate/lib/validators';

export default {
  mixins: [validationMixin],

  validations: {
    name: {
      required, maxLength: maxLength(100),
    },
    username: {
      required, minLength: minLength(6), maxLength: maxLength(10),
    },
    email: {
      required, email,
    },
    password: {
      required, minLength: minLength(8),
    },
    rePassword: {
      samePassword: sameAs('password'),
    },
    phone: {
    },
    address: {
    },
    select: {
      required,
    },
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
    rePassword: '',
    phone: '',
    address: '',
    select: null,
    items: [
      'Item 1',
      'Item 2',
      'Item 3',
      'Item 4',
    ],
    checkbox: false,
    item: ['Foo', 'Bar', 'Fizz', 'Buzz'],
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
      !this.$v.username.minLength && errors.push('UserName must be at least 6 characters long');
      // eslint-disable-next-line no-unused-expressions
      !this.$v.username.maxLength && errors.push('UserName must be at most 10 characters long');
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
    passErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      // eslint-disable-next-line no-unused-expressions
      !this.$v.password.minLength && errors.push('Password must be at least 8 character long');
      // eslint-disable-next-line no-unused-expressions
      !this.$v.password.required && errors.push('Password is required');
      return errors;
    },
    rePassErrors() {
      const errors = [];
      if (!this.$v.rePassword.$dirty) return errors;
      // eslint-disable-next-line no-unused-expressions
      !this.$v.rePassword.samePassword && errors.push('Passwords should be identical');
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
      this.username = '';
      this.email = '';
      this.password = '';
      this.select = null;
      this.checkbox = false;
    },
  },
};
</script>
<style></style>
