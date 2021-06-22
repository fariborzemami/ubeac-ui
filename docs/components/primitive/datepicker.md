# UDatePicker

## Properties

### id

* type: String

### name

* type: String

### value

* type: Date|String

### format

* type: String
* default: yyyy MM dd

### full-month-name

* type: Boolean
* default: false

### placeholder

* type: String

### calendar-class	

* type: String

### input-class

* type: String

### week-first-day

* type: number
* default: 1 >> شنبه

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

## Methods

opened
closed
selectedDate
changedMonth
changedYear

## Examples

```html
<u-datePicker isRequired="false" label="" disable="false" autofocus="false" visible="true" @opened="" @closed="" @selectedDate="" />
```
