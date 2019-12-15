import Vue from "vue";
import Router from "vue-router";
import store from "./store.js";
import Login from "./views/Login";
import Home from "./views/Home.vue";
import VerSolicitudes from "./views/VerSolicitudes.vue";
import InicioSupervisor from "./views/InicioSupervisor";
import Trabajadores from "./views/Trabajadores";
import Crear from "./views/Crear";
import Modificar from "./views/Modificar";
import Eliminar from "./views/Eliminar";
import Turnos from "./views/Turnos";
import BuscarPorFecha from "./views/BuscarPorFecha";
import CrearPlantilla from "./views/CrearPlantilla";
import InicioTrabajador from "./views/InicioTrabajador";
import VerTurnos from "./views/VerTurnos";
import PlantillaSemanal from "./views/PlantillaSemanal";
import PlantillaMensual from "./views/PlantillaMensual";
import Solicitud from "./views/Solicitud";
import IngresarSolicitud from "./views/IngresarSolicitud";
import MisSolicitudes from "./views/MisSolicitudes";
import MiPerfil from "./views/MiPerfil";

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
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/inicio-supervisor",
      name: "inicio-supervisor",
      component: InicioSupervisor,
      meta: {
        title: "Inicio"
      }
    },
    {
      path: "/trabajadores",
      name: "trabajadores",
      component: Trabajadores,
      meta: {
        title: "Trabajadores"
      }
    },
    {
      path: "/crear",
      name: "crear",
      component: Crear,
      meta: {
        title: "Crear"
      }
    },
    {
      path: "/modificar/:id",
      name: "modificar",
      component: Modificar,
      meta: {
        title: "Modificar"
      }
    },
    {
      path: "/eliminar",
      name: "eliminar",
      component: Eliminar,
      meta: {
        title: "Eliminar"
      }
    },
    {
      path: "/turnos",
      name: "turnos",
      component: Turnos,
      meta: {
        title: "turnos"
      }
    },
    {
      path: "/ver-solicitudes",
      name: "ver-solicitudes",
      component: VerSolicitudes,
      meta: {
        title: "Ver solicitudes"
      }
    },
    {
      path: "/buscar-por-fecha",
      name: "buscar-por-fecha",
      component: BuscarPorFecha,
      meta: {
        title: "Buscar por Fecha"
      }
    },
    {
      path: "/crear-plantilla",
      name: "crear-plantilla",
      component: CrearPlantilla,
      meta: {
        title: "Crear Plantilla"
      }
    },
    {
      path: "/inicio-trabajador",
      name: "inicio-trabajador",
      component: InicioTrabajador,
      meta: {
        title: "Inicio"
      }
    },
    {
      path: "/ver-turnos",
      name: "ver-turnos",
      component: VerTurnos,
      meta: {
        title: "Ver Turnos"
      }
    },
    {
      path: "/plantilla-semanal",
      name: "plantilla-semanal",
      component: PlantillaSemanal,
      meta: {
        title: "Plantilla Semanal"
      }
    },
    {
      path: "/plantilla-mensual",
      name: "plantilla-mensual",
      component: PlantillaMensual,
      meta: {
        title: "Plantilla Mensual"
      }
    },
    {
      path: "/solicitud",
      name: "solicitud",
      component: Solicitud,
      meta: {
        title: "Solicitud"
      }
    },
    {
      path: "/ingresar-solicitud",
      name: "ingresar-solicitud",
      component: IngresarSolicitud,
      meta: {
        title: "Ingresar-solicitud"
      }
    },
    {
      path: "/mis-solicitudes",
      name: "mis-solicitudes",
      component: MisSolicitudes,
      meta: {
        title: "Mis Solicitudes"
      }
    },
    {
      path: "/mi-perfil",
      name: "mi-perfil",
      component: MiPerfil,
      meta: {
        title: "Mi Perfil"
      }
    },
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
