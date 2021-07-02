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

### tabIndex

* type: Number

### repeatColumns

* type: Number

### class

* type: String

### selectedValue

* type: object

### selectedText

* type: String

### items

* type: JSON, Array
* ExampleJSON : {"key":"itemtitle","value":"1"} 
* ExampleArray : [["itemtitle","1"],["itemtitle2","2"]]

## Methods

change

## Examples

```html
<u-radiobuttonlist isRequired="false" label="" disable="false" autofocus="false" visible="true" repeatColumns="2" @change="" />
```
