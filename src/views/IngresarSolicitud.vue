<template>
  <div class="cont-view">
    <form>
      <div class="form-group">
        <md-datepicker v-model="selectedDate">
          <label>Seleccionar Fecha</label>
        </md-datepicker>
        <textarea class="form-control" id="solicitudes" rows="3" placeholder="Escribe el motivo aquí" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit" class="btn btn-primary" @click="prueba()">Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    name: "IngresarSolicitud"
  }
</script>
