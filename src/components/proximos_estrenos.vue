<template>
  <header>
    <h1>Proximos Estrenos</h1>
  </header>
  <ul>
    <li>
      <h1>Sin Tiempo para morir</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\sin_tiempo_para_morir_poster_480x670.jpg"
      />
    </li>
    <li>
      <h1>Dog Rock: Renace Una Estrella</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
    </li>
    <li>
      <h1>Ron da Error</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\ron_da_error_poster_480x670.png"
      />
    </li>
    <li>
      <h1>Miss Revolución</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\miss_revolucion_poster_480x670.jpg"
      />
    </li>
    <li>
      <h1>Chernóbil: La Pelicula</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\chernobil_poster_480x670.png"
      />
    </li>
    <li>
      <h1>La Leyenda de la Viuda</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\la_leyenda_de_la_viuda_poster_480x670.png"
      />
    </li>
  </ul>
</template>

<script>
// @ is an alias to /src
export default {
  name: "proximos",
};
</script>

<style scoped>
body {
  background-color: #80ed99;
}

a {
  text-decoration: none;
}

nav {
  grid-column: 1;
  text-align: center;
}

#logo {
  border: 1px solid grey;
  border-radius: 4px;
}

nav ul {
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  align-items: center;
  text-decoration: none;
}

nav li {
  display: inline-block;
  border: 1px solid blue;
  border-radius: 16px;
  margin: 2px;
  padding: 2px;
  background-color: #57cc99;

  text-decoration: none;
}

header {
  text-align: center;
}

main li {
  border: 2px solid blue;
  border-radius: 4px;
  margin: 2px;
  padding: 10px;
  background-color: #57cc99;
  box-shadow: 4;
  color: #fff8e5;
}

.poster {
  border-radius: 8px;
}

@media screen and (min-width: 1024px) {
  main ul {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 33% 33% 33%;
    align-items: center;
    text-align: center;
    list-style-type: none;
  }

  main li {
    display: inline-table;
  }
}

@media screen and (min-width: 360px) and (max-width: 1024px) {
  main li {
    font-size: 12px;
  }

  main ul {
    display: grid;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-columns: 1fr;
    align-items: center;
    text-align: center;
    list-style-type: none;
  }
}
</style>