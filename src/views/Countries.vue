<template>
  <v-col cols="12" md="10" offset-md="1">
    <h1 class="text--primary">Countries</h1>
    <CountriesList :countries="countries" isPaginationEnabled />
  </v-col>
</template>

<script>
import CountriesList from '@/components/CountriesList.vue'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    CountriesList
  },
  created() {
    this.fetchCountries()
  },
  computed: mapState({
    countries: state => state.countries.countries
  }),
  methods: mapActions('countries', ['fetchCountries'])
}
</script>

<style lang="scss" scoped></style>
