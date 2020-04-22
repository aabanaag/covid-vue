import Vue from 'vue'
import Vuex from 'vuex'
import * as countries from './modules/countries'
import * as stats from './modules/stats'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    countries,
    stats
  }
})
