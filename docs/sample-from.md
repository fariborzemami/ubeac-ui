```
<u-form
   :cols="6"
  :disable="customLoading"
  :model="envelopData"
  @submit="submit">
  <u-form-input
    type="string"
    name="client"
    readonly
    cols="6"/>
  <u-form-input
    type="selectCheckBox"
    multiple
    :items="ENUMS.envelopTypes"
    name="type"
    cols="6"/>
  <u-form-input
    type="string"
    name="number"
    cols="6"/>
  <u-form-input
    type="date"
    name="date"
    cols="6"/>
  <u-form-input
    type="string"
    name="code"
    cols="6"/>
  <u-form-input
    type="selectCheckBox"
    multiple
    :items="ENUMS.category"
    name="category"
    cols="6"/>
  <u-form-input
    type="date"
    name="recieveDate"
    cols="6"/>
  <u-form-input
    type="selectCheckBox"
    multiple
    name="recieveType"
    :items="ENUMS.recieveType"
    cols="6"/>
  <u-form-input
    type="selectCheckBox"
    multiple
    :items="ENUMS.reciever"
    name="reciever"
    cols="6"/>
  <u-form-input
    type="string"
    name="client"
    cols="12"/>
  <u-form-input
    type="string"
    name="content"
    cols="12"/>

  <u-form-group
    title="Sign">
    <u-form-input
      type="string"
      name="firstSign"
      cols="6"/>
    <u-form-input
      type="string"
      name="secondSign"
      cols="6"/>
  </u-form-group>

  <u-form-group
    title="Keywords">
    <u-form-input
      type="string"
      name="keywords"
      cols="12"/>
  </u-form-group>

  <u-form-group
    title="Projects">
    <u-form-input
      type="multiSelect"
      name="projects"
      cols="12"/>
  </u-form-group>

  <u-form-group
    title="Following">
    <u-form-input
      name="followingStatus"
      cols="12"/>
    <u-form-input
      name="followingBy"
      cols="12"/>
    <u-form-input
      name="followingDescription"
      cols="12"/>
  </u-form-group>

  <u-form-group
    cols="6"
    title="relatedEnvelop">
    <u-form-input
      :type="addToList"
      name="followingStatus"
      cols="12"/>
    <!-- TODO -->
  </u-form-group>

  <u-form-group
    cols="6"
    title="Copies">
    <u-form-input
      :type="addToList"
      name="copies"
      cols="12"/>
    <!-- TODO -->
  </u-form-group>

  <u-form-group
    title="Files">
    <u-form-input
      type="file"
      name="file"
      cols="12"/>
  </u-form-group>

  <u-form-group
    title="Personnel">
    <u-form-input
      type="chips"
      name="personnel"
      cols="12"/>
  </u-form-group>

  <u-form-group
    title="Attachments">
    <u-form-input
      type="file"
      name="attachments"
      cols="12"/>
  </u-form-group>
   
  <u-form-action>
    <u-form-btn type="submit" >Submit</u-form-btn>
    <u-form-btn type="cancel" >Cancel</u-form-btn>
  </u-form-action>
</u-form>

<script>
loadFormData()

let data = {
  envelopData: '',
  customLoading: false,
}

let methods = {
  loadFormData () {
    customLoading = true
    SERVER.getFormData()
    .then(res => {
      envelopData = res
      customLoading = false
    })
    .catch(err => {
      customLoading = false
    })
  },
  submit (formData) {
    customLoading = true
    SERVER.updateEnvelop({ ...formData })
    .then(() => {
      customLoading = false
    })
    .catch(err => {
      customLoading = false
    })
  }
}
</script>





```
