<script setup>
const emit = defineEmits(["toggle-form"]);

const toggleForm = () => {
  emit("toggle-form");
};
</script>

<template>
  <button @click="toggleForm">
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  width: fit-content;

  border: none;
  border-radius: var(--border-radius);
  padding: calc(var(--padding) / 2) var(--padding);

  background: var(--primary);
  color: var(--dark);

  text-transform: uppercase;

  transition: 0.1s ease;
  cursor: pointer;
}

button:hover {
  transform: scale(1.05);
}
</style>