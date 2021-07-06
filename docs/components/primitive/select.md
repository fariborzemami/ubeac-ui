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
* ExampleJSON : {"key":"itemtitle","value":"1","Icon":"Alert"} 
* ExampleArray : [["itemtitle","1","Alert"],["itemtitle2","2","Mail"]]

### MaxSelectItem

* type: number
* default: 1

### SelectedItem

* type: number
* available values: string, datetime, date, time

### Icon

* type: String
* default: ""
* alignment: Start,End

### itemOptions

* type: JSON
* ExampleJSON : {"itemAlignment":"Start","IconAlignment":"end","spacing":"10"} 

 
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

### disabled

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

### loading

* type: boolean
* default: false

## Methods

change
beforChange
onLoad

## Examples

```html
<u-select text="String" value="number" disabled="false" autofocus visible="true" @change="" @beforChange="" @onLoad="" loading="true" />
```
