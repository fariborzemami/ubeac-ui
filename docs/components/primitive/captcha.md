# UCaptcha

## Properties

### text

* type: String

### value

* type: string




### tooltip

* type: String

### isrequired

* type: boolean
* default: true

### isvalid

* type: boolean
* default: false

### complexitylevel

* type: string
* default: high
* available values: high,middle,low

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

## Methods

refresh


## Examples

```html
<u-captcha complexitylevel="middle" visible="true" @refresh=""  loading="true" />
```
