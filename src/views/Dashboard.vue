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
    <CountriesList :countries="countries" />
  </div>
</template>

<script>
import OverviewCard from '@/components/OverviewCard.vue'
import CountriesList from '@/components/CountriesList.vue'
import { formatNumber } from '@/common/helper.js'
import { mapState } from 'vuex'

export default {
  components: {
    OverviewCard,
    CountriesList
  },
  created() {
    this.$store.dispatch('fetchCountries', 'cases')
    this.$store.dispatch('fetchOverviewStats')
  },
  computed: mapState({
    countries: state => state.countries.slice(0, 10),
    totalCases: state => formatNumber(state.overviewStats.cases),
    newCases: state => formatNumber(state.overviewStats.todayCases),
    totalRecoveries: state => formatNumber(state.overviewStats.recovered),
    totalDeaths: state => formatNumber(state.overviewStats.deaths)
  })
}
</script>
