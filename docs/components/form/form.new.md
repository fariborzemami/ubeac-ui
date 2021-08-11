# Form

Form Component is responsible to Create and Update an entity,
also they are responsible to load their Model, Validate Data, and Requests to
API server.

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

<u-form
 cols="6"
 disabled
 readonly
  @onload="formOnLoad"
  model="filteringObject"

  >
  <u-form-input></u-form-input>
  <u-btn></u-btn>
</u-form>

<script>

```

NOTE: Props with * need more analyse

## Form Props

| Name               | Type              | Default      | Description                            |
| ------------------ |-------------------| -------------| ---------------------------------------|
|
| model              | Reactive Variable | null         | Reactive object of form data           |
| confirm            | Boolean           | false        | If set true, form get user confirm by showing the data before submit |
| disabled           | Boolean           | false        |                                        |
| loading            | Boolean           | false        |                                        |
| autofocus *        | Boolean           | false        |                                        
| autosave *         | Boolean           | false        | If true form send submit request on ant change |
| autocomplete       | Boolean           | false        | (Native)                               |
| layout *           | String            | 'horizontal' | horizontal, vertical, inline



## Form Events

| Name               | Description                                            |
| ------------------ | -------------------------------------------------------|
| load               | Form Hook, after the previews data is loaded           |
| ready              | When form is ready to edit                             |


## Form Methods

| Name               | Description                                            |
| ------------------ | -------------------------------------------------------|
| focus              | Focus on first focusable element/component in the form |
| validate           | Triggers a validation on all field (***need validation method or library**** )                    |
| resetValidation    | Resets the validation on all field                     |
| reset              | Resets all form data to default values                            |



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




