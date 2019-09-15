<template>
  <div class="searchTool__container">
    <div class="searchTool__inputContainer">
      <div class="searchTool__icon">
        <img src="../assets/search-icon.svg">
      </div>
      <input
        class="searchTool__input"
        v-model="text"
        v-bind:locations="locations"
        v-on:input="update"
        placeholder="Enter city name"
      >
    </div>
    <Suggestions
      v-on:locationSelected="locationSelected($event)"
      v-bind:suggestions="suggestions"
      v-if="suggestions.length > 0"
    />
  </div>
</template>
<script>
import Suggestions from "./Suggestions.vue";
import debounce from "lodash/debounce";

const suggestions = [];
const text = "";

export default {
  name: "SearchTool",
  props: ["locations"],
  data() {
    return { suggestions, text };
  },
  methods: {
    update: function(e) {
      this.$emit("input", e.target.value);

      // debounce input suggestions

      debounce(() => {
        const regex = new RegExp(`^${e.target.value}`, "i");
        e.target.value.length === 0
          ? (this.suggestions = [])
          : (this.suggestions = this.locations.sort().filter(location => {
              regex.test(location.location);
              return regex.test(location.location);
            }));
      }, 500)();
    },
    locationSelected(value) {
      this.$emit("locationSelected", value);
      // reset input text and suggestions
      this.text = "";
      this.suggestions = [];
    }
  },
  components: {
    Suggestions
  }
};
</script>
<style lang="scss" scoped>
.searchTool__container {
  padding: 20px 10px;
  max-width: 600px;
  min-width: 280px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
}
.searchTool__inputContainer {
  background-color: white;
  padding: 2px 0;
  border-radius: 5px;
  display: flex;
  height: 40px;
  border: solid #a19f9f 1px;
}

.searchTool__icon {
  margin: 0 10px 0 5px;
  width: 20px;
  display: flex;
  align-items: center;
}
.searchTool__input {
  border: none;
  outline: none;

  color: #a19f9f;
  font-size: 22px;
  width: 100%;
}
</style>

