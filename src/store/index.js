import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    isLogin: true
}

const getters = {
    getIslogin(state){
        return state.isLogin
    }
}

const mutations = {
    changeIslogin(state,value){
        state.isLogin = value;
    }
}

const actions = {
    isLogin(context,value){
        context.commit('changeIslogin',value)
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
 
export default store;