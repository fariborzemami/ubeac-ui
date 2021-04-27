<template>
  <button class="btn" :class="additionalClass">
    <slot></slot>
  </button>
</template>
<script>
// available types
import axios from 'axios';
import { ref, computed } from '@vue/composition-api';

const types = {
  submit: "btn-success",
  cancel: "btn-secondary",
  danger: "btn-danger"
};

export default {
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "submit",
      validator: value => {
        if (!types[value])
          console.error(
            `UBtn: type property is not correct, available types: ${JSON.stringify(
              Object.getOwnPropertyNames(types)
            )}`
          );
        return types[value];
      }
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const username = ref('');
    const password = ref('');
    const language = ref('en');
    const updateUsername = (event) => {
      username.value = event.target.value;
    };
    const updatePassword = (event) => {
      password.value = event.target.value;
    };
    const submit = async () => {
      // probably add some other business logic here :)
      await axios.post('https://jsonplaceholder.typicode.com/users', {
        username,
        password,
      });
      alert('User created');
    };
    const dictionary = computed(() => (language.value === 'es' ? es : en));
    return {
      username,
      password,
      language,
      updateUsername,
      updatePassword,
      submit,
      dictionary,
    }},
  mounted() {},
  computed: {
    additionalClass() {
      return types[this.type];
    }
  }
  
}
</script>