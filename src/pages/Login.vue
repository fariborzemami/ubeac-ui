<page layout="Blank" title="Login Title" route="/login" icon="test-icon" roles="?">
  <u-form title="Login">
    <u-form-content columns="2">
      <u-form-input
        id="email"
        v-model="model.email"
        type="email"
        label="Email"
        placeholder="Type your email"
        required
        autofocus
      />
      <u-form-input
        id="password"
        v-model="model.password"
        type="password"
        label="Password"
        placeholder="Type your password"
        required
      />
    </u-form-content>
    <u-form-actions>
      <u-button type="submit" @click="onSubmit">Submit</u-button>
      <u-button type="cancel">Cancel</u-button>
    </u-form-actions>
  </u-form>
</page>
<script>
export default {
  data() {
    return {
      model: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit() {
      console.log(this.model)
    }
  }
};
</script>