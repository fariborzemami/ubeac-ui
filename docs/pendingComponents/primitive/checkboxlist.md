# UCheckBoxList

## Properties

### id

* type: String

### label

* type: String

### autofocus

* type: boolean
* default: false

### disable

* type: boolean
* default: false

### visible

* type: boolean
* default: true

### readonly

* type: boolean
* default: false

### tooltip

* type: String

### repeatColumns

* type: Number

### items

* type: object, Array
* ExampleJSON : {"key":"foo","value":"1","selected":"false"} 
* ExampleArray : [["foo","1","true"],["bar","2","false"]]

### selectedItem

* type: object, Array

* ExampleJSON : {"key":"foo","value":"1"} 
* ExampleArray : [["foo","1"],["bar","2"]]


### maxSelectItem

* type: number
* default: none


## Examples

```html
<u-checkboxlist isRequired="false" label="" disable="false" autofocus="false" visible="true" repeatColumns="2" @change="" />
```
