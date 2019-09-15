<template>
  <div id="app">
    <div class="app__content">
      <h1>Compare your Air</h1>
      <p>compare the air quality between cities in the UK.</p>
      <p>Select cities to compare using the search tool below.</p>
      <SearchTool
        v-on:locationSelected="locationSelected($event)"
        v-model="inputText"
        v-bind:locations="locations"
      />
      <SelectedLocations
        v-bind:selectedLocations="selectedLocations"
        v-on:closeSelectedLocation="closeSelectedLocation($event)"
      />
    </div>
  </div>
</template>

<script>
import SearchTool from "./components/SearchTool.vue";
import SelectedLocations from "./components/SelectedLocations.vue";
import { requestLocationData, getAllLocations } from "./api/api";

const locations = [];
const selectedLocations = [];
const inputText = "";

export default {
  name: "app",
  data() {
    return { locations, selectedLocations, inputText };
  },
  components: {
    SearchTool,
    SelectedLocations
  },
  methods: {
    locationSelected(value) {
      // add location to selectedLocations array
      requestLocationData(value).then(res => {
        this.selectedLocations = [
          ...this.selectedLocations,
          res.data.results[0]
        ];
      });
    },
    closeSelectedLocation(value) {
      // remove location to selectedLocations array
      this.selectedLocations = this.selectedLocations.filter(res => {
        return res.location !== value;
      });
    }
  },
  mounted() {
    getAllLocations().then(res => {
      this.locations = res.data.results;
    });
  }
};
</script>

<style>
@font-face {
  font-family: "open_sansregular";
  src: url("./assets/fonts/OpenSans-Regular-webfont.woff");
  font-weight: normal;
  font-style: normal;
}
#app {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
.app__content {
  padding: 0 15px;
}

body {
  margin: 0;
  padding: 0;
  background-image: linear-gradient(to bottom right, #7007bf, #2593bd);
  font-family: "open_sansregular";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  min-height: 100vh;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: white;
  text-align: center;
}

* {
  box-sizing: border-box;
}

html {
  overflow: scroll;
  overflow-x: hidden;
}
::-webkit-scrollbar {
  width: 0px; /* Remove scrollbar space */
  background: transparent; /* Optional: just make scrollbar invisible */
}
</style>
