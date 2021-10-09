<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <ul>
      <router-link to="/"
        >Home
        <img src="assets\img\logo2.png">
      </router-link>
      <li>
        <a href="página principal.html">INICIO</a>
      </li>
      <li>
        <router-link to="/cartelera">CARTELERA</router-link>
      </li>
      <li>
        <router-link to="/proximos_estrenos">PROXIMOS ESTRENOS</router-link>
      </li>
      <li>
        <a href="comidas.html">COMIDA</a>
      </li>
      <li>
        <a href="Tarifas.html">TARIFAS</a>
      </li>
      <li>
        <a href="Inicio.html">INICIAR SESION</a>
      </li>
    </ul>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  grid-column: 1;
  text-align: center;
}
/*
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */

div ul {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  text-decoration: none;
}

div li {
  display: inline-block;
  border: 1px solid blue;
  border-radius: 16px;
  margin: 2px;
  padding: 2px;
  background-color: #57cc99;

  text-decoration: none;
}
</style>
