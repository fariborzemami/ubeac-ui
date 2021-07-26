```
<u-form
  :disable="customLoading"
  @onload="loadFolanData">
  <u-form-group
    title="EmployInfo">
    <u-form-input
      type="select"
      model="formData.name"
      readonly
      cols="6"/>
    <u-form-input
      type="date"
      readonly
      model="formData.date"
      cols="6"/>
  </u-form-group>
  <u-form-group
    title="Submit Entrance">
    <u-form-input
      type="date"
      model="formData.entranceDate"
      cols="6"/>
    <u-form-input
      type="time"
      model="formData.entranceTime"
      label="EvnelopDate"
      cols="6"/>
  </u-form-group>

  <u-form-action>
    <u-form-btn 
      v-if=""
      @click="submit">
      Submit
    </u-form-btn>
    <u-form-btn 
      v-if=""
      @click="reject">
      Submit
    </u-form-btn>
    <u-form-btn type="cancel" >Cancel</u-form-btn>
    <u-form-btn @click="loadEntranceReportData" >Cancel</u-form-btn>
  </u-form-action>

  <u-repeater
    model=""
    showCounter="false"
    @onload="loadEntranceReportData"
    model="entranceReport">
    <u-repeater-row>
      <u-repeater-col>

      </u-repeater-col>
    </u-repeater-row>
  </u-repeater>

  <u-grid
    options="{
      title: { sortable: true, formatter: folen   },
      date: {sortable: true, formatter: folen   }
    }"
    showCounter="false"
    @onload="loadEntranceReportData"
    model="entranceReport = [{ title: 'sample', unit: 32132}, { title: 'sample', unit: 32132}]">
  </u-grid>

  <u-grid
    showCounter="false"
    @onload="loadEntranceReportData"
    model="entranceReport = [{ title: 'sample', unit: 32132}, { title: 'sample', unit: 32132}]">

    <u-grid-col
      model="unit"
      sortabel="true"
      title="title"
      formatter="unitTitle">
    </u-grid-col>

    <u-grid-col
      sortabel="true"
      title="title"
      value="(item) => {fn(item.title, item.unit)}"
      value="(item) => {item.title}"
      formatter="unitTitle">
        <u-btn 
        @click="btnMethods(item.id)"
        :value="item.title" 
        :color="item.color">
        </u-btn>
        <foo-comp 
        :value="item.title" 
        :color="item.color">
        </foo-comp>
      {{ getUnitTitle(colData, data.id) }}
    </u-grid-col>
    <u-grid-col
      sortabel="true"
      title="title"
      formatter="unitTitle">
      {{ data }}
      {{ getUnitTitle(colData, data.id) }}
    </u-grid-col>
  </u-grid>

  <u-report
    showCounter="false"
    @onload="loadEntranceReportData"
    model="entranceReport">
    <u-report-col-index
      title="sampleTitle">
    </u-report-col-index>
    <u-report-col
      sortabel="true"
      title="title"
      model="title"
      formatter="">
    </u-report-col>
    <u-report-col
      sortabel="true"
      title="date"
      model="date"
      formatter="">
    </u-report-col>
  </u-report>

  <u-chart
    mopdel="entranceReportChartData">
  </u-chart>

</u-form>

<script>

let data = {
  formData: '',
  entranceReport: '',
  customLoading: false,
}

let computeds = {
  entranceReportChartData () {
     return entranceReport
  }
}

let methods = {
  loadFolanData () {
     formData.folan = data
  },
  loadEntranceReportData () {
    customLoading = true
    let filters = {
      name: entranceData.employee,
      date: entranceData.date
    }
    SERVER.getEntranceData({ ...filters})
    .then(res => {
      entranceReport = res
      customLoading = false
    })
    .catch(err => {
      customLoading = false
    })
  },
  submit (formData) {
    customLoading = true
    if () {
      SERVER.submitEntrance({ 
        folan: formData.folan,
        ...formData 
      })
      .then(() => {
        customLoading = false
      })
      .catch(err => {
        customLoading = false
      })
    }
  }
}
</script>

```
