<template>
  <div class="cont-view login">
    <form>
      <h1>Turnofy</h1>
      <img src="./../assets/images/logo.svg" alt="" />
      <div class="form-group">
        <label for="correo">Email</label>
        <input type="email" class="form-control" id="correo">
      </div>
      <div class="form-group">
        <label for="pw">Contraseña</label>
        <input type="password" class="form-control" id="pw">
      </div>
      <div class="form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: "Home"
  }
</script>