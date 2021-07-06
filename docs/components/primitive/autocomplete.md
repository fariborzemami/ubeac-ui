# UAutoComplete

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

### isRequired

* type: boolean
* default: false

### items

* type: JSON, Array
* ExampleJSON : {"key":"itemtitle","value":"1"} 
* ExampleArray : [["itemtitle","1"],["itemtitle2","2"]]
## Methods

change

## Examples

```html
<u-autocomplete isRequired="false" disable="false" autofocus="false" visible="true" label="label" @change="" />
```
