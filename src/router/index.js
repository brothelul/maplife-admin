import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/Login'
import Main from '@/page/Main'
import children from './children'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Main,
      children: children.children
    }
  ]
})
