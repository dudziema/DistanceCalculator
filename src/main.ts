import { createApp } from 'vue'
import App from './App.vue'
import { createContext } from '@/composables/context'

import '@/assets/stylesheets/main.scss'

(() => {
  const app = createApp(App)
  const { injectionKey, context } = createContext()

  app.provide(injectionKey, context)
  app.mount('#app')
})()
