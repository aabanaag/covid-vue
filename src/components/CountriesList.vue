<template>
  <div>
    <v-data-table :headers="headers" :items="countries"></v-data-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Country',
          align: 'start',
          sortable: false,
          value: 'country'
        },
        { text: 'Total cases', value: 'cases' },
        { text: 'Total recoveries', value: 'recovered' },
        { text: 'Total deaths', value: 'deaths' },
        { text: "Today's cases", value: 'todayCases' },
        { text: "Today's deaths", value: 'todayDeaths' }
      ]
    }
  },
  props: {
    countries: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
