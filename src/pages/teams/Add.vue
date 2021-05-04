<page layout="Full" title="Add Team" route="/teams/add">
  <u-form title="Team detail">
    <u-form-content>
      <u-form-input type="textbox" v-model="model.name" label="Name" ref="txtName" />
      <u-form-input type="textbox" v-model="model.namespace" label="Namespace" ref="txtNamespace" />
    </u-form-content>
    <u-form-actions>
      <u-btn @click="onSubmitA" text="OK" variant="secondary" />
      <u-btn @click="onSubmitB" text="Check" variant="primary" />
      <u-btn @click="onSubmitC" text="Danger" variant="danger" />
      <u-alert visible="true" ref="alertA" variant="secondary">OK, this is fine!</u-alert>
      <u-alert visible="true" ref="alertB" variant="primary">NOK, please try again!</u-alert>
      <u-alert visible="true" ref="alertC" variant="danger">OOPS, namespace {{model.namespace}} already exists!</u-alert>
    </u-form-actions>
  </u-form>
</page>

<script>
export default {
  data() {
    return {
      model: {
        name: 'Default Team',        
        namespace: 'xyz'
      },
    };
  },
  methods: {
    onSubmitA() {
      this.$refs.alertA.visible1 = !this.$refs.alertA.visible1;
    },
    onSubmitB() {
      this.$refs.alertB.visible1 = !this.$refs.alertB.visible1;
    },
    onSubmitC() {
      this.$refs.alertC.visible1 = !this.$refs.alertC.visible1;
    },
  },
};
</script>