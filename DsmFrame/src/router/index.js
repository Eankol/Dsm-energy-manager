import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import errPage from '@/components/pages/errPage'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/*',
      name: '404',
      component: errPage
    }
  ]
})
