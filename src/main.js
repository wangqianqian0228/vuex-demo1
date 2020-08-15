import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,//将store挂载到全局上，所有的vue实例都可以使用
  render: h => h(App)
}).$mount('#app')
