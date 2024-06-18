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
  <div
    v-if="isVisible"
    class="form__wrapper"
  >
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
</template>

<style scoped>
.form__wrapper {
  width: 25vw;
  height: 15vw;

  display: flex;
  flex-direction: column;

  position: absolute;
  z-index: 999;
  margin: 0;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.form__wrapper_hidden {
  visibility: hidden;
}

form {
  background-color: var(--light);
  padding: 16px;
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
  padding: 12px;
  background-color: var(--dark);

  font-family: "Secondary";
}

.form__btn {
  border: none;
  padding: calc(var(--padding) / 2) var(--padding);
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
  padding: 8px 8px 16px 8px;
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
</style>