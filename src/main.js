import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

import Axios from 'axios'
Axios.defaults.baseURL="http://10.251.255.198:5000"
// sudo flask run -p 5000 -h 0.0.0.0
Vue.prototype.$axios=Axios

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
