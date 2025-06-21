import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import { createHead } from '@vueuse/head'
import router from './router'
import './index.css'

import vIntersect from './directives/v-intersect'

const app = createApp(App)
const head = createHead()

app.use(createPinia())
app.use(router)
app.use(head)

app.directive('intersect', vIntersect)

app.mount('#app')
