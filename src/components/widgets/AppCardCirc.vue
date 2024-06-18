<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
.card * {
  color: var(--dark);
}

.card {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;

  padding: 16px;
  background-color: var(--light);
  border-radius: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
