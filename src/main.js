import Vue from 'vue';
import App from './app.vue';
import router from './router';
import Axios from './config/ajax.js';
import iview from 'iview';
import store from './store/index.js'

import 'iview/dist/styles/iview.css';
import 'Assets/css/index.less';

Vue.use(iview);

Vue.prototype.$ajax = Axios;

new Vue({
    store,
    router,
    render: (h) => h(App)
}).$mount('#app')
