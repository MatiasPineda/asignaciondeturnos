<template>
    <div id="nav">
        <div class="float-left">
            <img src="../assets/images/usuario.svg" class="img-fluid " alt="Icono Usuario">
            <div class="float-right text-left datos">
                <p>Nombre Apellido</p>
                <p>Rol</p>
            </div>
        </div>
        <div class="float-right">
            <img src="../assets/images/logo.svg" class="img-fluid" alt="Logo">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
