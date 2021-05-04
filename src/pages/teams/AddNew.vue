<page layout="Full" title="Add Team New" route="/teams/addnew">
  <u-form title="Team detail">
    <u-form-content>
      <u-form-input type="textbox" v-model="model.name" label="Name" ref="txtName" />
      <u-form-input type="textbox" v-model="model.namespace" label="Namespace" ref="txtNamespace" />
    </u-form-content>
    <u-form-actions>
      <u-btn @click="onSubmitA" text="OK" variant="secondary" />
      <u-btn @click="onSubmitB" text="Check" variant="primary" />
      <u-btn @click="onSubmitC" text="Danger" variant="danger" />
      <u-alert-a :visible="alertA.visible" variant="secondary">OK, this is fine!</u-alert-a>
      <u-alert-a :visible="alertB.visible" variant="primary">NOK, please try again!</u-alert-a>
      <u-alert-a :visible="alertC.visible" variant="danger">OOPS, namespace {{model.namespace}} already exists!</u-alert-a>
    </u-form-actions>
  </u-form>
</page>

<script>
export default {
  data() {
    return {
      model: {
        name: "Default Team",
        namespace: "xyz",
      },
      alertA: { visible: true },
      alertB: { visible: true },
      alertC: { visible: true },
    };
  },
  methods: {
    onSubmitA() {
      this.alertA.visible = !this.alertA.visible;
    },
    onSubmitB() {
      this.alertB.visible = !this.alertB.visible;
    },
    onSubmitC() {
      this.alertC.visible = !this.alertC.visible;
    },
  },
};
</script>