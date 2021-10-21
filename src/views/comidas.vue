<template> 

     <nav name="navegacion" class="navegation">
        <img src="/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/logo2.png" width=128px alt="">
        <button>INICIO</button>
        <button>CARTELERA</button>
        <button>PROXIMOS ESTRENOS</button>
        <button>COMIDA</button>
        <button>TARIFAS</button>
        <button>INICIAR SECIÓN</button>
    </nav>

    <main>
        <div id="divprincipal">
            <h1>COMBOS</h1>
            <div>
                
                    
                    <h3 >COMBO</h3>
                    <img src="/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/alimentos/combos/combo1.png" alt="" width="256px">

                    <ul >
                        <li >hamburguesa</li>
                        <li >perro caliente</li>
                        <li >papas</li>
                        <li >gaseosa</li>
                    </ul>
                    <p >
                        $12.000 cop                       
                    
                    </p>
                    
                
            </div>
            <div>
                
                    
                    <h3 >COMBO</h3>
                    <img src="/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/alimentos/combos/combo2.png" alt="" width="256px" >

                    <ul>
                        <li >Perro Caliente</li>
                        <li >Papas</li>
                        <li >Gaseosas</li>
                    </ul>
                    <p >
                        6.000 cop
                    
                    </p>
                    
                
            </div>
            <div>
                
                    
                    <h3 >COMBO</h3>
                    <img src="/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/alimentos/combos/combo3.png" alt="" width="256px">

                    <ul >
                        <li >gaseosa</li>
                        <li >emparedado</li>
                        <li >papas</li>
                    </ul>
                    <p >
                        6.000                    
                    </p>
                    
                
            </div>
        </div>

        <div id="divprincipal1">
            <h1>BEBIDAS</h1>
            <div>
                
                    
                    <h3 >POSTOBON</h3>
                    <img src="D:/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/alimentos/bebidas/pepsi.png" alt="" width="256px">

                    <ul >
                        <li >pepsi</li>
                        <li >colombiana</li>
                        <li >uva</li>
                    </ul>
                    <p>
                        2000
                    </p>
                    
                
            </div>
            <div>
                
                    
                    <h3 >COCACOLA</h3>
                    <img src="D:/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/alimentos/bebidas/cocacola.jpg" alt="" width="256px">

                    <ul>
                        <li >cocacola</li>
                        <li >fanta</li>
                        <li >del valle</li>
                    </ul>
                    <p >
                        3000                    
                    </p>
                    
                
            </div>
            <div>
                
                    
                    <h3 >JUGOS</h3>
                    <img src="D:/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/alimentos/bebidas/frutas.jpg" alt="" width="256px">

                    <ul >
                        <li >mango</li>
                        <li >fresa</li>
                        <li >avena</li>
                    </ul>
                    <p >
                        2000                    
                    </p>
                    
                
            </div>
        </div>

        <div id="divprincipal2">
            <h1>DULCES</h1>
            <div>
                
                    
                    <h3 >CRISPETAS</h3>
                    <img src="D:/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/alimentos/dulces/crispetas.jpg" alt="" width="256px">
                    <ul >
                        <li >PEQUEÑA</li>
                        <li >MEDIANA</li>
                        <li >GRANDE</li>
                    </ul>
                    <p >
                        precio y/o descripcion                    
                    </p>
                    
                
            </div>
            <div >
                
                    
                    <h3 >PAPAS</h3>
                    <img src="D:/mintic2022/Ciclo_3/proyecto_c3 web/proyecto/img/alimentos/dulces/papitas.jpg" alt="" width="256px">

                    <ul>
                        <li >PEQUEÑA</li>
                        <li >MEDIANA</li>
                        <li >GRANDE</li>
                    </ul>
                    <p >
                        precio y/o descripcion                    
                    </p>
                    
                
            </div>
         
        </div>

        
    
        
        
       

    </main>
    <aside>
        <ul>
            
            <li>Bebidas</li>
            <li>combos</li>
            <li>Dulces</li>
        </ul>
    </aside>
</template>


<script>
</script>


<style scoped>
@media screen and (min-width: 1024px) {
  h1 {
    color: indigo;
    font-size: 36px;
  }

  main ul {
    display: grid;
    grid-template-rows: 50% 50%;
    grid-template-columns: 25% 25% 25% 25%;
    align-items: center;
    text-align: center;
    list-style-type: none;
  }

  main li {
    display: inline-table;
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
}
</style>
