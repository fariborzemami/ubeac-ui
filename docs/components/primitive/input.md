# UInput

## Properties

### text

* type: String

### type

* type: string
* available values: text, number

### pattern
* type: Regex, String
* Available: phone, email

### placeholder

* type: String

### tooltip

* type: String

### mask

* type: String

### format
 * type: String
 
### disabled

* type: boolean
* default: false

### visible

* type: boolean
* default: true

## Events

change

click

focus

leave

## Examples

```html
<u-input type="text" mask="{8}000000" format="0,0"  />
```
