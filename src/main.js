// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VResourcec from 'vue-resource'
import VLazyload from 'vue-lazyload'
// import * as util from '../demo/util'
// import {sum, minus} from '../demo/util'
import './assets/css/base.css'
import './assets/css/checkout.css'
import './assets/css/login.css'
import './assets/css/product.css'
Vue.config.productionTip = false
Vue.use(VResourcec)
Vue.use(VLazyload, {
  loading: '/static/loading-svg/loading-bars.svg'
})
/* eslint-disable no-new */
// console.log(`sum:${util.sum(1, 6)}`)
// console.log(`minus:${util.minus(8, 6)}`)
// console.log(`sum:${sum(1, 6)}`)
// console.log(`minus:${minus(8, 6)}`)
new Vue({
  el: '#app', // 或者new vue().$mount("#app")
  router,
  // render: function (h) {
  //  return h(App)
  //  }
  components: { App },
  template: '<App/>' // template 底层会调用render函数
})// .$mount('#app')
