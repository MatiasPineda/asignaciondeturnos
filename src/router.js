import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";
import Home from "./views/Home.vue";
import VerSolicitudes from "./views/VerSolicitudes.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/inicio",
      name: "home",
      component: Home,
      meta: {
        title: "Inicio"
      }
    },
    {
      path: "/ver-solicitudes",
      name: "ver-solicitudes",
      component: VerSolicitudes,
      meta: {
        title: "Ver solicitudes"
      }
    }
  ]
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.auth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/");
  } else {
    next();
  }
});

export default router;
