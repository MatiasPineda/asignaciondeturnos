<template>
    <div>
        <form class="needs-validation" novalidate>
            <div class="form-group row">
                <label for="inputName" class="col-sm-2 col-form-label">Nombre Completo</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputName" required>
                </div>
            </div>
            <div class="form-group row">
                <label for="inputMail" class="col-sm-2 col-form-label">Correo Electrónico</label>
                <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputMail" required>
                </div>
            </div>
            <div class="row">
                <div class="form-inline form-group col">
                    <label class="my-1 mr-2" for="lu">Lunes</label>
                    <select class="custom-select my-1 mr-sm-2" id="lu">
                        <option value="all">Todos</option>
                        <option value="am">Mañana</option>
                        <option value="pm">Tarde</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="form-inline form-group col">
                    <label class="my-1 mr-2" for="ma">Martes</label>
                    <select class="custom-select my-1 mr-sm-2" id="ma">
                        <option value="all">Todos</option>
                        <option value="am">Mañana</option>
                        <option value="pm">Tarde</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="form-inline form-group col">
                    <label class="my-1 mr-2" for="mi">Miércoles</label>
                    <select class="custom-select my-1 mr-sm-2" id="mi">
                        <option value="all">Todos</option>
                        <option value="am">Mañana</option>
                        <option value="pm">Tarde</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="form-inline form-group col">
                    <label class="my-1 mr-2" for="ju">Jueves</label>
                    <select class="custom-select my-1 mr-sm-2" id="ju">
                        <option value="all">Todos</option>
                        <option value="am">Mañana</option>
                        <option value="pm">Tarde</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="form-inline form-group col">
                    <label class="my-1 mr-2" for="vi">Viernes</label>
                    <select class="custom-select my-1 mr-sm-2" id="vi">
                        <option value="all">Todos</option>
                        <option value="am">Mañana</option>
                        <option value="pm">Tarde</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="form-inline form-group col">
                    <label class="my-1 mr-2" for="sa">Sábado</label>
                    <select class="custom-select my-1 mr-sm-2" id="sa">
                        <option value="all">Todos</option>
                        <option value="am">Mañana</option>
                        <option value="pm">Tarde</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div class="form-inline form-group col">
                    <label class="my-1 mr-2" for="do">Domingo</label>
                    <select class="custom-select my-1 mr-sm-2" id="do">
                        <option value="all">Todos</option>
                        <option value="am">Mañana</option>
                        <option value="pm">Tarde</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary" @click="prueba()">Crear Trabajador</button>
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
                alert('Creación Correcta');
            },
        },
    }
</script>

<style scoped>

</style>