<template>
    <div id="contenido">
        <div class="cont sidebar" align="left">
            <div class="sidebar-supervisor" >
                <ul style="list-style-type:none">
                    <li>
                        <router-link
                            class="nav-link"
                            data-dismiss="modal"
                            :to="{ name: 'inicio-supervisor' }"
                        >
                            Inicio
                        </router-link>
                    </li>
                    <li>
                        <router-link
                            class="nav-link"
                            data-dismiss="modal"
                            :to="{name: 'trabajadores'}"
                        >
                            Trabajadores
                        </router-link>

                    </li>
                    <ul style="list-style-type:none">
                        <li>
                            <router-link
                                    class="nav-link"
                                    data-dismiss="modal"
                                    :to="{ name: 'crear' }"
                            >
                                Crear
                            </router-link>
                        </li>
                    </ul>
                    <li>
                        <router-link
                                class="nav-link"
                                data-dismiss="modal"
                                :to="{ name: 'turnos' }"
                        >
                            Turnos
                        </router-link>
                    </li>
                    <ul style="list-style-type:none">
                        <li>
                            <router-link
                                class="nav-link"
                                data-dismiss="modal"
                                :to="{ name: 'ver-solicitudes' }"
                            >
                                Ver Solicitudes
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                    class="nav-link"
                                    data-dismiss="modal"
                                    :to="{ name: 'crear-plantilla' }"
                            >
                                Crear Plantilla
                            </router-link>
                        </li>
                    </ul>
                </ul>
            </div>
            <div class="sidebar-trabajador">
                <ul style="list-style-type:none">
                    <li>
                        <router-link
                                class="nav-link"
                                data-dismiss="modal"
                                :to="{ name: 'inicio-trabajador' }"
                        >
                            Inicio
                        </router-link>
                    </li>
                    <li>
                        <router-link
                                class="nav-link"
                                data-dismiss="modal"
                                :to="{ name: 'ver-turnos' }"
                        >
                            Ver Turnos
                        </router-link>
                    </li>
                    <ul style="list-style-type:none">
                        <li>
                            <router-link
                                    class="nav-link"
                                    data-dismiss="modal"
                                    :to="{ name: 'plantilla-semanal' }"
                            >
                                Plantilla Semanal
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                    class="nav-link"
                                    data-dismiss="modal"
                                    :to="{ name: 'plantilla-mensual' }"
                            >
                                Plantilla Mensual
                            </router-link>
                        </li>
                    </ul>
                    <li>
                        <router-link
                                class="nav-link"
                                data-dismiss="modal"
                                :to="{ name: 'solicitud' }"
                        >
                            Solicitud
                        </router-link>
                    </li>
                    <ul style="list-style-type:none">
                        <li>
                            <router-link
                                class="nav-link"
                                data-dismiss="modal"
                                :to="{ name: 'ingresar-solicitud' }"
                            >
                                Ingresar
                            </router-link>
                        </li>
                        <li>
                            <router-link
                                    class="nav-link"
                                    data-dismiss="modal"
                                    :to="{ name: 'mis-solicitudes' }"
                            >
                                Mis Solicitudes
                            </router-link>
                        </li>
                    </ul>
                    <li>
                        <router-link
                                class="nav-link"
                                data-dismiss="modal"
                                :to="{ name: 'mi-perfil' }"
                        >
                            Mi Perfil
                        </router-link>
                    </li>
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