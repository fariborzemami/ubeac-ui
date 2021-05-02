import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerLayouts from '../core/layout/register-layouts'
import registerComponents from '../core/components'
import pages from '@/generated/pages';

const app = createApp(App)

app.config.globalProperties.core = {
    pages: pages
}

app.use(store)
app.use(router)

registerComponents(app)
registerLayouts(app)

app.mount('#app')


