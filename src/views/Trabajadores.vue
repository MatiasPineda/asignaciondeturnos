<template>
  <div class="cont-view trabajadores">
    <h1>TRABAJADORES</h1>
    <div
      v-for="(trabajador, index) in workers"
      v-bind:key="index"
      class="datos-trabajador"
      style="margin-bottom: 40px"
    >
      <div class="float-left">
        <img src="../assets/images/chico.svg" class="img-fluid" id="chico">
        {{ trabajador.name }} -
        {{ trabajador.email }}
      </div>
      <div class="float-right">
        <md-button @click="editUser(index)" class="md-icon-button md-raised">
          <img src="../assets/images/editar.svg" alt="Modificar">
        </md-button>
        <md-button @click="showDialog = true" class="md-icon-button md-raised">
          <img src="../assets/images/eliminar.svg" alt="Eliminar">
        </md-button>
      </div>
    </div>
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>¿Está seguro de querer eliminar este usuario?</md-dialog-title>
      <md-dialog-actions>
        <md-button class="md-primary" @click="deleteUser(0)">Aceptar</md-button>
        <md-button class="md-primary" @click="showDialog = false">Cancelar</md-button>
      </md-dialog-actions>
    </md-dialog>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "Trabajadores",
    data() {
      return {
        showDialog: false,
        workers: this.$store.state.workers
      }
    },
    computed: {
      ...mapGetters("workers"),
    },
    methods: {
      editUser(id){
        return this.$router.push({
          name: 'modificar',
          params: {id: id}
        })
      },
      deleteUser(id){
        console.log(id);
        this.showDialog=false;
      },
      listarTrabajadores() {}
    }
  }
</script>

<style scoped>
    .datos-trabajador {
        padding: 20px;
    }
    #chico {
        height: 60px;
        width: auto;
        padding: 10px;
    }

</style>
