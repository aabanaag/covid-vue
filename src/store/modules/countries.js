import CovidService from '@/services/covid.services'

export const namespaced = true

export const state = {
  countries: [],
  selected: {}
}

export const mutations = {
  SET_COUNTRIES(state, data) {
    state.countries = data
  },
  SET_SELECTED_COUNTRY(state, data) {
    state.selected = data
  }
}

export const actions = {
  async fetchCountries({ commit }, filter) {
    const { data } = await CovidService.fetchCountries(filter)

    if (data != null) {
      commit('SET_COUNTRIES', data)
    }
  },
  setSelectedCountry({ commit }, country) {
    commit('SET_SELECTED_COUNTRY', country)
  }
}
