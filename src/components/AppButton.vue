<script setup>
const emit = defineEmits(["open-modal"]);

const openModal = () => {
  emit("open-modal");
};
</script>

<template>

  <button @click="openModal">
    [
    <slot></slot>
    ]
  </button>

</template>

<style scoped>
button {
  width: 100%;

  border: none;
  border-radius: var(--border-radius);
  padding: calc(var(--padding) * 2) calc(var(--padding));

  background: var(--primary);
  color: var(--dark);

  text-transform: uppercase;
  transition: 0.1s ease;
  cursor: pointer;
}

button:hover {
  animation: flicker 0.2s step-end;
}

@keyframes flicker {
  0% {
    color: transparent;
  }
  50% {
    color: var(--dark);
  }
  75% {
    color: transparent;
  }
  100% {
    color: var(--dark);
  }
}
</style>