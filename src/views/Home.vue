<template>
  <div class="cont-view home">
    <div>
      <h1>Turnofy</h1>
      <img src="./../assets/images/logo.svg" alt="" />
      <button class="btn btn-primary" @click="supervisor()">Soy un supervisor</button>
      <button class="btn btn-primary" @click="trabajador()">Soy un trabajador</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Home",
    methods: {
      supervisor() {
        console.log('supervisor');
        return this.$router.push({
          name: 'inicio-supervisor'
        })
      },
      trabajador() {
        console.log('trabajador');
        
        return this.$router.push({
          name: 'inicio-trabajador'
        })
      }
    }
  }
</script>
