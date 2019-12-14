<template>
    <div>
        <form>
            <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">Nombre Completo</label>
                <div class="col-sm-10">
                    <input type="name" class="form-control" id="inputName">
                </div>
            </div>
            <div class="form-group row">
                <label for="inputMail" class="col-sm-2 col-form-label">Correo Electrónico</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputMail">
                </div>
            </div>
            <div class="form-inline form-group row">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Lunes</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="all">Todos</option>
                    <option value="am">Mañana</option>
                    <option value="pm">Tarde</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="form-inline form-group row">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Martes</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="all">Todos</option>
                    <option value="am">Mañana</option>
                    <option value="pm">Tarde</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="form-inline form-group row">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Miércoles</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="all">Todos</option>
                    <option value="am">Mañana</option>
                    <option value="pm">Tarde</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="form-inline form-group row">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Jueves</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="all">Todos</option>
                    <option value="am">Mañana</option>
                    <option value="pm">Tarde</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="form-inline form-group row">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Viernes</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="all">Todos</option>
                    <option value="am">Mañana</option>
                    <option value="pm">Tarde</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="form-inline form-group">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Sábado</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="all">Todos</option>
                    <option value="am">Mañana</option>
                    <option value="pm">Tarde</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="form-inline form-group">
                <label class="my-1 mr-2" for="inlineFormCustomSelectPref">Domingo</label>
                <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="all">Todos</option>
                    <option value="am">Mañana</option>
                    <option value="pm">Tarde</option>
                    <option value="no">No</option>
                </select>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary">Crear Trabajador</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        name: "Crear",
        methods:{
            prueba()
            {
                alert('holi');
            }
        }
    }
</script>

<style scoped>

</style>