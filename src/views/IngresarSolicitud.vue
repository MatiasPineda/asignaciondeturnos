<template>
  <div class="cont-view">
    <form>
      <div class="form-group">
        <label for="solicitudes">Ingresa tu Solicitud</label>
        <textarea class="form-control" id="solicitudes" rows="3" cols="40" required></textarea>
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
