import CovidService from '@/services/covid.services'

export const namespaced = true

export const state = {
  countries: []
}

export const mutations = {
  SET_COUNTRIES(state, data) {
    state.countries = data
  }
}

export const actions = {
  async fetchCountries({ commit }, filter) {
    const { data } = await CovidService.fetchCountries(filter)

    if (data != null) {
      commit('SET_COUNTRIES', data)
    }
  }
}
