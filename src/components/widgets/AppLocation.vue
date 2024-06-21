<script setup>
import AppButton from "../AppButton.vue";

defineProps({
  place: Object,
});
</script>

<template>

  <div class="widget">
    <div class="widget__wrapper">
      <p class="widget__label">//location</p>
      <h1 class="widget__heading">{{ place.location.name }}</h1>
      <hr>
      <div class="widget__extra">
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

    <AppButton
      @toggle-form="$emit('toggle-form')"
      class="widget__button"
    >
      [ search location ]
    </AppButton>
  </div>

</template>

<style scoped>
hr {
  width: 100%;
}

.widget,
.widget__extra,
.widget__btn {
  border: 1px solid var(--light);
  border-radius: var(--border-radius);
}

.widget {
  width: 100%;
  height: 100%;
  padding: var(--padding);

  display: flex;
  flex-direction: column;
}

.widget__wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--gap);

  position: relative;
}

.widget__extra {
  width: 6rem;
  padding: calc(var(--padding) / 4);
  aspect-ratio: 1 / 1;

  position: absolute;
  right: 0;
}

.widget__button {
  margin-top: auto;
  margin-left: auto;
}

@media only screen and (max-width: 912px) {
  .widget__button {
    display: none;
  }
}
</style>