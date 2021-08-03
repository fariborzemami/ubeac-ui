# USelect

## Properties

### items

* type: JSON, Array
* ExampleJSON : {"key":"itemtitle","value":"1","Icon":"Alert"} 
* ExampleArray : [["itemtitle","1","Alert"],["itemtitle2","2","Mail"]]

### maxSelectItems

* type: number
* default: 1

### SelectedItems

* type: array, json
* ExampleJSON : {"key":"itemtitle","value":"1"} 
* ExampleArray : [["itemtitle","1"],["itemtitle2","2"]]


### icon

* type: String
* default: ""
* alignment: Start,End


### placeholder

* type: String

### tooltip

* type: String

### disabled

* type: boolean
* default: false

### visible

* type: boolean
* default: true

### loading

* type: boolean
* default: false

### searchable

* type: boolean
* default: false


## Events

change

load

## Examples

```html
<u-select disabled="false"  visible="true" @change="" @load="" loading="true" />
```
