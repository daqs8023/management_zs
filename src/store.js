import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        currentUser:{}//当前用户
    },
    mutations:{
        //设置当前用户
        setCurrentUser(state,user){
            state.currentUser = user;
        }
    },
    actions:{
        //设置当前用户
        setCurrentUser({commit},item){
            commit('setCurrentUser',item)
        }
    }
})