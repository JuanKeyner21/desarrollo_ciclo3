<template>
  <header>
    <h1>  Cartelera</h1>
  </header>
  <ul>
    

  </ul>

<li>
      <h1>Ant</h1> 
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      /> 
      <h4> Duración: 1:53:50 - ESP </h4> 
    </li>

<li>
      <h1>Kun fu Panda</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 2:12:20 - ESP </h4> 
    </li>

<li>
      <h1>Shrek</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:32:10 - ESP </h4> 
    </li>

<li>
      <h1>Titanic</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 3:23:60 - ESP </h4> 
    </li>

<li>
      <h1>Brave</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:13:30 - ESP </h4> 
    </li>

<li>
      <h1>Spiderman</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 3:55:10 - ESP </h4> 
    </li>

<li>
      <h1>Iron man</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:51:20 - ESP </h4> 
    </li>

<li>
      <h1>Luci</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:22:30 - ESP </h4> 
    </li>

<li>
      <h1>Venon</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 3:05:20 - ESP </h4> 
    </li>

<li>
      <h1>DeadPool</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:34:30 - ESP </h4> 
    </li>

<li>
      <h1>Alita</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:58:20 - ESP </h4> 
    </li>

<li>
      <h1>Jhon Wick</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:53:50 - ESP </h4> 
    </li>

<li>
      <h1>Kun fu Panda</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 2:53:50 - ESP </h4> 
    </li>

<li>
      <h1>WonderWoman</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 2:15:47 - ESP </h4> 
    </li>

<li>
      <h1>Flash</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:23:50 - ESP </h4> 
    </li>

<li>
      <h1>Hasta el cielo</h1>
      <img
        class="poster"
        src="..\assets\img\proximos_estrenos\rock_dog_poster_480x670.png"
      />
      <h4> Duración: 1:35:10 - ESP </h4> 
    </li>






</template>

<script>
// @ is an alias to /src
</script>

<style scoped>
body {
  background-color: #80ed99;
}

a {
  text-decoration: none;
}

nav {
  grid-column: 2;
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