import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes.js';
import store from '../store/index.js';

Vue.use(VueRouter);

const router = new VueRouter({
    routes
});

router.beforeEach((to,from,next)=>{
    if(!store.state.isLogin && to.name != 'login'){
        next({name:'login'});
    }else{
        next();
    }
})

export default router;