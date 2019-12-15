<template>
    <div class="cont-view">
        <h1>
            <router-link
                    class="nav-link"
                    data-dismiss="modal"
                    :to="{ name: 'ver-solicitudes' }"
            >
                Ver Solicitudes
            </router-link>
        </h1>
        <h1>
            <router-link
                    class="nav-link"
                    data-dismiss="modal"
                    :to="{ name: 'crear-plantilla' }"
            >
                Crear Plantilla
            </router-link>
        </h1>
    </div>
</template>

<script>
    export default {
        name: "InicioSupervisor"
    }
</script>

<style scoped>

</style>