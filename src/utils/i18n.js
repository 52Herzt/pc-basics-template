import { createI18n } from 'vue-i18n'

import messages from '../lang'

const i18n = createI18n({
  locale: 'en_US',
  fallbackLocale: 'en',
  messages,
})

export default i18n
