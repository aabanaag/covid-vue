<template>
  <div>
    <h1 class="text--primary">Countries</h1>
    <CountriesList :countries="countries" isPaginationEnabled />
  </div>
</template>

<script>
import CountriesList from '@/components/CountriesList.vue'
import { mapState } from 'vuex'
export default {
  components: {
    CountriesList
  },
  created() {
    this.$store.dispatch('fetchCountries', '')
  },
  computed: mapState(['countries'])
}
</script>

<style lang="scss" scoped></style>
