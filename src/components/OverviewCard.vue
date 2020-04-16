<template>
  <div>
    <span>{{ title }}</span>
    <h2>{{ value }}</h2>
  </div>
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

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.19);
  border-radius: 10px;
  padding: 10px;
  margin-right: 10px;
}
div:last-child {
  margin-left: 10px;
  margin-right: 0px;
}
span {
  color: grey;
  justify-content: flex-start;
}
h2 {
  font-weight: bold;
  justify-content: flex-end;
}
</style>
