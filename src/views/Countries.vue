<template>
  <v-col cols="12" md="10" offset-md="1">
    <h1 class="text--primary">Countries</h1>
    <CountriesList
      :countries="countries"
      :paginated="false"
      @setSelected="handleSelectedCountry"
    />

    <v-navigation-drawer
      :value="selectedCountry"
      width="600"
      absolute
      temporary
      right
      app
    >
      <CountryInfo
        v-if="!!selectedCountry"
        :country="selectedCountry"
      ></CountryInfo>
    </v-navigation-drawer>
  </v-col>
</template>

<script>
import CountriesList from '@/components/CountriesList.vue'
import CountryInfo from '@/components/CountryInfo.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    CountriesList,
    CountryInfo
  },
  created() {
    this.fetchCountries()
  },
  computed: mapState({
    countries: state => state.countries.countries,
    selectedCountry: state => state.countries.selected
  }),
  methods: {
    handleSelectedCountry(data) {
      this.fetchByCountry(data.countryInfo.iso2)
    },
    ...mapActions('countries', ['fetchCountries', 'fetchByCountry'])
  }
}
</script>

<style lang="scss" scoped></style>
