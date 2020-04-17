<template>
  <div>
    <h1>Overview</h1>
    <v-container>
      <v-row>
        <OverviewCard title="Total" :value="totalCases" />
        <OverviewCard title="New" :value="newCases" />
        <OverviewCard title="Recovered" :value="totalRecoveries" />
        <OverviewCard title="Deaths" :value="totalDeaths" />
      </v-row>
    </v-container>
    <CountriesList :countries="topTenCountries" />
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
    const worldWide = await CovidService.fetchWorldWide()
    const topCasesWorldWide = await CovidService.fetchCountries('cases')

    function formatNumber(value) {
      return numeral(value).format('0,0')
    }

    this.totalCases = formatNumber(worldWide.data.cases)
    this.newCases = formatNumber(worldWide.data.todayCases)
    this.totalRecoveries = formatNumber(worldWide.data.recovered)
    this.totalDeaths = formatNumber(worldWide.data.deaths)
    this.countries = topCasesWorldWide.data
  },
  computed: {
    topTenCountries: function() {
      return this.countries.slice(0, 10)
    }
  }
}
</script>
