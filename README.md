# ubeac-ui
The goal of this project is to develope a language/technology independent UI framework to be used in enterprise application. 
* Define an HTML based DSL for UI developer
* Develop a UI framework based on the DSL
* Focused on admin panel
* Minimizing Javascript/CSS development

## Defintions

### Pages
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

### Layouts
* **Blank** : Blank layout is the most simple view of a page: it is a blank view including required Styles and JavaScripts. This is used for the scenarios like: login, landing, register, etc. that is not rendered with additional components (header, footer, etc.)
* **Simple** : Similar to Blank layout,but including only header and footer. This is used for popups, printable version, etc.
* **NoSidebar** : Similar to Simple layout, but including user profile menu. This is used for complex reports which need more space in the browser.
* **Full**: This is the full featured layout including header, footer, profile, and sidebar menu which is mostly used in admin panels.


### User
Users' authentication with JWT + Refresh Token support feature

### Roles
There are some built-in roles which must be supprted by API. In addition to the built-in roles, developers may add additional roles in a seperate file. Built-in roles are:
* **admins** : administrators 
* **\*** : all authenticated/unauthenticated users
* **?** : unauthenticated users
* **auth** : authenticated users

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
