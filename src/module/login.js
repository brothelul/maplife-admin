/**
 * Created by Administrator on 2018/12/11.
 */

// import request from '../util/request'
import axios from '../util/interceptor'
import router from '../router/index'
import {Message} from 'element-ui'

export default {
  namespace: true,
  state: {
    loginForm: {
      username: null,
      password: null
    },
    loading: false
  },
  actions: {
    login ({commit, state},loginForm) {
      console.log(loginForm)
      state.loading = true
      // const data = request('http://rap2api.taobao.org/app/mock/data/721743', 'get', null, loginForm)
      // console.log(data)
      axios.post('http://rap2api.taobao.org/app/mock/120760/admin/public/api/login', {username: loginForm.username, password: loginForm.password})
        .then(function (response) {
          Message.success({
            message: '登录成功'
          })
          state.loading = false
          router.push({
            path:'/dashboard'
          })
        })
    }
  }
}
