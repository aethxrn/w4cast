<script setup>
const emit = defineEmits(["open-modal"]);

const openModal = () => {
  emit("open-modal");
};
</script>

<template>
  <button @click="openModal">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  width: fit-content;

  border: none;
  border-radius: var(--border-radius);
  padding: var(--padding) calc(var(--padding) * 2);

  background: var(--primary);
  color: var(--dark);

  text-transform: uppercase;
  transition: 0.1s ease;
  cursor: pointer;
}

button:hover {
  transform: scale(1.05);
}

@media only screen and (max-width: 912px) {
  button:hover {
    transform: unset;
  }

  button:active {
    transform: scale(1.05);
  }
}
</style>