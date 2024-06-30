<script setup>
import { defineProps, defineEmits, reactive } from "vue";

const props = defineProps({
  isVisible: Boolean,
});

const preventEnter = (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
  }
};

const emit = defineEmits(["place-data"]["close-modal"]);
const closeModal = () => {
  emit("close-modal");
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
        `https://api.weatherapi.com/v1/search.json?key=d83211265cbf4c1abf290117240906&q=${searchTerm.query}`
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
    `https://api.weatherapi.com/v1/forecast.json?key=d83211265cbf4c1abf290117240906&q=id:${id}&days=3&aqi=no&alerts=no`
  );
  const data = await res.json();
  emit("place-data", data);
  searchTerm.query = "";
  searchTerm.results = null;
  closeModal();
};
</script>

<template>

  <transition name="fade">
    <div
      class="mask"
      v-if="isVisible"
    >
      <div class="modal">
        <button
          @click="closeModal"
          class="modal__btn modal__btn_sm"
        >x</button>

        <form>
          <p class="modal__label">enter new //location</p>

          <input
            type="text"
            name="location"
            placeholder="e.g. modena"
            autocomplete="off"
            class="modal__input"
            style="color: var(--light);"
            v-model="searchTerm.query"
            @input="handleSearch"
            @keydown="preventEnter"
          >
        </form>

        <div class="modal__suggestion__container">
          <div class="modal__suggestion__wrapper">
            <button
              class="modal__btn modal__suggestion"
              v-if="searchTerm.results === null && searchTerm.query !== ''"
            >
              Searching...
            </button>
          </div>

          <div class="modal__suggestion__wrapper">
            <button
              class="modal__btn modal__suggestion"
              v-if="searchTerm.results && searchTerm.results.length === 0"
            >
              Not Found
            </button>
          </div>

          <div
            class="
              modal__suggestion__wrapper"
            v-if="searchTerm.results !== null"
          >
            <button
              class="modal__btn modal__suggestion"
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
.mask {
  width: 100%;
  height: 100%;

  padding: calc(var(--padding) * 2);
  background: rgba(15, 15, 15, 0.9);

  position: absolute;
  left: 0;
  top: 0;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  width: 25vw;
  height: fit-content;

  display: flex;
  flex-direction: column;
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

.modal__input {
  height: fit-content;

  outline: none;
  border: none;
  padding: var(--padding);
  background-color: var(--dark);

  font-family: "Secondary";
}

.modal__btn,
.modal__label {
  color: var(--dark);
}

.modal__btn {
  border: none;
  padding: var(--padding);
  background-color: var(--primary);

  display: flex;
  align-items: center;
  gap: var(--gap);

  cursor: pointer;
  transition: 0.1s ease;
}

.modal__btn_sm {
  width: 25%;
  border-radius: var(--border-radius) var(--border-radius) 0 0;

  margin-left: auto;
  justify-content: center;
}

.modal__btn_sm:hover {
  padding-bottom: calc(var(--padding) * 2);
}

.modal__btn__extra {
  width: 2rem;
}

.modal__suggestion__container {
  position: relative;
}

.modal__suggestion__wrapper {
  width: 100%;

  border-radius: var(--border-radius);
  overflow: hidden;
  position: absolute;
  margin-top: var(--gap);

  display: flex;
  flex-direction: column;
}

.modal__suggestion {
  width: 100%;
  text-align: left;
  background-color: var(--light);
}

.modal__suggestion:hover {
  background: var(--primary);
}

/* animation  */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* animation  */

@media only screen and (max-width: 912px) {
  .modal {
    width: 100%;
  }

  form {
    aspect-ratio: 1 / 0.5;
    justify-content: space-between;
  }

  form,
  .modal__btn {
    padding: calc(var(--padding) * 2);
  }

  .modal__label,
  .modal__btn,
  .modal__input {
    font-size: 3em;
  }

  .modal__input {
    padding: calc(var(--padding) * 2);
  }

  .modal__btn__extra {
    width: 4rem;
  }
}
</style>