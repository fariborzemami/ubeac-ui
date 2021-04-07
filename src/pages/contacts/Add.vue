<page layout="Full" title="Contacts" route="/contacts/add">
  <u-card title="Add New Contact">
    <u-form columns="4">
      <u-form-content>
        <u-input type="textbox" :model="model.id" label="Id" />
        <u-input type="dropdown" model="title" label="Title" />
        <u-input type="textbox" model="name" label="Fullname" />
        <u-input type="dropdown" model="companyId" label="Company" />
        <u-input type="textbox" model="jobTitle" label="Job title" />
        <u-input type="textbox" model="tel" label="Tel" maxlength="11" />
        <u-input type="textbox" model="extention" label="Ext." />
        <u-input
          type="textbox"
          model="mobile"
          label="Cellphone"
          maxlength="11"
        />
        <u-input type="textbox" model="fax" label="Fax" maxlength="11" />
        <u-input
          type="textbox"
          model="postalCode"
          label="Postal code"
          maxlength="10"
        />
        <u-input type="textbox" model="email" label="Email" />
        <u-input type="textbox" model="website" label="Website" />
        <u-input
          type="textbox"
          model="description"
          label="Description"
          multiLine
          fullRow
        />
        <u-input
          type="textbox"
          model="address"
          label="Address"
          multiLine
          fullRow
        />
      </u-form-content>
      <u-form-actions>
        <u-btn label="Load" on-click="loadContact" type="bbbb" />
        <u-btn label="Add" on-click="addContact" />
        <u-btn label="Update" on-click="updateContact" />
        <u-btn label="Delete" on-click="deleteContact" />
        <u-btn label="Reset" @click="reset" />
      </u-form-actions>
    </u-form>
  </u-card>
</page>

<script>
export default {
  data() {
    return {
      model: {
        id: 100,
        name: "amir"
      },
      message: ""
    };
  },
  methods: {
    reset() {
      // console.log(this.$route.meta.layout='Blank')
      console.log(this.model);
      // console.log(this.pages)
      console.log("reset");
    },
    loadContact() {
      console.log(this.model);
      console.log("loadContact");
    },
    addContact() {
      console.log(this.model);
      console.log("addContact");
    },
    updateContact() {
      console.log(this.model);
      console.log("updateContact");
    },
    deleteContact() {
      console.log(this.model);
      console.log("deleteContact");
    }
  }
};
</script>