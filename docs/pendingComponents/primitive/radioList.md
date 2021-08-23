# URadioButtonList

## Properties

### id

* type: String

### label

* type: String

### autofocus

* type: boolean
* default: false

### disabled

* type: boolean
* default: false

### visible

* type: boolean
* default: true

### tooltip

* type: String

### repeatColumns

* type: Number

### items

* type: object, Array
* ExampleJSON : {"key":"foo","value":"1","selected":"false"} 
* ExampleArray : [["foo","1","true"],["bar","2","false"]]

### SelectedItem

* type: object, Array

* ExampleJSON : {"key":"foo","value":"1"} 
* ExampleArray : [["foo","1"],["bar","2"]]


## Methods

change

load

## Examples

```html
<u-radiobuttonlist label="" disable="false" autofocus="false" visible="true" repeatColumns="2" @change="" />
```
