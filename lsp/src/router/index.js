import Vue from 'vue'
import Router from 'vue-router'

import Dashboard from '../components/pages/Dashboard'
import Settings from '../components/pages/Settings'
import License from '../components/pages/License'
import Updates from '../components/pages/Updates'
import Log from '../components/pages/Log'
import Statistics from '../components/pages/Statistics'
import Sources from '../components/pages/Sources'
import Inputs from '../components/pages/Inputs'
import Processes from '../components/pages/Processes'
import Outputs from '../components/pages/Outputs'
import Connections from '../components/pages/Connections'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/license',
      name: 'License',
      component: License
    },
    {
      path: '/updates',
      name: 'Updates',
      component: Updates
    },
    {
      path: '/log',
      name: 'Log',
      component: Log
    },
    {
      path: '/statistics',
      name: 'Statistics',
      component: Statistics
    },
    {
      path: '/sources',
      name: 'Sources',
      component: Sources
    },
    {
      path: '/inputs',
      name: 'Inputs',
      component: Inputs
    },
    {
      path: '/processes',
      name: 'Processes',
      component: Processes
    },
    {
      path: '/outputs',
      name: 'Outputs',
      component: Outputs
    },
    {
      path: '/connections',
      name: 'Connections',
      component: Connections
    }
  ]
})