import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import '@/assets/myStyle.css';

// font awesome stuff
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

// font awesome stuff
library.add(faUserSecret, fas, far);

const app = createApp(App);

app.use(router);
app.use(VueAxios, axios);
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
