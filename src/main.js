import { h, createApp } from 'vue'
import App from './App.vue'
import Router from './router.js'

// Third party library
import i18n from './locale'
import './styles/bootstrap.scss'
import 'bootstrap/js/dist/tab.js'
import 'bootstrap/js/dist/dropdown.js'
import 'bootstrap/js/dist/tooltip.js'
import 'material-icons/iconfont/material-icons.scss';
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
import Live from './components/live.vue'
import Link from './components/link.vue'
import Datepicker from './components/datepicker.vue'

// Demo Compoenents References
import DemoHeader from './demo_components/header.vue'

window.h = h

const app = createApp(App)

app.use(Router)
app.use(i18n)

// Global Compoenents
app.component('ULive', Live)
app.component('ULink', Link)
app.component('UButton', uButton)
app.component('URadioButton', uRadioButton)
app.component('UAlert', uAlert)
app.component('UTabs', uTabs)
app.component('UTab', uTab)
app.component('UInput', uInput)
app.component('UCheckBox', uCheckBox)
app.component('UBreadCrumb', uBreadCrumb)
app.component('UForm', uForm)
app.component('UIcon', MaterialIcon)
app.component('USelect', Select)
app.component('UColorpicker', ColorPicker)
app.component('UDatepicker', Datepicker)

// Demo Compoenents References
app.component('DemoHeader', DemoHeader)

app.mount('#app')

