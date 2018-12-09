import Vue from 'vue'
import Vuex from 'vuex'

import sources from './modules/sources'
import inputs from './modules/inputs'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sources,
    inputs
  }
});