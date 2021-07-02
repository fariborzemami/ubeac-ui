# USelect

## Properties

### text

* type: String
* available values: text, number, date, time, datetime, money

### value

* type: number
* available values: string, datetime, date, time

### items

* type: JSON, Array
* ExampleJSON : {"key":"itemtitle","value":"1"} 
* ExampleArray : [["itemtitle","1"],["itemtitle2","2"]]


### placeholder

* type: String

### tooltip

* type: String

### format

* type: String
* available type: text, number, date, time, datetime, money

### mask

* type: String
* available type: number, date, time, datetime, money

### autofocus

* type: boolean
* default: false

### disable

* type: boolean
* default: false

### dir

* type: string
* default: left
* available values: left, right

### visible

* type: boolean
* default: true

### readonly

* type: boolean
* default: false

### language

* type: String
* default: null
* available values: en-US, fa-IR, ...

## Methods

change
beforchange

## Examples

```html
<u-select texttype="String" valuetype="number" disabled="false" autofocus visible="true" @change="" @beforchange="" loading="true" />
```
