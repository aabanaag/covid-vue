import axios from 'axios'

const client = axios.create({
  baseURL: 'https://corona.lmao.ninja/v2',
  withCredentials: false
})

const CovidService = {
  fetchWorldWide: async function() {
    return client.get('/all')
  },
  fetchCountries: async function(sortCriteria) {
    return client.get('/countries', {
      params: {
        sort: sortCriteria
      }
    })
  },
  fetchByCountry: async function(countryCode) {
    return client.get(`/countries/${countryCode}`)
  }
}

export default CovidService
