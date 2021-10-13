<template>
    <header>        
        <h1>Inicio de Sesión</h1>
    </header>
    <main>
        <div class="t2">
            <h2>Inicie sesión para ver sus beneficios!</h2>
        </div>

        <form action="#" id="form_inicio">

                <label class="us_con" for="cliente">Usuario*</label>
                <input required type="text" name="cliente" placeholder="Login"/>
                <label class="us_con" for="contraseña">Contraseña*</label>
                <input required type="password" name="contraseña" placeholder="Password"/>
                <button @click="procesarInformacion" type="button" name="ingresar">Ingresar</button>
        </form>
    </main>
</template> 

<script>
    export default{
        mounted(){
            let cliente1 = {"nombre":"Anggie", "contraseña":"123"}
            let cliente2 = {"nombre":"Juan", "contraseña":"456"}

            this.listaClientes = [cliente1,cliente2]
        },

        data(){
            return{
                listaClientes:[],
            }
        },

        methods:{
            procesarInformación(){
                usuario = formulario.cliente.value
                passw = formulario.contraseña.value

                if(usuario == "Anggie" | usuario == "Juan"){
                    if(passw== "123" | passw == "456") {
                        alert(`Bienvenid@ ${usuario}`)            
                    }else{
                        alert("Error: contraseña incorrecta")
                    }
                }else{
                    alert("Error: usuario no encontrado")
                }
            }
        }
    }

</script>


<style scoped>
*{
            margin: 0;
            padding: 0%;
        }
        body{
            background-color: lightgrey;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 0.3fr 1fr 0.5fr;
            margin: 0;
            height: 100vh;
        }
        header{
            text-align: center;
            font-size: larger;
            font-family: sans-serif;
            margin: 0;

        }
        main{
            text-align: center;
            display: grid;
            /* border: 2px solid black; */
            margin-left: 500px;
            margin-right: 500px;
            padding: 20px;
        }


        form{
            display: grid;
            grid-template-rows: 1fr 0.5fr 0.5fr;            
        }

        button{
            width: 50%;
            padding: 1rem;
            background-color: #80ED90;
            margin-left: auto;
            margin-right: auto;
            margin-top: 2rem;

        }
        input{
            width: 95%;
            padding: 10px;
            font-size: large;
            background-color: #112031;
            color: white;
        }
        #recordar{
            padding: 0%;
            width: 10%;
        }
        .t2{
            font-family: sans-serif;
        }
        .us_con{
            display: block;
            text-align: left;
            font-size: x-large;
            padding: 10px;
            font-family: sans-serif;
        }

        #form_inicio{
            display: grid;
            grid-template-columns: 50rem;
            row-gap: 1rem;
        }
</style>