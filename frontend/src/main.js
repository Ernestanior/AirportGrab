import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import toast from '@/components/showtoast/toast/toast'
import loading from '@/components/showtoast/loading/loading'
import error from '@/components/showtoast/error/error'
import VueModel from '@/components/showmodel/model';

Vue.use(ElementUI)
Vue.use(toast)
Vue.use(loading)
Vue.use(error)
Vue.use(VueModel)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
