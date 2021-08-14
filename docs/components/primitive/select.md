# USelect

## Properties

### items

- type: Object, Array
- ExampleJSON : {"key":"foo","value":"1","icon":"alert"}
- ExampleArray : [["foo","1","alert"],["bar","2","mail"]]

### model

- type: Object
- ExampleJSON : {"key":"foo","value":"1"}

### max-select-items

- type: number
- default: 1

### icon

- type: String
- default: ""
- alignment: Start,End

### placeholder

- type: String

### tooltip

- type: String

### disabled

- type: boolean
- default: false

### visible

- type: boolean
- default: true

### loading

- type: boolean
- default: false

### searchable

- type: boolean
- default: false

## Events

change

## Examples

```html
<u-select disabled="false" visible="true" @change="foo" loading="true" />
```

# Changelog

## [0.3.1] - 2021-08-09

### Fixed

- `items` json and array examples has been update.

### changed

- `SelectedItems`, property has been changed to `model`
- `maxSelectItems`, property has been changed to `max-select-items`
- `load` event removed
