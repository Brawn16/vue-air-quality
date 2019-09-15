<template>
  <div
    v-on:click="select(suggestion.location)"
    class="suggestion__container"
  >{{suggestion.location}}</div>
</template>

<script>
export default {
  name: "Suggestion",
  props: ["suggestion"],
  methods: {
    select(value) {
      this.$emit("locationSelected", value);
    }
  }
};
</script>

<style lang="scss" scoped>
.suggestion__container {
  margin: 2px 0;
  text-align: left;
  padding: 0 5px;
}
.suggestion__container:hover {
  background-color: #e1e1e1;
}
</style>