import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import errPage from '@/components/pages/errPage'
import dsmEnergyUse from '@/components/pages/EnergyManager/dsmEnergyUse'
import dsmPowerModelConsumption from '@/components/pages/EnergyManager/dsmPowerModelConsumption'

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
      path: '/kode/basic/basic.html',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/kode/EnergyManager/DSM_power_consumption/DSM_energy_use.html',
      name: '用能数据',
      component: dsmEnergyUse
    },
    {
      path: '/kode/EnergyManager/DSM_power_consumption/DSM_power_model_consumption.html',
      name: '耗电类比分析',
      component: dsmPowerModelConsumption
    },
    {
      path:"/kode/EnergyManager/EM_ca/energy.html",
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
