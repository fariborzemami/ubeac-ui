import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerComponents from '../core/components/register-components'
import registerLayouts from '../core/layout/register-layouts'
import pages from '@/generated/pages';
import { Quasar } from 'quasar'
import quasarUserOptions from './quasar-user-options'

const app = createApp(App).use(Quasar, quasarUserOptions)

app.config.globalProperties.core = {
    pages: pages
}

app.use(store)
app.use(router)

registerComponents(app)
registerLayouts(app)

app.mount('#app')


