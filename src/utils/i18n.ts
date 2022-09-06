import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import pt from './pt.json'
import en from './en.json'
import es from './es.json'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'pt',
  resources: {
    pt,
    en,
    es
  },
  react: {
    useSuspense: false
  },
  interpolation: {
    escapeValue: false
  }
})

export default i18n