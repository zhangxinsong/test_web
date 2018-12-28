import Vue from 'vue';
import App from './app.vue';
import router from './router';
import Axios from './config/ajax';
import iview from 'iview';

import 'iview/dist/styles/iview.css';

Vue.use(iview);

Vue.prototype.$ajax = Axios;

new Vue({
    router,
    render: (h) => h(App)
}).$mount('#app')
