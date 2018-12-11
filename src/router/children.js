/**
 * Created by Administrator on 2018/12/11.
 */
import Dashboard from '@/page/children/Dashboard'
import Log from '@/page/children/Log'

const children =[{
  path: '/dashboard',
  name: 'Dashboard',
  component: Dashboard
},
  {
    path: '/log',
    name: 'Log',
    component: Log
  }]

export default {
  children
}
