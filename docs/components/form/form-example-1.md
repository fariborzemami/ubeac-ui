```
<u-page>

<u-form
  @onload="formOnLoad"
  model="filteringObject">
  <u-form-input></u-form-input>
  <u-btn></u-btn>
</u-form>

<u-grid
  filtering="filteringObject"
  operationId=""
  :model="reportData">

  <u-grid-col
  value="id"
  label="labletext">
  </u-grid-col>

  <u-grid-col
  value="name"
  label="labletext">
  </u-grid-col>

  <u-grid-col
    :visible="CURRENT_UNIT === 'branch'"
    value="branchCode"
    label="labletext">
  </u-grid-cola>
  
  <u-grid-final-row>
  <u-grid-col
    value="amount"
    label="labletext">
    {{ sumComuted }}
  </u-grid-cola>
  </u-grid-final-row>

  <u-grid-col
    :visible="CURRENT_UNIT === 'branch'"
    value="branchName"
    label="labletext">
    {{ getUnitNameBuUnitId(item.branchCode) }}
  </u-grid-col>

  <u-grid-col
  value="name"
  label="labletext">
   {{ item }}
   <u-btn
     :to="item.link"
     v-if="item.code === 1">
   </u-btn>
  </u-grid-col>
</u-grid>



<u-grid
  :model="reportData">
  <u-grid-col
  value="id"
  label="labletext">
  </u-grid-col>
  <u-grid-col
  value="name"
  label="labletext">
  </u-grid-col>
</u-grid>

<u-form
  @load="formLoad">

  <u-form-text></u-form-text>

  <u-btn
    :disabled="isDisabled"
    @click="reject">
    Reject
  </u-btn>

  <u-btn
    :disabled="isDisabled"
    @click="approve">
    Approve
  </u-btn>

  <u-btn
    @click="loadReportData">
    Approve
  </u-btn>

  <u-form-message 
    type="response.type">
    {{ response.message }}
  </u-form-message>

</u-form>
</u-page>

<sciprt>

</sciprt>

<script setup>
export deafult {

}
</script>


<script ubeac>

let data = {
  searchKey: '',
  loading: false,
  folan: 1,
}

let computed = {
  sum (a, b) {
     return a + b
  },
  folan () {

  },
  filteredData () {
    return this.products.filter((item) => {
       return item.title.includes(this.searchKey)
    })
  }
}

let methods = {
  sampleFunction () {

    this.sampleFunction1()

    this.folan = 5

  },
  sampleFunction1 () {
    this.folan = 5
  },
  sampleFunction2 () {
    this.folan = 5
  }
}

// Note: Will be add by core
//export default {
//  data: data,
//  methods: methods,
//  computed: computed,
//}
</script>

```
