# UFormItem

Form Item Components are responsible to fill a field of form, it could be
either a simple value number, string, boolean or a complex object.
Form item are responsible to load their needs like Enums, A sync data and etc.

Form Item Responsibilities

- Fill a form field
- Show Preview data
- Get their default data (hint, placeholder) data by `name`

Some Popular Form Item Types:

- Text
- Number
- Range
- Image
- File
- URL
- Password
- Paragraph
- Date
- Time 
- Color
- Select
- Checkbox
- Radio
- Phone
- Price
- Geolocation
- Email
- Search 


``` html
    <u-form-item 
      name="API_REFERENCE.price.name"
      type="API_REFERENCE.price.type"
      loading=""
      readonly=""
      hint=""
      placeholder=""
      rules=""
      label=""
      icon=""
      model="API_REFERENCE.price" >
    </u-form-item>
```

NOTE: Props with * need more analyse

## Form Inputs Props

| Name               | Type              | Default      | Description                            |
| ------------------ |-------------------| -------------| ---------------------------------------|
| name               | String            | ''           | Reference to a model field by name     |
| rules               | Array             | []           | Validation Rules                       |
| type               | String            | ''           | Could be any primitive types or custom components name            |
| ref                | String            | form         | Reference to form component            |
| model              | Reactive Variable | null         | Reactive object of form data           |
| readonly           | Boolean           | false        |                                        |
| disabled           | Boolean           | false        |                                        |
| loading            | Boolean           | false        |                                        |
| autofocus *        | Boolean           | false        |                                        |
| debounce *         | Number            | 100          | Amount of time (in milliseconds) to debounce all inputs in the form. |
| autocomplete       | Boolean           | false        | (Native)                               |
| hint               | String            |              |                                        |
| placeholder        | String            |              |                                        |
| options            | Object            | {}           | Type special options                   |


## Form Item Events

| Name               | Description                                            |
| ------------------ | -------------------------------------------------------|
| before-load        | Form Hook, before load previews data                   |


## Form Item Methods

| Name               | Description                                            |
| ------------------ | -------------------------------------------------------|
| focus              | Focus on first focusable element/component in the form |
| validate           | Triggers a validation on all field                     |
| resetValidation    | Resets the validation on all field                     |
| submit             | Manually trigger form validation and submit            |
| reset              | Manually trigger form reset                            |
| setValues          | Set the value of the form's model (even if no v-model is defined). |


## Form Item Slots

| Name               | Description                                            |
| ------------------ | -------------------------------------------------------|
| default            | Default slot in the content of the component           |


