import { createApp } from 'vue'
import App from './App.vue'
import Router from './router.js'

// Third party library
import i18n from './locale'
import './styles/bootstrap.scss'
import 'bootstrap/js/dist/tab.js'
import 'bootstrap/js/dist/dropdown.js'
import 'bootstrap/js/dist/tooltip.js'
import 'material-icons/iconfont/material-icons.scss';
import "vue-select-connorshea/src/scss/vue-select.scss";
import numeral from 'numeral'
import IMask from 'imask'

// Global Compoenents References
import uForm from './components/form.vue'
import uButton from './components/button.vue'
import uRadioButton from './components/radio.vue'
import uCheckBox from './components/checkbox.vue'
import uAlert from './components/alert.vue'
import uTabs from './components/tabs.vue'
import uTab from './components/tab.vue'
import uInput from './components/input.vue'
import uBreadCrumb from './components/breadcrumb.vue'
import MaterialIcon from './components/icon.vue'
import ColorPicker from './components/colorpicker.vue'
import Select from './components/select.vue'
import Live from './components/Live.vue'
import Link from './components/Link.vue'

// Demo Compoenents References
import DemoHeader from './demo_components/header.vue'

const app = createApp(App)

app.use(Router)
app.use(i18n)

// Global Compoenents
app.component('ULive', Live)
app.component('ULink', Link)
app.component('uButton', uButton)
app.component('uRadioButton', uRadioButton)
app.component('uAlert', uAlert)
app.component('uTabs', uTabs)
app.component('uTab', uTab)
app.component('uInput', uInput)
app.component('uCheckBox', uCheckBox)
app.component('uBreadCrumb', uBreadCrumb)
app.component('uForm', uForm)
app.component('u-icon', MaterialIcon)
app.component('u-select', Select)
app.component('u-colorpicker', ColorPicker)


// Demo Compoenents References
app.component('DemoHeader', DemoHeader)

app.mount('#app')

