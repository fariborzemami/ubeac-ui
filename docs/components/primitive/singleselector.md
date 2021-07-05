# USingleSelector

## Properties

### id
* type: String

### name
* type: String

### placeholder
* type: String

### input-class
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

### label
* type: String

### tooltip
* type: String

### tabIndex
* type: Number

### minimumInputCharacter
* type: Number
* comment: for set minimum character in search items

### data
* type: (array,json)
* comment: for fill object on load page without ajax request

### ajax 
* type: object
* comment: for config ajax request for send request to server
    
    ### delay
    * type: Number
    * default: 250
    * comment: value is per miliSecend, for wait until send request to server

    ### url
    * type: String
    * value: Url
    
    ### data
    * type: (function,object)
    * comment: for send parameter to server
    
    ### response
    * type: function
    * comment: return result from server

## Methods
changeItem

## Examples
```html
<u-singleSelector minimumInputCharacter="2" label="" disable="false" data="data" @changeItem="" />
```
