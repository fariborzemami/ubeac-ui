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
      <u-btn variant="primary" @onClick='onSubmit' @onBeforeClick='onBeforeSubmit' @onAfterClick='onAfterSubmit'></u-btn>
      <u-btn variant="secondary">Cancel</u-btn>
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
    onSubmit(e) {
      console.log('Login_UBtn_click', e)
    },
    onBeforeSubmit(e) {
      console.log('Login_UBtn_onBeforeClick', e)
      return false
    },
    onAfterSubmit(e) {
      console.log('Login_UBtn_onAfterClick', e)
    }
  }
};
</script>