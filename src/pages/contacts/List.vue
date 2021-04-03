<page layout="Full" title="Contacts" route="/contacts/list">
    <u-content>
        <u-card title="Contacts List">
            <u-grid :model="model">
                <u-grid-columns v-for="(model, index) in model" :key="index">
                    <u-grid-column type="text" v-model="model.title" title="Title" />
                    <u-grid-column type="text" v-model="model.name" title="Full name" />
                    <u-grid-column type="text" v-model="model.company.name" title="Company" />
                    <u-grid-column type="text" v-model="model.jobTitle" title="Job title" />
                    <u-grid-column type="text" v-model="model.tel" title="Tel" />
                    <u-grid-column type="text" v-model="model.extention" title="Ext." />
                    <u-grid-column type="text" v-model="model.mobile" title="Cellphone" />
                    <u-grid-column type="text" v-model="model.fax" title="Fax" />
                    <u-grid-column type="text" v-model="model.address" title="Address" />
                    <u-grid-column type="text" v-model="model.postalCode" title="Postal code" />
                    <u-grid-column type="text" v-model="modelemail" title="Email" />
                    <u-grid-column type="href" v-model="model.website" title="Website" />
                    <u-grid-column title="Edit">
                        <u-btn v-model="model.id" action="edit" title="Edit" />
                    </u-grid-column>
                    <u-grid-column title="Detail">
                        <u-btn v-model="model.id" action="viewDetail" title="Detail" />
                    </u-grid-column>
                    <u-grid-column title="Delete">
                        <u-btn v-model="model.id" action="delete" title="Delete" />
                    </u-grid-column>
                </u-grid-columns>
            </u-grid>
        </u-card>
    </u-content>
</page>

<script>
export default {
  data() {
    return {
      model: {},
      message: "",
    };
  },
  mounted() {
  },
};
</script>