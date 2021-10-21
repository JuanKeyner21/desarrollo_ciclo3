<template>
  <header>
    <h1>Inicio de Sesión</h1>
  </header>
  <main>
    <div class="t2">
      <h2>Inicie sesión para ver sus beneficios!</h2>
    </div>

    <h2 class="error">{{ error }}</h2>
    <form action="#" id="form_inicio">
      <label class="us_con" for="cliente">Usuario*</label>
      <input type="text" name="cliente" placeholder="Login" v-model="usuario" />
      <label class="us_con" for="contraseña">Contraseña*</label>
      <input
        type="password"
        name="contraseña"
        placeholder="Password"
        v-model="contraseña"
      />
      <button @click.prevent="iniciar">Ingresar</button>
    </form>
  </main>
</template> 

<script>
import ClienteService from "@/Inicio.js";

export default {
  methods: {
    iniciar() {
      ClienteService.validar(this.usuario, this.contraseña);

      this.cliente = ClienteService.obtenerCliente();

      if (this.cliente.nombre) {
        this.$router.push({ name: "pagina_principal" });
      } else {
        this.error = "Datos invalidos";
      }
    },
  },

  data() {
    return {
      usuario: "",
      contraseña: "",
      cliente: {},
      error: "",
    };
  },
};
</script>


<style scoped>
* {
  margin: 0;
  padding: 0%;
}
body {
  background-color: lightgrey;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 1fr 0.5fr;
  margin: 0;
  height: 100vh;
}
header {
  text-align: center;
  font-size: larger;
  font-family: sans-serif;
  margin: 0;
}
main {
  text-align: center;
  display: grid;
  /* border: 2px solid black; */
  margin-left: 500px;
  margin-right: 500px;
  padding: 20px;
}

form {
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr;
}

button {
  width: 50%;
  padding: 1rem;
  background-color: #80ed90;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
}
input {
  width: 95%;
  padding: 10px;
  font-size: large;
  background-color: #112031;
  color: white;
}
#recordar {
  padding: 0%;
  width: 10%;
}
.t2 {
  font-family: sans-serif;
}
.us_con {
  display: block;
  text-align: left;
  font-size: x-large;
  padding: 10px;
  font-family: sans-serif;
}

#form_inicio {
  display: grid;
  grid-template-columns: 50rem;
  row-gap: 1rem;
}

.error{
    color: red;
    margin-top: 1rem;
}
</style>