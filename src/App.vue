<script setup>
import { ref } from "vue";

import AppCardCircle from "./components/widgets/AppCardCirc.vue";
import AppCardRect from "./components/widgets/AppCardRect.vue";
import AppLocation from "./components/widgets/AppLocation.vue";
import AppSearchForm from "./components/AppSearchForm.vue";
import AppButton from "./components/AppButton.vue";

const isFormVisible = ref(false);

const toggleFormVisibility = () => {
  isFormVisible.value = !isFormVisible.value;
};

const closeFormVisibility = () => {
  isFormVisible.value = false;
};
</script>

<template>

  <header>
    <p class="header__text">w4cast v1.0</p>
  </header>

  <AppSearchForm
    :isVisible="isFormVisible"
    @close-form="closeFormVisibility"
  />

  <main>
    <div class="row row_column-reverse">
      <div class="column column_height-fit">
        <AppCardCircle class="widget">
          <div class="widget__wrapper widget__wrapper_center">
            <h1 class="deg__text">35&deg;C</h1>
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
              <h1 class="widget__info__text">24</h1>
              <p class="widget__info__text">km/h</p>
            </div>
          </div>
        </AppCardRect>
      </div>
      <div class="column">
        <AppLocation @toggle-form="toggleFormVisibility" />
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
              <h1 class="widget__info__text">50%</h1>
            </div>
          </div>
        </AppCardRect>

        <AppCardCircle class="widget">
          <div class="widget__wrapper widget__wrapper_center">
            <svg
              class="widget__icon"
              viewBox="0 0 13.229 13.229"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g style="display:inline">
                <path
                  d="m1.803 5.556-.745.882v.882l.745.882H8.78l.744-.882v-.882l-.744-.882Z"
                  style="fill:var(--dark);stroke-width:.730767"
                  transform="matrix(1.5625 0 0 1.55421 -1.654 -2.458)"
                />
                <path
                  d="m5.274 3.473-.742 1.213v1.212l.742 1.212h2.18l.714-1.212V4.686l-.713-1.213Z"
                  style="fill:var(--dark);stroke-width:.478962"
                  transform="matrix(1.5625 0 0 1.55421 -1.654 -2.458)"
                />
                <path
                  d="m3.255 4.218-.54.882v.882l.54.881H4.84l.52-.881V5.1l-.52-.882Z"
                  style="fill:var(--dark);stroke-width:.348459"
                  transform="matrix(1.5625 0 0 1.55421 -1.654 -2.458)"
                />
              </g>
            </svg>
            <p class="widget__info_asl">cloudy</p>
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
  margin-top: 50%;
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
  }
}
</style>

