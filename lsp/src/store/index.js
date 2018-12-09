import Vue from 'vue'
import Vuex from 'vuex'

import settings from './modules/settings'
import sources from './modules/sources'
import inputs from './modules/inputs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    settings,
    sources,
    inputs
  }
});