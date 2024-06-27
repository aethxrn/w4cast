<script setup>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
</script>

<template >

  <AppHeader></AppHeader>

  <main>
    <router-view></router-view>

    <AppFooter></AppFooter>
  </main>

</template>

<style scoped>
main {
  height: 100%;
}
</style>


