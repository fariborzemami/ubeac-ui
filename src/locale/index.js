import { createI18n } from 'vue-i18n'
import En from './en.json'

const messages = {
  en: En
}

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})
