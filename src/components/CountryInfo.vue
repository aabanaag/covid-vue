<template>
  <v-container>
    <div class="d-flex align-md-center">
      <v-img :src="flag" max-width="30" max-height="20"></v-img>
      <h3>{{ country.country }}</h3>
    </div>
    <v-spacer />
    <v-container fluid>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            label="Total Cases"
            :value="cases"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Total Recoveries"
            :value="recoveries"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Total Deaths"
            :value="deaths"
            disabled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="New Cases"
            :value="newCases"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="New Deaths"
            :value="newDeaths"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Critical"
            :value="critical"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Active"
            :value="active"
            disabled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Cases per Million"
            :value="casesPerMillion"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Deaths per Million"
            :value="deathsPerMillion"
            disabled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
            label="Tests"
            :value="tests"
            disabled
            outlined
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            label="Tests per Million"
            v-model="testPerMillion"
            disabled
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
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
    },
    flag() {
      return this.country.countryInfo.flag ?? ''
    }
  },
  mounted() {
    console.log(this.country)
  }
}
</script>

<style lang="scss" scoped>
h3 {
  margin-left: 10px;
}
</style>
