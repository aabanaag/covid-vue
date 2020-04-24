<template>
  <v-col cols="12" md="10" offset-md="1">
    <h1>Overview</h1>
    <v-container>
      <v-row>
        <OverviewCard title="Total" :value="totalCases" />
        <OverviewCard title="New" :value="newCases" />
        <OverviewCard title="Recovered" :value="totalRecoveries" />
        <OverviewCard title="Deaths" :value="totalDeaths" />
      </v-row>
    </v-container>
    <v-col cols="12">
      <v-card>
        <v-card-title>
          Top 10 Countries (Infection)
          <v-spacer></v-spacer>
        </v-card-title>
        <CountriesList :countries="countries" />
      </v-card>
    </v-col>
  </v-col>
</template>

<script>
import OverviewCard from '@/components/OverviewCard.vue'
import CountriesList from '@/components/CountriesList.vue'
import { formatNumber } from '@/common/helper.js'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    OverviewCard,
    CountriesList
  },
  created() {
    this.fetchCountries('cases')
    this.fetchOverviewStats()
  },
  computed: mapState({
    countries: state => state.countries.countries.slice(0, 10),
    totalCases: state => formatNumber(state.stats.overview.cases),
    newCases: state => formatNumber(state.stats.overview.todayCases),
    totalRecoveries: state => formatNumber(state.stats.overview.recovered),
    totalDeaths: state => formatNumber(state.stats.overview.deaths)
  }),
  methods: {
    ...mapActions('countries', ['fetchCountries']),
    ...mapActions('stats', ['fetchOverviewStats'])
  }
}
</script>
