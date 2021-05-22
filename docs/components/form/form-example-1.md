```

<u-form
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

<script>
export default {
  methods: {
     
  },
  computed: {
     sum () {
       this.list = []
     }
  },
  props () {
    myAttra: {
       type: String,
    }
  },
  data () {
    return {
      list: []
    }
  },
  computed: {
   isDisabled: () => this.model.createDate > somthing,
  },
  methods: {
    reject () {
      server.rejectBranchRequest(model.id).then((res) => {
        this.response = res.result
      })
    },
    approve () {
      server.approveBranchRequest(model)
    },
    formLoad () {
      server.loadBranchrequets(this.route.id).then((response) => {
         helperfunction()`
         this.model = response
      })
    }
  }
}
</script>

<script>

let data = {
  loading: false
}

let loading = false

mounted () {

}

loadReportData () {
  server.gerReport().then((response) => {
    this.reportData = response.data
    this.mainData = response.data
  })
}


this.isDisabled = () => this.model.createDate > somthing

helperfunction () {

}

const list = []

formLoad () {
  server.loadBranchrequets(this.route.id).then((response) => {
     helperfunction()
     this.model = response
  })
}

isOthertDisabled = () => this.model.createDate > somthing

reject () {
  server.rejectBranchRequest(model.id).then((res) => {
    this.response = res.result
  })
}

approve () {
  server.approveBranchRequest(model)
}

formLoad () {
  server.loadBranchrequets(this.route.id).then((response) => {
     helperfunction()
     this.model = response
  })
}

// export default {
//   reject,
//   formLoad
// }

</script>


```
