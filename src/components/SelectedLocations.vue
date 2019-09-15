<template>
  <div class="selectedLocations__container">
    <SelectedLocation
      v-for="(selectedLocation, index) in selectedLocations"
      v-bind:selectedLocation="selectedLocation"
      v-bind:key="index"
      v-on:closeSelectedLocation="closeSelectedLocation($event)"
    />
  </div>
</template>
<script>
import SelectedLocation from "./SelectedLocation.vue";

export default {
  name: "SelectedLocations",
  props: ["selectedLocations"],

  methods: {
    closeSelectedLocation(value) {
      this.$emit("closeSelectedLocation", value);
    }
  },
  components: {
    SelectedLocation
  }
};
</script>

<style lang="scss" scoped>
.selectedLocations__container {
  max-width: 900px;
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
</style>

