import { Btn, BtnSubmit } from './primitives/Button'
import { Input } from './primitives/Input'
import { Card } from './containers'
import { Form, FormActions, FormContent, FormInput, FormRow } from './form'

import UBreadcrumb from './UBreadcrumb'
import UProfileMenu from './UProfileMenu'
import USidebar from './USidebar'

export default app => {
    app.component('UBtn', Btn)
    app.component('UBtnSubmit', BtnSubmit)
    app.component('UInput', Input)
    app.component('UCard', Card)
    app.component('UBreadcrumb', UBreadcrumb)
    app.component('UProfileMenu', UProfileMenu)
    app.component('USidebar', USidebar)
    app.component('UForm', Form)
    app.component('UFormActions', FormActions)
    app.component('UFormContent', FormContent)
    app.component('UFormInput', FormInput)
    app.component('UFormRow', FormRow)
}