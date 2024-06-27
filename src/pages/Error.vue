<template>

  <router-link
    to="/"
    class="error"
  >
    <p class="error__text">[ Press anywhere to go back ]</p>

    <div class="error__container">
      <div class="error__container__text">
        <h1 class="error__container__text__heading">404</h1>
        <p class="error__container__text__sub">Not Found</p>
      </div>

    </div>
  </router-link>

</template>

<style scoped>
.error {
  position: relative;
}

.error__text {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.error__container {
  width: 100%;
  height: fit-content;

  margin-top: auto;

  display: flex;
  justify-content: space-between;
}

.error__container__text {
  display: flex;
  align-items: end;
}

.error__container__text__heading {
  font-size: 12vw;
  font-family: "Secondary";
}
</style>
  