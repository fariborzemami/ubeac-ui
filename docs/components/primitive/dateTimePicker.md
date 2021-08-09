# UDatePicker

## Properties

### id

- type: String

### name

- type: String

### model

- type: Date|String

### format

- type: String
- default: yyyy MM dd

### placeholder

- type: String

### disabled

- type: boolean
- default: false

### visible

- type: boolean
- default: true

### is-required

- type: boolean
- default: false

### label

- type: String

### tooltip

- type: String

## Events

select

## Examples

```html
<u-datePicker
  is-required="false"
  label="foo"
  disabled="false"
  visible="true"
  @select="bar"
/>
```

# Changelog

## [0.3.1] - 2021-08-09

### Fixed

- `Examples`, fixed unnamed functions

### Changed

- `isRequired`, property name has changed to `is-required`
- `formatter`, method has been removed
- `firstDayOfWeek`, property removed
- `v-model`, property has been changed to `model`
