/**
 * Created by Administrator on 2018/12/11.
 */
import axios from '../util/interceptor'
import {Notification} from 'element-ui'

export function request (url, method, header, data) {
  data = JSON.stringify(data)
  axios({
    url: url,
    method: method,
    header: header,
    data: data
  }).then(function (response) {
    return response.data
  }).catch(function (error) {
    Notification.error({
      title: '请求失败',
      duration: 0,
      message: error.message
    })
  })
}
