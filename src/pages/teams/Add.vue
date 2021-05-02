<page layout="Full" title="Add Team" route="/teams/add">
  <u-form title="Team detail">
    <u-form-content>
      <u-form-input type="textbox" v-model="model.name" label="Name" />
      <u-form-input type="textbox" v-model="model.namespace" label="Namespace" />
    </u-form-content>
    <u-form-actions>
      <u-btn-submit @click="onSubmit" />
    </u-form-actions>
  </u-form>
</page>

<script>
export default {
  data() {
    return {
      model: {},
      message: ""
    };
  },
  methods: {
    onSubmit() {
      console.log(this.model);
    }
  }
};
</script>