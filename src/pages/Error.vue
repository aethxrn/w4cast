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
  text-decoration: none;
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
}

.error__container__text {
  display: flex;
  align-items: end;
}

.error__container__text__heading {
  font-size: 12vw;
  font-family: "Secondary";
}

@media only screen and (max-width: 768px) {
  .error__container {
    margin: auto;
    justify-content: center;
  }

  .error__container__text {
    align-items: center;
    filter: opacity(25%);
    flex-direction: column;
    gap: var(--gap);
  }

  .error__container__text__heading {
    font-size: 50vw;
  }
}
</style>
  