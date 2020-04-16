import axios from 'axios'

const client = axios.create({
  baseURL: 'https://corona.lmao.ninja',
  withCredentials: false
})

const CovidService = {
  fetchWorldWide: async function() {
    return client.get('/all')
  },
  fetchCountries: async function() {
    return client.get('/countries', {
      params: {
        sort: 'country'
      }
    })
  },
  fetchByCountry: async function(countryCode) {
    return client.get(`/countries/${countryCode}`)
  }
}

export default CovidService
