# UColorPicker

## Properties

### model

- type: string

### tooltip

- type: String

### is-required

- type: boolean
- default: false

### id

- type: String

### hide-sliders

- type: boolean

### mode

- type: String
- avalable values : (rgb,hex)

### disabled

- type: boolean
- default: false

### visible

- type: boolean
- default: true

## Events

change

select

## Examples

```html
<u-colorPicker visible="true" @change="foo" />
```

# Changelog

## [0.3.1] - 2021-08-09

### Fixed

- `Examples`, fixed unnamed functions
- `load`, event removed

### Changed

- `isRequired`, property name has changed to `is-required`
- `v-model`, property has been changed to `model`
