<template>
    <div id="contenido">
        <div class="cont sidebar">
            <div class="sidebar-supervisor">
                <ul>
                    <li>Inicio</li>
                    <li>Trabajadores</li>
                    <li>Turnos</li>
                </ul>
            </div>
            <div class="sidebar-trabajador">
                <ul>
                    <li>Inicio</li>
                    <li>Ver Turnos</li>
                    <li>Solicitud</li>
                    <li>Mi Perfil</li>
                </ul>
            </div>
        </div>

        <div class="cont">

        </div>
    </div>
</template>

<script>
    export default {
        name: 'Contenido',
        props: {
            msg: String
        }
    }
</script>