<template>
    <div class="cont-view trabajadores">
        <h1>TRABAJADORES</h1>
        <div
            v-for="(trabajador, index) in trabajadores"
            v-bind:key="index"
            class="datos-trabajador"
            style="margin-bottom: 40px"
        >
            <div class="card">
                {{ trabajador.name }}<br/>
                {{ trabajador.email }}
                <button @click="editUser(index)">Modificar</button>
                <button @click="showDialog = true">Eliminar</button>
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
    export default {
        name: "Trabajadores",
      data() {
            return {
              showDialog: false,
                trabajadores: [
                    {
                        name: "Juan Pérez",
                        email: "mail@mail.com",
                        available: {
                            lu: "am",
                            ma: "am",
                            mi: "pm",
                            ju: "pm",
                            vi: "no",
                            sa: "all",
                            do: "all"
                        }
                    },
                    {
                        name: "Matías Pineda",
                        email: "correo@mail.com",
                        available: {
                            lu: "all",
                            ma: "all",
                            mi: "no",
                            ju: "am",
                            vi: "pm",
                            sa: "no",
                            do: "all"
                        }
                    },
                ]
            }
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

</style>