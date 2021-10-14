let cliente1 = {"nombre":"Anggie", "contraseña":"123"}
let cliente2 = {"nombre":"Juan", "contraseña":"456"}

let listaClientes = [cliente1,cliente2]

const procesarInformacion = ()=>{
    let formulario = document.getElementById("formulario_compra");

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
