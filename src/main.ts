import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"

// font awesome stuff
import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret, fas, faR } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

// font awesome stuff
library.add(faUserSecret, fas, faR, far)
createApp(App).component('font-awesome-icon', FontAwesomeIcon)

createApp(App).use(router).mount('#app')
