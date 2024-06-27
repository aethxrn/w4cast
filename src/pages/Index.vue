<script setup>
import { ref, computed } from "vue";

import CardCircle from "../components/CardCircle.vue";
import CardRectangle from "../components/CardRectangle.vue";
import AppLocation from "../components/AppLocation.vue";
import AppButton from "../components/AppButton.vue";
import AppModal from "../components/AppModal.vue";

import SunIcon from "../assets/icons/sun.svg";
import FogIcon from "../assets/icons/fog.svg";
import CloudIcon from "../assets/icons/cloud.svg";
import RainIcon from "../assets/icons/rain.svg";
import ThunderIcon from "../assets/icons/thunderstorm.svg";
import SnowIcon from "../assets/icons/snow.svg";
import QuestionIcon from "../assets/icons/question.svg";

const isModalVisible = ref(false);
const displayModal = () => {
  isModalVisible.value = !isModalVisible.value;
};
const hideModal = () => {
  isModalVisible.value = false;
};

const place = ref(null);
const addPlace = (data) => {
  place.value = data;
};

const conditionIconMap = {
  //if weather condition : clear

  Sunny: SunIcon,
  Clear: SunIcon,

  //if weather condition : fog

  Fog: FogIcon,
  Mist: FogIcon,
  "Freezing fog": FogIcon,
  "Blowing snow": FogIcon,
  Blizzard: FogIcon,

  //if weather condition : cloudy

  "Partly Cloudy": CloudIcon,
  "Partly cloudy": CloudIcon,
  Cloudy: CloudIcon,
  Overcast: CloudIcon,
  "Patchy rain possible": CloudIcon,
  "Patchy snow possible": CloudIcon,
  "Patchy sleet possible": CloudIcon,
  "Patchy freezing drizzle possible": CloudIcon,
  "Thundery outbreaks possible": CloudIcon,

  //if weather condition : rainy

  "Patchy light drizzle": RainIcon,
  "Light drizzle": RainIcon,
  "Freezing drizzle": RainIcon,
  "Heavy freezing drizzle": RainIcon,
  "Patchy light rain": RainIcon,
  "Light rain": RainIcon,
  "Moderate rain at times": RainIcon,
  "Moderate rain": RainIcon,
  "Heavy rain at times": RainIcon,
  "Heavy rain": RainIcon,
  "Light freezing rain": RainIcon,
  "Moderate or heavy freezing rain": RainIcon,
  "Light sleet": RainIcon,
  "Moderate or heavy sleet": RainIcon,
  "Light rain shower": RainIcon,
  "Moderate or heavy rain shower": RainIcon,
  "Torrential rain shower": RainIcon,
  "Light sleet showers": RainIcon,
  "Moderate or heavy sleet showers": RainIcon,
  "Light showers of ice pellets": RainIcon,
  "Moderate or heavy showers of ice pellets": RainIcon,
  "Patchy rain nearby": RainIcon,

  //if weather condition : thunderstorm

  "Patchy light rain with thunder": ThunderIcon,
  "Moderate or heavy rain with thunder": ThunderIcon,
  "Patchy light snow with thunder": ThunderIcon,
  "Moderate or heavy snow with thunder": ThunderIcon,

  //if weather condition : snowy

  "Patchy light snow": SnowIcon,
  "Light snow": SnowIcon,
  "Patchy moderate snow": SnowIcon,
  "Moderate snow": SnowIcon,
  "Heavy snow": SnowIcon,
  "Ice pellets": SnowIcon,
  "Light snow showers": SnowIcon,
  "Moderate or heavy snow showers": SnowIcon,
};

const weatherIcon = computed(() => {
  if (
    place.value &&
    place.value.current &&
    place.value.current.condition &&
    place.value.current.condition.text
  ) {
    return conditionIconMap[place.value.current.condition.text] || QuestionIcon;
  }
  return QuestionIcon; // Default icon if weather condition text is not found
});
</script>

<template>

  <div class="index">
    <div class="row row_column-reverse">
      <div class="column">
        <CardCircle class="widget">
          <div class="widget__wrapper widget__wrapper_center">
            <h1 class="deg__text">{{ place ? Math.round(place.current.feelslike_c) : "00" }}&deg;C</h1>
          </div>
        </CardCircle>

        <CardRectangle class="widget">
          <div class="widget__wrapper widget__wrapper_between">
            <p class="widget__label">//Wind Speed</p>

            <svg
              class="widget__icon"
              viewBox="0 0 13.229 13.229"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style="fill:var(--light);fill-opacity:1;stroke-width:0"
                d="M.63 4.556h9.525v.397H.63z"
                transform="translate(-.63 .306)"
              />
              <path
                style="fill:var(--light);fill-opacity:1;stroke-width:0"
                transform="rotate(27.664 -.936 -1.126)"
                d="M9.257-.679h1.852v.397H9.257z"
              />
              <path
                style="fill:var(--light);fill-opacity:1;stroke-width:0"
                d="M.63 4.556h9.525v.397H.63z"
                transform="matrix(1 0 0 -1 .428 12.924)"
              />
              <path
                style="fill:var(--light);fill-opacity:1;stroke-width:0"
                transform="scale(1 -1) rotate(28 26.459 -5.592)"
                d="M9.257-.679h1.852v.397H9.257z"
              />
              <path
                style="fill:var(--light);fill-opacity:1;stroke-width:0"
                d="M.63 4.556h9.525v.397H.63z"
                transform="translate(3.074 1.893)"
              />
              <path
                style="fill:var(--light);fill-opacity:1;stroke-width:0"
                transform="rotate(27.664 -2.307 7.19)"
                d="M9.257-.679h1.852v.397H9.257z"
              />
            </svg>

            <div class="widget__info">
              <h1 class="widget__info__text">{{ place ? Math.round(place.current.wind_kph) : "00" }}</h1>
              <p class="widget__info__text">km/h</p>
            </div>
          </div>
        </CardRectangle>
      </div>

      <div class="column column_h-100">
        <AppLocation
          class="widget"
          :place="place"
          @open-modal="displayModal"
        />
      </div>
    </div>

    <div class="row">
      <div class="column">
        <CardRectangle class="widget">
          <div class="widget__wrapper widget__wrapper_between">
            <p class="widget__label">//Humidity</p>

            <svg
              class="widget__icon"
              viewBox="0 0 13.229 13.229"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                style="fill:var(--light);stroke-width:0"
                d="M3.859 6.844 6.615 2.94 9.37 6.844v1.723L7.9 10.289H5.328l-1.47-1.722Z"
              />
            </svg>

            <div class="widget__info">
              <h1 class="widget__info__text">{{ place ? place.current.humidity : "00" }}</h1>
              <p class="widget__info__text">%</p>
            </div>
          </div>
        </CardRectangle>

        <CardCircle class="widget">
          <div class="widget__wrapper widget__wrapper_center">
            <img
              class="widget__icon"
              :src="weatherIcon"
            >
            <p class="widget__info_asl">{{ place ? place.current.condition.text : "not found" }}</p>
          </div>
        </CardCircle>
      </div>

      <div class="column column_flex-column column_height_fit">
        <AppButton
          class="app-button"
          @open-modal="displayModal"
        >
          Search Location
        </AppButton>

        <AppButton class="app-button">
          Forecast - Impending
        </AppButton>
      </div>
    </div>
  </div>

  <AppModal
    :isVisible="isModalVisible"
    @place-data="addPlace"
    @close-modal="hideModal"
  />

</template>

<style scoped>
.index {
  margin: auto;
  flex-direction: column;
  transition: 0.25s ease;
}

.index,
.row,
.column {
  gap: var(--gap);
}

.row,
.column {
  width: 100%;
  display: flex;
}

.row {
  height: 100%;
}

.column_flex-column {
  flex-direction: column;
}

.column_height_fit {
  height: fit-content;
}

.widget {
  animation: scale 1s ease;
}

.widget__wrapper {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
}

.widget__wrapper_center {
  justify-content: center;
}

.widget__wrapper_between {
  justify-content: space-between;
}

.widget__label,
.widget__info {
  width: 100%;
  text-align: left;
}

.widget__info {
  display: flex;
  align-items: end;
}

.widget__info_asl {
  position: absolute;
  margin-top: 75%;
}

.widget__icon {
  width: 50%;

  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.app-button {
  display: none;
}

@media only screen and (max-width: 912px) {
  .index {
    height: 100%;
  }

  .row {
    flex-direction: column;
  }

  .row_column-reverse {
    flex-direction: column-reverse;
  }

  .column_h-100 {
    height: 100%;
  }

  .app-button {
    display: unset;
    font-size: 3rem;
  }
}
</style>

