<template>
  <v-card>
    <v-card-title>
      Top 10 Countries (Infection)
      <v-spacer></v-spacer>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="countries"
      hide-default-footer
      class="elevation-1"
    ></v-data-table>
  </v-card>
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
