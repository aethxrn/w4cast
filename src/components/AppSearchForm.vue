<script setup>
import { ref, defineProps, defineEmits } from "vue";

const formData = ref({
  location: "",
});

const props = defineProps({
  isVisible: Boolean,
});

const emit = defineEmits(["close-form"]);

const closeForm = () => {
  emit("close-form");
};

const submitForm = () => {
  console.log("Form submitted with:", formData.value);
  closeForm();
};
</script>

<template>
  <transition name="fade">
    <div
      class="mask"
      v-if="isVisible"
      @click="closeForm"
    >
      <div class="form__wrapper">
        <button
          @click="closeForm"
          class="form__btn form__btn_sm"
        >x</button>
        <form @submit.prevent="submitForm">
          <p class="form__label">enter new //location</p>
          <input
            type="text"
            class="form__input"
            placeholder="e.g. modena"
            style="color: var(--light);"
            v-model="formData.location"
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
  position: absolute;
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