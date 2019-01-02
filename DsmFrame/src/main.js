// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import g from './components/global'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import swal from 'sweetalert';
import SIdentify from './components/pages/identify'
import elementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


import echarts from 'echarts'

Vue.prototype.$echarts = echarts 
Vue.prototype.$g = g

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(SIdentify)
Vue.use(elementUI)
Vue.swal = swal
Vue.prototype.$swal = swal



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
