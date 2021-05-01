<page layout="Full" title="Add Team" route="/teams/add">
  <u-card title="Add New Team">
    <u-form title="Team detail">
      <u-form-content columns="2">
          <u-form-input type="textbox" v-model="model.name" label="Name" />
          <u-form-input type="textbox" v-model="model.namespace" label="Namespace" />
      </u-form-content>
      <u-form-actions>
        <u-btn label="Add" on-click="add" type="submit">Submit</u-btn>
      </u-form-actions>
    </u-form>
  </u-card>
</page>

<script>
export default {
  data() {
    return {
      model: {
      },
      message: ""
    };
  },
  methods: {

  }
};
</script>