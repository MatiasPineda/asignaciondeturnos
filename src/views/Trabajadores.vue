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
                <router-link
                        class="nav-link"
                        data-dismiss="modal"
                        :to="{ name: 'modificar', params: {id: index}}"
                >
                    Modificar
                </router-link>
                <button @click="deleteUser()">Eliminar</button>
                <router-link
                        class="nav-link"
                        data-dismiss="modal"
                        :to="{ name: 'eliminar' }"
                >

                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Trabajadores",
        data() {
            return {
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
            return this.$router.push({
              name: 'eliminar',
              params: {id: id}
            })
          },
          listarTrabajadores() {}
        }
    }
</script>

<style scoped>

</style>