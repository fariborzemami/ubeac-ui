# UCard

## Properties

### header

* type: String
* default: ""

### body-alignment
* type: String
* available values: start, end,center
* default :start

### header-alignment
* type: String
* available values: start, end,center
* default :start
### visible
* type: boolean
* default: true

### closable
* type: boolean
* default: false

## Slots
* body
* footer
* default:body

## Examples

```html
<u-alert header="foo">
    <body>
        ...
    </body>
    <footer>
        ...
    </footer>
</u-alert>

<u-alert header="foo" header-algnment="center" body-algnment="center" closable=""true >
        ...
</u-alert>

```

