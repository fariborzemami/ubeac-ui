# UInput

## Properties

### model

- type: String

### type

- type: string
- available values: text, number

### is-required

- type: boolean
- default: false

### pattern

- type: Regex, String
- Available: phone, email

### placeholder

- type: String

### tooltip

- type: String

### mask

- type: String

### format

- type: String

### disabled

- type: boolean
- default: false

### visible

- type: boolean
- default: true

## Events

change

click

focus

leave

## Examples

```html
<u-input type="text" mask="{8}000000" />
<u-input type="text" format="0,0" />
<u-input type="text" pattern="email" />
```

# Changelog

## [0.3.1] - 2021-08-09

### Added

- `is-required`, property has been added

### changed

- `v-model`, property has been changed to `model`
