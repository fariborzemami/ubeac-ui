# ubeac-ui
The goal of this project is to develope a language/technology independent UI framework to be used in enterprise application. 
* Define an HTML based DSL for UI developer
* Develop a UI framework based on the DSL
* Focused on admin panel
* Minimizing Javascript/CSS development

## Defintions
* [Pages](/docs/pages.md)
* [Layouts](/docs/layouts.md)
* [Components](/docs/components.md)
* [Users](/docs/users.md)
* [Roles](/docs/roles.md)


## VS Code configuration
### Page Block Syntax Highlighting (custom block)
1. Install [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)
2. Type ctrl+,
3. Search for `vetur.grammar.customBlocks`
4. In **Vetur > Grammar > Custom Blocks** click on Edit in `settings.json`
5. Modify the settings as shown below:
```
{
    ...
    "vetur.grammar.customBlocks": {
        "page": "html" // add this line 
        ...
    }
}
```
6. Type Ctrl+Shift+P and run the command "Vetur: Generate grammar from vetur.grammar.customBlocks"
7. Restart VS Code to get syntax highlighting for custom blocks.

For more detail for Syntax Highlighting in Vetur [click here](https://vuejs.github.io/vetur/guide/highlighting.html).


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
