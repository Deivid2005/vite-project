import { createApp } from 'vue'
import './style.css'
import 'bootstrap/dist/css/bootstrap.css' // Importa los estilos de diseño
import 'bootstrap/dist/js/bootstrap.bundle.js' // Importa los componentes interactivos (modales, tooltips, etc.)
import App from './App.vue'
import router from './router/index.js'

createApp(App).use(router).mount('#app')
