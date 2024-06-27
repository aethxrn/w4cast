<template>

  <div class="card">
    <slot></slot>
  </div>

</template>

<style scoped>
.card {
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;

  padding: var(--padding);
  background-color: var(--gray);
  border-radius: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
