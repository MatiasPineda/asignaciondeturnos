<template>
    <div id="contenido">
        <div class="cont sidebar" align="left">
            <div class="sidebar-supervisor" >
                <ul>
                    <li>Inicio</li>
                    <li>Trabajadores</li>
                    <ul>
                        <li>Crear</li>
                        <li>Modificar</li>
                        <li>Eliminar</li>
                    </ul>
                    <li>Turnos</li>
                    <ul>
                        <li>Ver Solicitudes</li>
                        <li>Buscar Por Fecha</li>
                        <li>Crear Plantilla</li>
                    </ul>
                </ul>
            </div>
            <div class="sidebar-trabajador">
                <ul>
                    <li>Inicio</li>
                    <li>Ver Turnos</li>
                    <ul>
                        <li>Planilla Semanal</li>
                        <li>Planilla Mensual</li>
                    </ul>
                    <li>Solicitud</li>
                    <ul>
                        <li>Ingresar</li>
                        <li>Mis Solicitudes</li>
                    </ul>
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