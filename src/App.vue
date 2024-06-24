<script setup>
import { ref, computed, watchEffect } from "vue";

import AppCardCircle from "./components/widgets/AppCardCirc.vue";
import AppCardRect from "./components/widgets/AppCardRect.vue";
import AppLocation from "./components/widgets/AppLocation.vue";
import AppSearchForm from "./components/AppSearchForm.vue";
import AppButton from "./components/AppButton.vue";

import QuestionIcon from "./assets/icons/question.svg";
import SunIcon from "./assets/icons/sun.svg";
import CloudIcon from "./assets/icons/cloud.svg";
import RainIcon from "./assets/icons/rain.svg";
import FogIcon from "./assets/icons/fog.svg";
import ThunderIcon from "./assets/icons/thunderstorm.svg";
import SnowIcon from "./assets/icons/snow.svg";

const isFormVisible = ref(false);

const toggleFormVisibility = () => {
  isFormVisible.value = !isFormVisible.value;
};

const closeFormVisibility = () => {
  isFormVisible.value = false;
};

const place = ref(null);

const addPlace = (data) => {
  place.value = data;
};

const conditionIconMap = {
  Sunny: SunIcon,
  Clear: SunIcon,

  "Partly Cloudy": CloudIcon,
  "Partly cloudy": CloudIcon,
  Cloudy: CloudIcon,
  Overcast: CloudIcon,
  "Patchy rain possible": CloudIcon,
  "Patchy snow possible": CloudIcon,
  "Patchy sleet possible": CloudIcon,
  "Patchy freezing drizzle possible": CloudIcon,
  "Thundery outbreaks possible": CloudIcon,

  Fog: FogIcon,
  Mist: FogIcon,
  "Freezing fog": FogIcon,
  "Blowing snow": FogIcon,
  Blizzard: FogIcon,

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

  "Patchy light rain with thunder": ThunderIcon,
  "Moderate or heavy rain with thunder": ThunderIcon,
  "Patchy light snow with thunder": ThunderIcon,
  "Moderate or heavy snow with thunder": ThunderIcon,

  "Patchy light snow": SnowIcon,
  "Light snow": SnowIcon,
  "Patchy moderate snow": SnowIcon,
  "Moderate snow": SnowIcon,
  "Heavy snow": SnowIcon,
  "Ice pellets": SnowIcon,
  "Light snow showers": SnowIcon,
  "Moderate or heavy snow showers": SnowIcon,
};

// return icon
const weatherIconUrl = computed(() => {
  const conditionText = place.value?.current.condition.text;
  return conditionIconMap[conditionText] || QuestionIcon; // Default icon if condition text is not found
});

watchEffect(() => {
  if (place.value) {
    weatherIconUrl.value =
      conditionIconMap[place.value.current.condition.text] || QuestionIcon;
  }
});
</script>

<template>

  <header>
    <p class="header__text">w4cast v1.0</p>
  </header>

  <AppSearchForm
    :isVisible="isFormVisible"
    @close-form="closeFormVisibility"
    @place-data="addPlace"
  />

  <main>
    <div class="row row_column-reverse">
      <div class="column column_height-fit">
        <AppCardCircle class="widget">
          <div class="widget__wrapper widget__wrapper_center">
            <h1 class="deg__text">{{ place ? Math.round(place.current.feelslike_c) : "00" }}&deg;C</h1>
          </div>
        </AppCardCircle>

        <AppCardRect class="widget">
          <div class="widget__wrapper widget__wrapper_between">
            <p class="widget__label">//wind speed</p>
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
        </AppCardRect>
      </div>
      <div class="column">
        <AppLocation
          :place="place"
          @toggle-form="toggleFormVisibility"
        />
      </div>
    </div>

    <div class="row">
      <div class="column column_height-fit">
        <AppCardRect class="widget">
          <div class="widget__wrapper widget__wrapper_between">
            <p class="widget__label">//humidity</p>
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
        </AppCardRect>

        <AppCardCircle class="widget">
          <div class="widget__wrapper widget__wrapper_center">
            <img
              class="widget__icon"
              :src="weatherIconUrl"
              alt=""
            >
            <p class="widget__info_asl">{{ place ? place.current.condition.text : "not found" }}</p>
          </div>
        </AppCardCircle>
      </div>

      <div class="column column_flex-column">
        <AppButton
          @toggle-form="toggleFormVisibility"
          class="button"
        >
          [ search location ]
        </AppButton>

        <p class="copyright">
          design / development / abieza ananta
          <br>
          [C]2024 abieza ananta
        </p>
      </div>
    </div>
  </main>

</template>

<style scoped>
header {
  text-align: center;
}

main {
  margin: auto;
  flex-direction: column;
  transition: 0.25s ease;
}

main,
.row,
.column {
  gap: var(--gap);
}

.row,
.column {
  width: 100%;
  height: 100%;
  display: flex;
}

.column_flex-column {
  flex-direction: column;
  justify-content: space-between;
}

.button {
  display: none;
  width: 100%;
  padding: calc(var(--padding) * 2) calc(var(--padding));
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

.copyright {
  margin-top: auto;
  margin-left: auto;
}

@media only screen and (max-width: 912px) {
  main {
    height: 100%;
  }

  .row {
    flex-direction: column;
  }

  .row_column-reverse {
    flex-direction: column-reverse;
  }

  .column_height-fit {
    height: fit-content;
  }

  .button {
    display: unset;
    height: 25%;
    font-size: 3rem;
  }
}
</style>

