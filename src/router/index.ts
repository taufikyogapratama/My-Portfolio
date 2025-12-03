import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";

const routes = [{ path: "/", name: "Home", component: Home }];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // kalau ada hash, scroll ke elemen dengan id tersebut
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    }

    // kalau pakai tombol back/forward
    if (savedPosition) {
      return savedPosition;
    }

    // default scroll ke atas
    return { top: 0 };
  },
});

export default router;
