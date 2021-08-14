# UButton

## Properties

### text

- type: String

### tooltip

- type: String

### variant

- type: String (success/info/warning/error/secondary/primary/danger)
- default: "info"

### disabled

- type: boolean
- default: false

### visible

- type: boolean
- default: true

### loading

- type: boolean
- default: false

### icon

- type: String
- default: ""

## Events

### click

## Examples

```html
<u-button
  variant="danger"
  disabled="false"
  autofocus
  text="Submit"
  visible="true"
  @click="foo"
  loading="true"
/>
<u-button
  variant="danger"
  disabled="false"
  autofocus
  visible="true"
  @click="foo"
  loading="true"
>
  Submit
</u-button>
```

# Changelog

## [0.3.1] - 2021-08-09

### Fixed

- `Examples`, fixed unnamed functions
