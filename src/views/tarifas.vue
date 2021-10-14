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
body{
    background-color: #80ed99;
}
a{
    text-decoration: 0;
}
nav img{
    width: 212px;
    margin-top: 16px;
    margin-left: 16px;
    margin-right: 16px;
    border: 2px solid black;
}
nav{
    margin-bottom: 16px;
}
nav input{
    margin-left: 8%;
    padding: 8px;
    border: 1px solid blue;
    border-radius: 48px;
}
nav button{
    display: inline-block;
    border: 1px solid blue;
    border-radius: 48px;
    margin: 16px;
    padding: 8px;
    background-color: #57cc99;
    align-content: center ;
}
main{
    margin: 5%;
}
h1{
    margin-bottom: 32px;
}
main tr{
    padding:16px;
}
main table{
    width: 80%;
    border: 2px solid blue;
    border-radius: 4px;
    margin: auto;
    padding: 30px;
    background-color: #57cc99;
    box-shadow: 4;
    color: #fff8e5;
}

a:visited{
    color: white;
}
a:link{
    color:white;
}
a:hover{
    color: black;
}
</style>