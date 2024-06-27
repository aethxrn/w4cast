import { createRouter, createWebHistory } from "vue-router";
import Index from "./pages/Index.vue";
import Error from "./pages/Error.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Index,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: Error,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
