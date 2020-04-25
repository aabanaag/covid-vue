<template>
  <v-container>
    <div class="d-flex">
      <h3>{{ country.country }}</h3>
    </div>
    <v-spacer />
    <v-form class="overflow-y-auto">
      <v-text-field label="Total Cases" :value="cases"></v-text-field>
      <v-text-field label="Total Recoveries" :value="recoveries"></v-text-field>
      <v-text-field label="Total Deaths" :value="deaths"></v-text-field>
      <v-text-field label="New Cases" :value="newCases"></v-text-field>
      <v-text-field label="New Deaths" :value="newDeaths"></v-text-field>
      <v-text-field label="Critical" :value="critical"></v-text-field>
      <v-text-field label="Active" :value="active"></v-text-field>
      <v-text-field label="Tests" :value="tests"></v-text-field>
      <v-text-field
        label="Cases per Million"
        :value="casesPerMillion"
      ></v-text-field>
      <v-text-field
        label="Deaths per Million"
        :value="deathsPerMillion"
      ></v-text-field>
      <v-text-field
        label="Tests per Million"
        v-model="testPerMillion"
      ></v-text-field>
    </v-form>
  </v-container>
</template>

<script>
import { formatNumber } from '@/common/helper.js'
export default {
  props: {
    country: {
      type: Object,
      required: true
    }
  },
  computed: {
    cases() {
      return formatNumber(this.country.cases)
    },
    recoveries() {
      return formatNumber(this.country.recovered)
    },
    deaths() {
      return formatNumber(this.country.deaths)
    },
    newCases() {
      return formatNumber(this.country.todayCases)
    },
    newDeaths() {
      return formatNumber(this.country.todayDeaths)
    },
    critical() {
      return formatNumber(this.country.critical)
    },
    active() {
      return formatNumber(this.country.active)
    },
    tests() {
      return formatNumber(this.country.tests)
    },
    casesPerMillion() {
      return formatNumber(this.country.casesPerMillion)
    },
    deathsPerMillion() {
      return formatNumber(this.country.deathsPerMillion)
    },
    testPerMillion() {
      return formatNumber(this.country.testPerMillion)
    }
  }
}
</script>
