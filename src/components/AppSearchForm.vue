<script setup>
import { ref, defineProps, defineEmits, reactive } from "vue";

const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["close-form"], ["place-data"]);

const closeForm = () => {
  emit("close-form");
};

const searchTerm = reactive({
  query: "",
  timeout: null,
  results: null,
});

const handleSearch = () => {
  clearTimeout(searchTerm.timeout);
  searchTerm.timeout = setTimeout(async () => {
    if (searchTerm.query !== "") {
      const res = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=d83211265cbf4c1abf290117240906&q=${searchTerm.query}`
      );

      const data = await res.json();
      searchTerm.results = data;
    } else {
      searchTerm.results = null;
    }
  }, 500);
};

const getWeather = async (id) => {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=d83211265cbf4c1abf290117240906&q=id:${id}&days=3&aqi=no&alerts=no`
  );

  const data = await res.json();
  emit("place-data", data);
  searchTerm.query = "";
  searchTerm.results = null;
};
</script>

<template>
  <transition name="fade">
    <div
      class="mask"
      v-if="isVisible"
    >
      <div class="form__wrapper">
        <button
          @click="closeForm"
          class="form__btn form__btn_sm"
        >x</button>
        <form>
          <p class="form__label">enter new //location</p>
          <input
            type="text"
            class="form__input"
            placeholder="e.g. modena"
            style="color: var(--light);"
            v-model="searchTerm.query"
            @input="handleSearch"
          >

          <button
            class="form__btn form__btn_lg"
            type="submit"
          >
            search
            <svg
              class="form__btn__extra"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 25 25"
            >
              <path
                style="fill:#0f0f0f"
                d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
                data-name="Right"
              />
            </svg>
          </button>
        </form>
        <div
          class="form__suggestion__container"
          v-if="searchTerm.results !== null"
        >
          <div class="form__suggestion__wrapper">
            <button
              class="form__btn form__suggestion"
              @click="getWeather(place.id)"
              v-for="place in searchTerm.results"
              :key="place.id"
            >{{ place.name }}, {{ place.region }}, {{ place.country }}</button>
          </div>
        </div>
      </div>
    </div>
  </transition>

</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.mask {
  width: 100%;
  height: 100%;
  background: rgba(15, 15, 15, 0.9);
  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form__wrapper {
  width: 25vw;
  height: 15vw;

  display: flex;
  flex-direction: column;
}

.form__wrapper_hidden {
  visibility: hidden;
}

form {
  background-color: var(--light);
  padding: var(--padding);
  border-radius: var(--border-radius) 0 var(--border-radius)
    var(--border-radius);

  display: flex;
  flex-direction: column;
  gap: var(--gap);
}

.form__input {
  height: fit-content;
  outline: none;
  border: none;
  padding: var(--padding);
  background-color: var(--dark);

  font-family: "Secondary";
}

.form__btn {
  border: none;
  padding: var(--padding);
  background-color: var(--primary);

  display: flex;
  align-items: center;
  gap: var(--gap);

  cursor: pointer;
  transition: 0.1s ease;
}

.form__btn_sm {
  width: 25%;
  border-radius: var(--border-radius) var(--border-radius) 0 0;

  margin-left: auto;
  justify-content: center;
}

.form__btn_sm:hover {
  padding-bottom: calc(var(--padding) * 2);
}

.form__btn_lg {
  width: 50%;
  border-radius: var(--border-radius);

  margin-left: auto;
  justify-content: end;
}

.form__btn_lg:hover {
  width: 55%;
  padding-right: calc(var(--padding) * 2);
}

.form__btn,
.form__label {
  color: var(--dark);
}

.form__btn__extra {
  width: 2rem;
}

.form__suggestion__container {
  position: relative;
}

.form__suggestion__wrapper {
  position: absolute;
  border-radius: var(--border-radius);
  width: 100%;
  overflow: hidden;
}

.form__suggestion {
  width: 100%;
  text-align: left;
}

.form__suggestion:hover {
  background: var(--dark);
  color: var(--primary);
}

@media only screen and (max-width: 912px) {
  .form__wrapper {
    width: 90vw;
    height: fit-content;
  }

  form {
    aspect-ratio: 1 / 0.5;
    justify-content: space-between;
    padding: calc(var(--padding) * 2);
  }

  .form__label,
  .form__btn,
  .form__input {
    font-size: 3em;
  }

  .form__input {
    padding: calc(var(--padding) * 2);
  }

  .form__btn__extra {
    width: 4rem;
  }
}
</style>