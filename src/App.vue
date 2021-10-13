<template>
  <div id="nav">
    <ul>
      <router-link :to="{name: 'pagina_principal'}"
        >
        <img src="@\assets\img\logo2.png">
      </router-link>
      <li>
        <router-link :to="{name: 'cartelera'}">CARTELERA</router-link>
      </li>
      <li>
        <router-link :to="{name: 'proximos_estrenos'}">PROXIMOS ESTRENOS</router-link>
      </li>
      <li>
        <router-link :to="{name: 'tarifas'}">TARIFAS</router-link>
      </li>
      <li>
        <router-link :to="{name: 'comidas'}">COMIDAS</router-link>
      </li>
      <li>
        <router-link :to="{name: 'inicio_sesion'}">INICIAR SESIÓN</router-link>
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
