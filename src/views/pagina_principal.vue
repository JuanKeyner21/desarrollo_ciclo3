<template>
  <header>
    <h1>Cine ACJ</h1>
  </header>

  <h2>En Cartelera</h2>
  <ul>
    <li>
      <h1>La Última Estafa</h1>
      <img class="poster" src="img\cartelera\poster la ultima estafa.png" />
    </li>
    <li>
      <h1>Shang-Chi</h1>
      <img class="poster" src="img\cartelera\poster shang-chi.jpg" />
    </li>
    <li>
      <h1>Maligno</h1>
      <img class="poster" src="img\cartelera\poster maligno.jpg" />
    </li>
  </ul>

  <h2>Proximos Estrenos</h2>
  <proximos />
</template>


<script>
import proximos from "@/components/proximos_estrenos.vue";
export default {
  name: "principal",
  components: {
    proximos,
  },
};
</script>


<style scoped>
</style>