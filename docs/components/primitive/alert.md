# UAlert

## Properties

### text

* type: String
* default: ""

### type

* type: String (success/info/warning/error)
* default: "info" 

### visible
* type: boolean
* default: true

### closable/hideable/???
* type: boolean
* default: false

### Methods


## Examples

```html
<u-alert text="Alert text will be shown!" visible="true" />

<u-alert :visible="!isMobile()">
...
</u-alert>
```

