import Vue from 'vue'
import App from './App'
import Http from './utils/request'
import './styles/base.scss'
import './styles/resetuiVant.scss'

Vue.prototype.$http = Http
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
