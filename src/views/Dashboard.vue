<template>
  <div>
    <h1>COVID-19 Cases</h1>
    <div class="container">
      <OverviewCard title="Total" :value="totalCases" />
      <OverviewCard title="New" :value="newCases" />
      <OverviewCard title="Recovered" :value="totalRecoveries" />
      <OverviewCard title="Deaths" :value="totalDeaths" />
    </div>
    <CountriesList :countries="countries" />
  </div>
</template>

<script>
import OverviewCard from '@/components/OverviewCard.vue'
import CountriesList from '@/components/CountriesList.vue'
import CovidService from '../services/covid.services'
import numeral from 'numeral'

export default {
  data() {
    return {
      totalCases: '0',
      newCases: '0',
      totalRecoveries: '0',
      totalDeaths: '0',
      countries: []
    }
  },
  components: {
    OverviewCard,
    CountriesList
  },
  async created() {
    const worldWideData = await CovidService.fetchWorldWide()
    const countriesListData = await CovidService.fetchCountries()

    function formatNumber(value) {
      return numeral(value).format('0,0')
    }

    this.totalCases = formatNumber(worldWideData.data.cases)
    this.newCases = formatNumber(worldWideData.data.todayCases)
    this.totalRecoveries = formatNumber(worldWideData.data.recovered)
    this.totalDeaths = formatNumber(worldWideData.data.deaths)
    this.countries = countriesListData.data
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
