<script setup>
import AppButton from "./AppButton.vue";

defineProps({
  place: Object,
});
</script>

<template>

  <div class="card">
    <div class="card__wrapper">
      <p class="card__label">//Location</p>
      <div class="card__extra">
        <svg
          viewBox="0 0 13.229 13.229"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            style="fill:var(--light);stroke-width:0"
            d="m2.646 6.284 3.969 5.622 3.968-5.622v-2.48L8.467 1.322H4.762l-2.116 2.48Z"
          />
          <circle
            style="fill:var(--dark);fill-opacity:1;stroke-width:0"
            cx="6.615"
            cy="5.027"
            r="1.984"
          />
        </svg>
      </div>
    </div>

    <div class="card__wrapper card__wrapper_column">
      <h1 class="card__heading">{{ place ? place.location.name : "unassigned" }}</h1>
      <hr>

      <div class="card__wrapper card_wrapper_hidden">
        <AppButton
          class="app-button"
          @open-modal="$emit('open-modal')"
        >
          Search Location
        </AppButton>

        <router-link
          class="router-link"
          to="/forecast"
        >
          <AppButton class="app-button">
            Forecast - In Dev
          </AppButton>
        </router-link>
      </div>
    </div>
  </div>

</template>

<style scoped>
hr {
  width: 100%;
}

.card,
.card__extra,
.card__btn {
  border: 1px solid var(--light);
  border-radius: var(--border-radius);
}

.card {
  width: 100%;
  height: 100%;
  padding: var(--padding);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card__wrapper {
  height: fit-content;

  display: flex;
  justify-content: space-between;
  gap: calc(var(--gap) / 2);
}

.card__wrapper_column {
  flex-direction: column;
}

.card__extra {
  width: 6rem;
  padding: calc(var(--padding) / 4);
  aspect-ratio: 1 / 1;
}

.card__heading {
  line-height: 0.9;
}

@media only screen and (max-width: 912px) {
  .card_wrapper_hidden {
    display: none;
  }

  .card__button {
    display: none;
  }
}
</style>