# UCaptcha

## Properties


### value

* type: string

### isvalid

* type: boolean
* default: false

### id

* type: String


### cssClass

* type: String

### toolTip

* type: String

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

### url

* type: string

## Methods

refresh
validate

## Examples

```html
<u-captcha url="api/getCaptcha" visible="true" @refresh=""  @validate="" />
```
