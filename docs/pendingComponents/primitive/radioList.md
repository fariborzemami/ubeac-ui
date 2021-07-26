# URadioButtonList

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

### dir

* type: string
* default: right
* available values: left, right

### visible

* type: boolean
* default: true

### readonly

* type: boolean
* default: false

### isRequired

* type: boolean
* default: false

### tooltip

* type: String

### repeatColumns

* type: Number

### cssClass

* type: String


### items

* type: JSON, Array
* ExampleJSON : {"key":"itemtitle","value":"1","Icon":"Alert","selected":"false"} 
* ExampleArray : [["itemtitle","1","Alert","true"],["itemtitle2","2","Mail","false"]]

### MaxSelectItem

* type: number
* default: none

### SelectedItem

* type: JSON, Array

* ExampleJSON : {"key":"itemtitle","value":"1","Icon":"Alert"} 
* ExampleArray : [["itemtitle","1","Alert"],["itemtitle2","2","Mail"]]

### Icon

* type: String
* default: ""
* alignment: Start,End

## Methods

onchange

onload

## Examples

```html
<u-radiobuttonlist isRequired="false" label="" disable="false" autofocus="false" visible="true" repeatColumns="2" @change="" />
```
