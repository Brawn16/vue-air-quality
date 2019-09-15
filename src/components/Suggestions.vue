<template>
  <div class="suggestions__container">
    <Suggestion
      v-on:locationSelected="locationSelected($event)"
      v-for="suggestion in suggestions"
      v-bind:suggestion="suggestion"
      v-bind:key="suggestion.name"
    />
  </div>
</template>

<script>
import Suggestion from "./Suggestion.vue";

export default {
  name: "Suggestions",
  components: {
    Suggestion
  },
  props: ["suggestions"],
  methods: {
    locationSelected(value) {
      this.$emit("locationSelected", value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.suggestions__container {
  background-color: white;
  color: #a19f9f;
  font-size: 20px;
  margin: -5px 0;
  border-left: 1px solid #a19f9f;
  border-right: 1px solid #a19f9f;
  border-bottom: 1px solid #a19f9f;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 100%;
  max-height: 150px;
  overflow: auto;
}
</style>
