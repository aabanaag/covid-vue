import CovidService from '@/services/covid.services'

export const namespaced = true

export const state = {
  overview: {}
}

export const mutations = {
  SET_OVERVIEW_STATS(state, data) {
    state.overview = data
  }
}

export const actions = {
  async fetchOverviewStats({ commit }) {
    const { data } = await CovidService.fetchWorldWide()

    if (data != null) {
      commit('SET_OVERVIEW_STATS', data)
    }
  }
}
