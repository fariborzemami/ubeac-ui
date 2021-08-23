# Ulink(must confirm!!!!)

## Properties

### href

* type: String
use For External routes - page will be refreshed

### to

* type: String
use For internal routes, just route will be changed

### target 

* type: String
* available values: _self,_blank,_parent,_top

### id

* type: String

### disabled

* type: boolean
* default: false

### visible

* type: boolean
* default: true

## Examples

```html
<u-link href="https://www.google.com" target="_blank" > Google </u-link>
<u-link to="/Foo" >Google </u-link>
```
