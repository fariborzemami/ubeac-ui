import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/dist/tab.js'
import Router from './router.js'
import 'material-icons/iconfont/material-icons.scss';

// Global Compoenents References
import uForm from './components/form.vue'
import uButton from './components/button.vue'
import MaterialIcon from './components/icon.vue'
import { VueLive, VueLiveEditor, VueLivePreview } from "vue-live";

// Code Editor
import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-dark.css'; // import syntax highlighting styles


const app = createApp(App)
//
// Global Compoenents
app.use(Router)
app.component('ULive', VueLive)
app.component('PrismEditor', PrismEditor)
app.component('ULiveEditor', VueLiveEditor)
app.component('ULivePreview', VueLivePreview)
app.component('uButton', uButton)
app.component('uForm', uForm)
app.component('u-icon', MaterialIcon);

app.mount('#app')

