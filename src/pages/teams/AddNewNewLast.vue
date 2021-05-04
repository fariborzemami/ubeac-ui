<page layout="Full" title="Add Team New LAST" route="/teams/addnewnewlast">
  <u-form title="Team detail NEW LAST!">
    <u-form-content>
      <u-form-input type="textbox" v-model="model.name" label="Name" />
      <u-form-input type="textbox" v-model="model.namespace" label="Namespace" />
    </u-form-content>
    <u-form-actions>
      <u-btn @click="onSubmitA" text="OK" />
      <u-btn @click="onSubmitB" text="Check" />
      <u-btn @click="onSubmitC" text="Danger" />
      <u-alert-a xid="alertA" variant="secondary">OK, this is fine!</u-alert-a>
      <u-alert-a xid="alertB" variant="primary">NOK, please try again!</u-alert-a>
      <u-alert-a xid="alertC" variant="danger">OOPS, namespace {{model.namespace}} already exists!</u-alert-a>
    </u-form-actions>
  </u-form>
</page>

<script>
// TODO: cpmsider cheerio
// TODO: remove html-parse-stringify package
// import HTML from "html-parse-stringify";
// var html = '<div class="oh"><p>hi</p></div>';
// var ast = HTML.parse(html);
// console.log(ast);

import { reactive } from "vue";
const model = {
  name: "Default Team",
  namespace: "xyz",
};
const alertA = {
  visible: false,
  text: "",
  variant: "primary",
};
const alertB = { visible: false };
const alertC = { visible: false };
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