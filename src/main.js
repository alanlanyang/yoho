// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
//使用mint-ui
import mint from 'mint-ui'
Vue.use(mint)
//使用store
import store from './vuex/store'
//使用swiper
import 'swiper/dist/css/swiper.min.css'

//使用vue-awesome图标
import 'vue-awesome/icons'

import Icon from 'vue-awesome/components/Icon'
Vue.component('icon', Icon)	//全局注册icon组件

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})