<template>
  <div id="app">
    <Nav />
    <div id="cont-contenido">
      <Contenido />
      <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import Contenido from "./components/Contenido";

import InicioSupervisor from './views/InicioSupervisor';
import Trabajadores from './views/Trabajadores';
import Turnos from './views/Turnos';
import InicioTrabajador from './views/InicioTrabajador';
import VerTurnos from './views/VerTurnos';
import Solicitud from './views/Solicitud';
import MiPerfil from './views/MiPerfil';

//Submenu Supervisor -> Trabajadores
import Crear from './views/Crear';
import Modificar from './views/Modificar';
import Eliminar from './views/Eliminar';

//Submenu Supervisor -> Turnos
import VerSolicitudes from './views/VerSolicitudes';
import BuscarPorFecha from './views/BuscarPorFecha';
import CrearPlantilla from './views/CrearPlantilla';

//Submenu Trabajador -> Ver Turnos
import PlantillaSemanal from './views/PlantillaSemanal';
import PlantillaMensual from './views/PlantillaMensual';

//Submenu Trabajador -> Mi Perfil
import IngresarSolicitud from './views/IngresarSolicitud';
import MisSolicitudes from './views/MisSolicitudes';


export default {
  name: 'app',
  components: {
    Contenido,
    Nav
  },
  views: {
    InicioSupervisor,
    Trabajadores,
      Crear,
      Modificar,
      Eliminar,
    Turnos,
      VerSolicitudes,
      BuscarPorFecha,
      CrearPlantilla,
    InicioTrabajador,
    VerTurnos,
      PlantillaSemanal,
      PlantillaMensual,
    Solicitud,
      IngresarSolicitud,
      MisSolicitudes,
    MiPerfil,
  }
}

</script>

<style lang="scss">
  @import './assets/scss/app.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
