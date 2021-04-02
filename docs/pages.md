# Pages
A page is a web based UI which will be developed by app developers to be shown to the end-users. Developers may define some configuration to make the Page available.

Each page must have these configurations:
* **title** : shown in browser title (default: file name)
* **route** : URL path for the page to be loaded in browser (default: file name)
* **roles** (required): list of role names which have access to view the page 
* **layout** : each page may be shown in different layouts and this is default layout for the page (default: Full)
* **icon** : shown in browser window icon (default: none)

```
<page layout="Full" title="Welcome!" route="/home" icon="home" roles="*">
  <div>Hello world!</div>
</page>
```

## what about child routes?