/**
 * Created by Administrator on 2018/12/11.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import login from './login'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    login: login
  }
})
