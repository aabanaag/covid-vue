<template>
  <v-col cols="12" md="10" offset-md="1">
    <h1 class="text--primary">Countries</h1>
    <CountriesList
      :countries="countries"
      isPaginationEnabled
      @setSelected="handleSelectedCountry"
    />

    <v-navigation-drawer
      v-model="isVisible"
      width="400"
      absolute
      temporary
      right
      app
    >
      <CountryInfo :country="selectedCountry"></CountryInfo>
    </v-navigation-drawer>
  </v-col>
</template>

<script>
import CountriesList from '@/components/CountriesList.vue'
import CountryInfo from '@/components/CountryInfo.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      isVisible: false
    }
  },
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
      this.isVisible = !this.isVisible
      this.setSelectedCountry(data)
    },
    ...mapActions('countries', ['fetchCountries', 'setSelectedCountry'])
  }
}
</script>

<style lang="scss" scoped></style>
