<template>
  <v-data-table
    :headers="headers"
    :items="countries"
    :hide-default-footer="paginated"
    :disable-pagination="paginated"
    class="elevation-1"
    @click:row="getSelected"
  ></v-data-table>
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
    },
    paginated: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    getSelected(data) {
      this.$emit('setSelected', data)
    }
  }
}
</script>
