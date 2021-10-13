<template>
  <main>
    <h1>Tarifas Cine</h1>
    <table>
      <thead>
        <tr>
          <th rowspan="2">Tarifa General</th>
          <th colspan="2">Formato 2D</th>
          <th colspan="2">Formato 3D</th>
        </tr>
        <tr>
          <th>Sala Normal</th>
          <th>Sala Premiun</th>
          <th>Sala Normal</th>
          <th>Sala Premiun</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Funciones Lunes-Martes(No festivos)</td>
          <td>$6,000</td>
          <td>$8,000</td>
          <td>$7,500</td>
          <td>$9,500</td>
        </tr>
        <tr>
          <td>Funciones Miercoles-Jueves(No festivos)</td>
          <td>$7,000</td>
          <td>$9,000</td>
          <td>$8,500</td>
          <td>$10,500</td>
        </tr>
        <tr>
          <td>Funciones Viernes a Domingo y Festivos</td>
          <td>$10,000</td>
          <td>$12,000</td>
          <td>$11,500</td>
          <td>$13,500</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>


<script>
</script>


<style scoped>
body {
  background-color: #80ed99;
}

nav button {
  display: inline-block;
  border: 1px solid blue;
  border-radius: 16px;
  margin: 2px;
  padding: 2px;
  background-color: #57cc99;
}
main table {
  width: 520px;
  border: 2px solid blue;
  border-radius: 4px;
  margin: 2px;
  padding: 10px;
  background-color: #57cc99;
  box-shadow: 4;
  color: #fff8e5;
  text-align: center;
}
a:visited {
  color: green;
}
a:link {
  color: blue;
}
a:hover {
  color: blueviolet;
}
</style>