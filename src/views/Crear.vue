<template>
    <div>
        <form>
            Nombre Completo <input type ="text"/> <br>
            Correo electrónico <input type ="text"/> <br>


            Lunes
            <select>
                <option value="all">Todos</option>
                <option value="am">Mañana</option>
                <option value="pm">Tarde</option>
                <option value="no">No</option>
            </select><br>
            Martes
            <select>
                <option value="all">Todos</option>
                <option value="am">Mañana</option>
                <option value="pm">Tarde</option>
                <option value="no">No</option>
            </select><br>
            Miercoles
            <select>
                <option value="all">Todos</option>
                <option value="am">Mañana</option>
                <option value="pm">Tarde</option>
                <option value="no">No</option>
            </select><br>
            Jueves
            <select>
                <option value="all">Todos</option>
                <option value="am">Mañana</option>
                <option value="pm">Tarde</option>
                <option value="no">No</option>
            </select><br>
            Viernes
            <select>
                <option value="all">Todos</option>
                <option value="am">Mañana</option>
                <option value="pm">Tarde</option>
                <option value="no">No</option>
            </select><br>
            Sabado
            <select>
                <option value="all">Todos</option>
                <option value="am">Mañana</option>
                <option value="pm">Tarde</option>
                <option value="no">No</option>
            </select><br>
            Domingo
            <select>
                <option value="all">Todos</option>
                <option value="am">Mañana</option>
                <option value="pm">Tarde</option>
                <option value="no">No</option>
            </select><br>

            <input type="button" name="submit_id" value="Crear Trabajador" onclick='prueba()' />
        </form>
    </div>
</template>

<script>
    export default {
        name: "Crear"
    }
</script>

<style scoped>

</style>