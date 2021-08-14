# UCheckBox

## Properties

### text

- type: String

### value

- type: number
- available values: string, datetime, date, time

### tooltip

- type: String

### id

- type: String

### name

- type: String

### tooltip

- type: String

### disabled

- type: boolean
- default: false

### type

- type: string
- default: ""
- available: "confirm"

### visible

- type: boolean
- default: true

## Events

change

click

## Examples

```html
<u-checkBox disable="false" visible="true" @change="foo" />
```

# Changelog

## [0.3.1] - 2021-08-09

### Fixed

- `Examples`, fixed unnamed functions
