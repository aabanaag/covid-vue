import Vue from 'vue'
import Vuex from 'vuex'
import CovidService from '@/services/covid.services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    overviewStats: {}
  },
  mutations: {
    SET_COUNTRIES(state, data) {
      state.countries = data
    },
    SET_OVERVIEW_STATS(state, data) {
      state.overviewStats = data
    }
  },
  actions: {
    async fetchCountries({ commit }, filter) {
      const { data } = await CovidService.fetchCountries(filter)

      if (data != null) {
        commit('SET_COUNTRIES', data)
      }
    },
    async fetchOverviewStats({ commit }) {
      const { data } = await CovidService.fetchWorldWide()

      if (data != null) {
        commit('SET_OVERVIEW_STATS', data)
      }
    }
  },
  modules: {}
})
