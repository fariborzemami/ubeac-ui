<page layout="Full" title="Add Team New" route="/teams/addnewnew">
  <u-form title="Team detail NEW!">
    <u-form-content>
      <u-form-input type="textbox" v-model="model.name" label="Name" ref="txtName" />
      <u-form-input type="textbox" v-model="model.namespace" label="Namespace" ref="txtNamespace" />
    </u-form-content>
    <u-form-actions>
      <u-btn @click="onSubmitA" text="OK" />
      <u-btn @click="onSubmitB" text="Check" />
      <u-btn @click="onSubmitC" text="Danger" />
      <u-alert-a :visible="alertA.visible" variant="secondary">OK, this is fine!</u-alert-a>
      <u-alert-a :visible="alertB.visible" variant="primary">NOK, please try again!</u-alert-a>
      <u-alert-a :visible="alertC.visible" variant="danger">OOPS, namespace {{model.namespace}} already exists!</u-alert-a>
    </u-form-actions>
  </u-form>
</page>

<script>
// TODO: cpmsider cheerio
// import HTML from "html-parse-stringify";
// var html = '<div class="oh"><p>hi</p></div>';
// var ast = HTML.parse(html);
// console.log(ast);

import { reactive } from "vue";
const model = {
  name: "Default Team",
  namespace: "xyz",
}
const alertA = { visible: false };
const alertB = { visible: false }
const alertC = { visible: false }
const data = reactive({
  alertA,
  alertB,
  alertC,
  model,
});

export default {
  setup() {
    return { ...data };
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