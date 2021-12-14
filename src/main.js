import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import wb from './registerServiceWorker'

Vue.config.productionTip = false
Vue.prototype.$workbox = wb

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
