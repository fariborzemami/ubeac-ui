<page layout="Full" title="Add Team" route="/teams/add">
  <u-form title="Team detail">
    <u-form-content>
      <u-form-input type="textbox" v-model="model.name" label="Name" ref="txtName" />
      <u-form-input type="textbox" v-model="model.namespace" label="Namespace" ref="txtNamespace" />
    </u-form-content>
    <u-form-actions>    
      <u-btn @click="onSubmitA" text="OK" />
      <u-btn @click="onSubmitB" text="Check" />
      <u-btn @click="onSubmitC" text="Danger" />
      <u-alert ref="alertA" :visible="false" variant="secondary">OK, this is fine!</u-alert>
      <u-alert ref="alertB" :visible="false" variant="primary">NOK, please try again!</u-alert>
      <u-alert ref="alertC" :visible="false" variant="danger">OOPS, namespace {{model.namespace}} already exists!</u-alert>
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
    };
  },
  methods: {
    onSubmitA() {
      this.$refs.alertA.visible = !this.$refs.alertA.visible;
    },
    onSubmitB() {
      this.$refs.alertB.visible = !this.$refs.alertB.visible;
    },
    onSubmitC() {
      this.$refs.alertC.visible = !this.$refs.alertC.visible;
    },
  },
  // mounted() {
  //   this.$refs.alertA.visible = false;
  //   this.$refs.alertB.visible = false;
  //   this.$refs.alertC.visible = false;
  // },
};
</script>