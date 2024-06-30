import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { disableZoom } from "./utils/disableZoom";

const app = createApp(App);
app.use(router);
app.mount("#app");

disableZoom();
