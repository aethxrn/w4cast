<script setup>
import AppHeader from "./components/AppHeader.vue";
</script>

<template>

  <AppHeader></AppHeader>

  <main>
    <router-view></router-view>
  </main>

</template>

<style scoped>
main {
  height: 100%;
}
</style>


