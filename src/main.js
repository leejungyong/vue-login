// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './assets/css/app.css'
Vue.config.productionTip = false

// Vue.prototype.$custom="这是自定义的属性"
import Utile from './lib/until.js'
Vue.use(Utile);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
