<template>
    <div class="trabajadores">
        <h1>TRABAJADORES</h1>
        <div
            v-for="(trabajador, index) in trabajadores"
            v-bind:key="index"
            class="datos-trabajador"
            style="margin-bottom: 40px"
        >
            <p>{{ trabajador.name }}</p>
            <p>{{ trabajador.email }}</p>
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
                        avaliable: {
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
                        avaliable: {
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