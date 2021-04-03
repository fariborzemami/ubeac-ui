<page layout="Full" title="Contacts" route="/contacts/add">
  <u-content>
    <u-card title="Add Contact">
      <u-form columns="2">
        <u-form-content>
          <u-input type="textbox" v-model="model.id" label="Id" />
          <u-input type="dropdown" v-model="model.title" label="Title" />
          <u-input type="textbox" v-model="model.name" label="Fullname" />
          <u-input type="dropdown" v-model="model.companyId" label="Company" />
          <u-input type="textbox" v-model="model.jobTitle" label="Job title" />
          <u-input type="textbox" v-model="model.tel" label="Tel" maxlength="11" />
          <u-input type="textbox" v-model="model.extention" label="Ext." />
          <u-input type="textbox" v-model="model.mobile" label="Cellphone" maxlength="11" />
          <u-input type="textbox" v-model="model.fax" label="Fax" maxlength="11" />
          <u-input type="textbox" v-model="model.postalCode" label="Postal code" maxlength="10" />
          <u-input type="textbox" v-model="model.email" label="Email" />
          <u-input type="textbox" v-model="model.website" label="Website" />
          <u-input type="textbox" v-model="model.description" label="Description" multiLine fullRow />
          <u-input type="textbox" v-model="model.address" label="Address" multiLine fullRow />
        </u-form-content>
        <u-form-actions>
          <u-btn label="Load" @click="loadContact" />
          <u-btn label="Add" @click="addContact" />
          <u-btn label="Update" @click="updateContact" />
          <u-btn label="Delete" @click="deleteContact" />
          <u-btn label="Reset" @click="reset" />
        </u-form-actions>
      </u-form>
    </u-card>
  </u-content>
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
    reset() {
      console.log('reset');
    },
    loadContact() {
      console.log('loadContact');
    },
    addContact() {
      console.log('addContact');
    },
    updateContact() {
      console.log('updateContact');
    },
    deleteContact() {
       console.log('deleteContact');
    }
  }
};
</script>