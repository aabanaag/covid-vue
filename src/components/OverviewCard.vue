<template>
  <v-col cols="12" md="3">
    <v-card>
      <v-card-text>{{ title }}</v-card-text>
      <v-card-title>
        <h4 class="display-1 text--primary">
          {{ value }}
        </h4>
      </v-card-title>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: String,
      default: '0'
    }
  }
}
</script>
