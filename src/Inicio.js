class ClienteService{
    cliente = {};
    listado = [];

    constructor() {
        this.listado = [
            {nombre:"Anggie", usuario:"angie", contraseña:"123"},
            {nombre:"Juan", usuario:"juan",  contraseña:"456"},
        ]
    }

    validar(usuario, contraseña){
        for(const unCliente of this.listado){
            if(unCliente.usuario == usuario && unCliente.contraseña == contraseña) {
                this.cliente = unCliente;
                break;
            }else{
                this.cliente={};
            }
        }
    }

    obtenerCliente() {
        return this.cliente;
    }


}export default new ClienteService();