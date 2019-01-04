import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import errPage from '@/components/pages/errPage'
import index from '@/components/pages/index'
import main from '@/components/main'
import login from '@/components/pages/login'
import dsmEnergyUse from '@/components/pages/EnergyManager/dsmEnergyUse'
import dsmPowerModelConsumption from '@/components/pages/EnergyManager/dsmPowerModelConsumption'
import dsmPowerModelConsumptionTwo from '@/components/pages/EnergyManager/dsmPowerModelConsumptionTwo'
import energy from '@/components/pages/EnergyManager/energy'
import energy2 from '@/components/pages/EnergyManager/energy2'
import demand from '@/components/pages/EnergyManager/demand'

Vue.use(Router)

export default new Router({
  mode:'hash',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/main',
      name: 'mainBox',
      component: main,
      children:[
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
          path: '/kode/EnergyManager/DSM_power_consumption/DSM_power_time_consumption.html',
          name: '耗电时比分析',
          component: dsmPowerModelConsumptionTwo
        },
        {
          path: "/kode/EnergyManager/EM_ca/energy.html",
          name: 'energy',
          component: energy
        },
        {
          path: "/kode/EnergyManager/EM_ca/energy2.html",
          name: 'energy2',
          component: energy2
        },
        {
          path:'/kode/demand/demand.html',
          name:'demand',
          component: demand
        },
        {
          path: '/*',
          name: '404',
          component: errPage
        }
      ]
    }
    
  ]
})
