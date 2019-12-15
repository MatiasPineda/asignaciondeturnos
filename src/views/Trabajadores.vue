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
                <router-link
                        class="nav-link"
                        data-dismiss="modal"
                        :to="{ name: 'modificar' }"
                >
                    Modificar
                </router-link>
                <router-link
                        class="nav-link"
                        data-dismiss="modal"
                        :to="{ name: 'eliminar' }"
                >
                    Eliminar
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
            listarTrabajadores() {}
        }
    }
</script>

<style scoped>

</style>