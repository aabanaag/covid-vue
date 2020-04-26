import CovidService from '@/services/covid.services'

export const namespaced = true

export const state = {
  countries: [],
  selected: null
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
  async fetchByCountry({ commit }, code) {
    const { data } = await CovidService.fetchByCountry(code)

    if (data != null) {
      commit('SET_SELECTED_COUNTRY', data)
    }
  },
  setSelectedCountry({ commit }, country) {
    commit('SET_SELECTED_COUNTRY', country)
  }
}
