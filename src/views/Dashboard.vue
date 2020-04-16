<template>
  <div>
    <h1>COVID-19 Cases</h1>
    <div class="container">
      <OverviewCard title="Total" :value="totalCases" />
      <OverviewCard title="New" :value="newCases" />
      <OverviewCard title="Recovered" :value="totalRecoveries" />
      <OverviewCard title="Deaths" :value="totalDeaths" />
    </div>
  </div>
</template>

<script>
import OverviewCard from '@/components/OverviewCard.vue'
import CovidService from '../services/covid.services'
import numeral from 'numeral'

export default {
  data() {
    return {
      totalCases: '0',
      newCases: '0',
      totalRecoveries: '0',
      totalDeaths: '0'
    }
  },
  components: {
    OverviewCard
  },
  async created() {
    const { data } = await CovidService.fetchWorldWide()

    function formatNumber(value) {
      return numeral(value).format('0,0')
    }

    this.totalCases = formatNumber(data.cases)
    this.newCases = formatNumber(data.todayCases)
    this.totalRecoveries = formatNumber(data.recovered)
    this.totalDeaths = formatNumber(data.deaths)
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
}
</style>
