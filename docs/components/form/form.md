# Form

Form Component is responsible to Create and Update an entity,
also they are responsible to load their Model, Validate Data, and Requests to
API server.

TODO:
1- Ask about multiple actions in single form  (Tajan, Pooya)

Form responsibilities:

- Create an entity
- Update an entity
- Load entity data
- Show entity data in a `readonly` form
- Validate entity data Model, before send to client
- Handling Tab index 
- Persistence Data
- Submit by enter key 

``` html

<u-actions>
  <u-action 
    ref="interact"
    result="modelA"
    data="filteringData"
    server="getOperationId">
  </u-action>
</u-actions>

<u-toast
  v-model="modelA">
</u-toast>

<u-filters
  v-model="filteringData">
</u-filters>

<u-report
  v-model="modelA">
</u-report>

<u-form
  :entity-id="sampleId"
  v-model="modelA"
  @update="interaction(interact)"
  @insert="interaction(interact)">
</u-form>

<u-textbox
  @onload="interaction(interact)">
  {{ modalA }}
</u-textbox>


<u-form
  :entity-id="sampleId">
</u-form>

<u-form
  :entity-id="sampleId"
  @update="interaction(interact)"
  @insert="interaction(interact)">
</u-form>

<u-form
  @submit="formSubmit"
  disabled
  readonly
  :after-cencel-route="../"
  ref="formReference"
  :entity-model="pagemodel"
  :entity-id="fromQueryString"
  :get-operation-id="getOperationId"
  :post-operation-id="postOperationId"
  :put-operation-id="putOperationId">

  <u-form-content
    cols="6"
    readonly
    disabled>

    <u-form-item
      v-model="sample"
      :defaults="1"
      type="BranchSelector"
      name="title">
    </u-form-item>

  </u-form-content>

  <u-form-message>
  </u-form-message>

  <u-form-message>
    <!-- Default slot --> 
    <!-- Help  messages will be show here -->
    <u-form-message-help>
    </u-form-message-help>

    <!-- Form messages will be show here -->
    <u-form-message-success>
    </u-form-message-success>

    <!-- Form messages will be show here -->
    <u-form-message-error>
    </u-form-message-error>

    <!-- Form messages will be show here -->
    <u-form-message-alert>
    </u-form-message-alert>

  </u-form-message>

  <!-- In This Form it will append form basic button to the form -->

  <!-- Or you can use it as a container -->
  <u-form-actions>

    <u-form-btn-reset>
      <!-- Default Slot -->
      {{ $t('reset') }}
    </u-form-btn-reset>

    <u-form-btn-cancel>
      <!-- Default Slot -->
      {{ $t('cancel') }}
    </u-form-btn-cancel>

    <u-form-btn-submit>
      <!-- Default Slot -->
      {{ $t('submit') }}
    </u-form-btn-submit>

    <u-btn>
      {{ $t('submit') }}
    </u-btn>

    <u-btn-route
      :to="routeName">
      {{ $t('submit') }}
    </u-btn-route>

    <u-btn-link
      target="blank"
      :to="routeName">
      {{ $t('submit') }}
    </u-btn-link>

    <u-btn-back>
      {{ $t('submit') }}
    </u-btn-back>

    <u-btn-api
      operation="operationId">
      {{ $t('submit') }}
    </u-btn-api>

    <u-btn
      @click="$refs.form.submit()">
      {{ $t('submit') }}
    </u-btn>

    <u-delete-btn
      :message=""
      @click="$refs.form.submit()">
      {{ $t('submit') }}
    </u-delete-btn>

  </u-form-actions>

</u-form>

<script>
export default {
  methods: {
    formSubmit () {
      this.server.user.add(this.model)
    },
    validate (model) {
      return true
    },
    someAwesomeMethod () {
       const fromRef = this.$refs.formReference
    }
  }
}
</script>
```

NOTE: Props with * need more analyse

## Form Props

| Name               | Type              | Default      | Description                            |
| ------------------ |-------------------| -------------| ---------------------------------------|
| ref                | String            | form         | Reference to form component            |
| model              | Reactive Variable | null         | Reactive object of form data           |
| get-operation-id   | String            | null         | In Update form we need load the preview data, so we need an Operation Id |
| post-operation-id  | String            | null         | API operation Id to Create entity      |
| put-operation-id   | String            | null         | API operation Id to Create entity      |

| confirm            | Boolean           | false        | If set true, form get user confirm by showing the data before submit |

| readonly           | Boolean           | false        |                                        |
| disabled           | Boolean           | false        |                                        |
| loading            | Boolean           | false        |                                        |

| autofocus *        | Boolean           | false        |                                        |

| after-cancel-route*| String            | '../'        | Route to go after form cancel          |
| after-submit-route*| String            | null         | Route to go after form success         |

| entity-id          | String            | null         | Entity Id to load preview data         |

| inline *           | Boolean           | false        | Set this as true to show form in inline layout |

| debounce *         | Number            | 100          | Amount of time (in milliseconds) to debounce all inputs in the form. |
| autosave *         | Boolean           | false        | If true form send submit request on ant change |
| autocomplete       | Boolean           | false        | (Native)                               |
| layout *           | String            | 'horizontal' | horizontal, vertical, inline, check with inline props overlap(?) |
| requiredMark *     | Boolean           | true         |                                        |
| scrollToFirstError *| Boolean           | true         |                                        |
| as *               | elementType       | <form>       | You can use a custom element type for this component. |


## Form Events

| Name               | Description                                            |
| ------------------ | -------------------------------------------------------|
| before-load        | Form Hook, before load previews data                   |
| loaded             | Form Hook, after the previews data is loaded           |
| on-load-error      |                                                        |
| on-load-success    |                                                        |
| ready              | When form is ready to edit                             |
| on-cancel          | On Cancel form                                         |
| on-submit          | On Submit form                                         | 
| on-error           | On form API error                                      |
| on-success         | On form API success                                    | 
| validation-success | On form success                                        | 
| validation-error   | On form success                                        | 


## Form Methods

| Name               | Description                                            |
| ------------------ | -------------------------------------------------------|
| focus              | Focus on first focusable element/component in the form |
| validate           | Triggers a validation on all field                     |
| resetValidation    | Resets the validation on all field                     |
| submit             | Manually trigger form validation and submit            |
| reset              | Manually trigger form reset                            |
| setValues          | Set the value of the form's model (even if no v-model is defined). |


## Form Slots

| Name               | Description                                            |
| ------------------ | -------------------------------------------------------|
| default            | Default slot in the content of the component           |


### Reference

- https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form
- https://vuematerial.io/components/form/
- https://vueformulate.com/guide/forms/#props
- https://quasar.dev/vue-components/form
- https://vuetifyjs.com/en/api/v-form/#slots
- https://ant.design/components/form/#components-form-demo-control-hooks
- https://react-bootstrap.github.io/components/forms/
- https://material-ui.com/api/form-control/
- https://react.semantic-ui.com/collections/form/
- https://bulma.io/documentation/form/general/#variables
- https://docs.telerik.com/kendo-ui/api/javascript/ui/form
- https://guides.rubyonrails.org/form_helpers.html




