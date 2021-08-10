## Getting Started

Coming Soon!

- [Vue 3](https://v3.vuejs.org/)
- [Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/)

## Conventions

1- For naming hypothetical values use [Metasyntactic_variable](https://en.wikipedia.org/wiki/Metasyntactic_variable)

```
// Bad
ExampleJSON : {"key":"itemtitle","value":"1","icon":"Alert"}

// Good
ExampleJSON : {"key":"foo","value":"bar","icon":"baz"}

```


2- Acceptable naming for properties, events and slots in documents is kebab-case

Example

```
// Bad
isRequired

// Bad
SelectedItems

// Bad
is_required

// Good
is-required
```

2- Acceptable naming for methods in documents and code is [loverCamelCase](https://en.wikipedia.org/wiki/Camel_case)

Example

```
// Bad
is-required

// Bad
is_required

// Bad
Is_Required

// Good
isRequired
```

Please Consider these principles in your naming:

- Do not use contractions.

- A name should not duplicate the context in which it is defined.

- A name must be short, intuitive and descriptive.

- All functions name should be based on [A/HC/LC Pattern](https://github.com/kettanaito/naming-cheatsheet#naming-functions)    

for more information use this
[cheatsheet](https://github.com/kettanaito/naming-cheatsheet#english-language)

3- All Components must have their version and changelog

4- Acceptable versioning Schema [https://schema.org/version](https://schema.org/version)

5- Keep changelog standard is based on [https://keepachangelog.com/en/1.0.0/](https://keepachangelog.com/en/1.0.0/)
   Changelog Should write at the end of documents and after first version every
   change should be placed in the change log.

6- Consider [SOLID](https://en.wikipedia.org/wiki/SOLID) in component design

7- Don't write example that doesn't works, examples are going to use in playground.

```html
// Bad
<u-colorPicker visible="true" @change=""  />

// Good
<u-colorPicker visible="true" />
```

6- Consider Html tag default attributes in your component design. component
properties should not have conflict with basic html attributes.


