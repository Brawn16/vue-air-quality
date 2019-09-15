<template>
  <div class="selectedLocation__container">
    <span class="selectedLocation__lastUpdated">
      {{`UPDATED `}}{{" "}}
      <timeago :datetime="selectedLocation.measurements[0].lastUpdated"></timeago>
    </span>
    <div class="selectedLocation__title">{{selectedLocation.location}}</div>
    <p class="selectedLocation__city">{{`In ${selectedLocation.city}, United Kingdom`}}</p>
    <span class="selectedLocation__values">{{displayMeasurements(selectedLocation.measurements)}}</span>
    <div class="selectedLocation__close" v-on:click="close(selectedLocation.location)"/>
  </div>
</template>

<script>
import VueTimeago from "vue-timeago";
import Vue from "vue";

export default {
  name: "SelectedLocation",
  props: ["selectedLocation"],
  methods: {
    displayMeasurements: function(values) {
      // format air quality measurements
      return values.reduce((acc, value) => {
        return acc.concat(` ${value.parameter.toUpperCase()}:${value.value}`);
      }, "Values:");
    },
    close(value) {
      this.$emit("closeSelectedLocation", value);
    }
  }
};

Vue.use(VueTimeago, {
  name: "Timeago",
  locale: "en",
  locales: {
    "zh-CN": require("date-fns/locale/zh_cn"),
    ja: require("date-fns/locale/ja")
  }
});
</script>

<style lang="scss" scoped>
.selectedLocation__container {
  width: 30%;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  color: #7007bf;
  font-size: 16px;
  margin: 15px;
  width: 390px;
  min-width: 290px;
  min-height: 166px;
  position: relative;
  text-align: left;
}
.selectedLocation__title {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 5px 0;
}
.selectedLocation__lastUpdated {
  font-size: 0.7rem;
  font-weight: 600;
  color: rgb(49, 49, 49);
  margin: 5px 0;
}
.selectedLocation__city {
  font-size: 0.9rem;
  font-weight: 500;
  color: rgb(49, 49, 49);
  margin: 5px 0;
}
.selectedLocation__values {
  font-size: 0.9rem;
  font-weight: 600;
  color: rgb(49, 49, 49);
  margin: 5px 0;
}
.selectedLocation__close {
  position: absolute;
  right: 10px;
  top: 10px;
  width: 20px;
  height: 20px;
  opacity: 0.6;
}
.selectedLocation__close:hover {
  opacity: 1;
}
.selectedLocation__close:before,
.selectedLocation__close:after {
  position: absolute;
  left: 2px;
  content: " ";
  height: 20px;
  width: 2px;
  background-color: #333;
}
.selectedLocation__close:before {
  transform: rotate(45deg);
}
.selectedLocation__close:after {
  transform: rotate(-45deg);
}
</style>