import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import VConsole from 'vconsole'
const app=createApp(App)
app.use(router)
app.mount('#app')
if (import.meta.env.MODE !== 'production') new VConsole()
