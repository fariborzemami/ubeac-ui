import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap/js/dist/tab.js'
import 'bootstrap/js/dist/dropdown.js'
import 'bootstrap/js/dist/tooltip.js'
import Router from './router.js'
import 'material-icons/iconfont/material-icons.scss';

// Global Compoenents References
import uForm from './components/form.vue'
import uButton from './components/button.vue'
import uRadioButton from './components/radio.vue'
import uCheckBox from './components/checkbox.vue'
import uAlert from './components/alert.vue'
import uTabs from './components/tabs.vue'
import uTab from './components/tab.vue'
import uBreadCrumb from './components/breadcrumb.vue'
import MaterialIcon from './components/icon.vue'
import ColorPicker from './components/colorpicker.vue'
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
app.component('uRadioButton', uRadioButton)
app.component('uAlert', uAlert)
app.component('uTabs', uTabs)
app.component('uTab', uTab)
app.component('uButton', uButton)
app.component('uCheckBox', uCheckBox)
app.component('uBreadCrumb', uBreadCrumb)
app.component('uForm', uForm)
app.component('u-icon', MaterialIcon);
app.component('u-colorpicker', ColorPicker);

app.mount('#app')

