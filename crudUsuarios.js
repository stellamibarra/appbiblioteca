import PromptSync from "prompt-sync"
import { usuarios } from "./data.js";


function crearUsuario() {
    let nombre = prompt("Ingrese nuevo nombre del usuario")
    let apellido = prompt("Ingrese nuevo apellido usuario")
    // Si el nombre o apellido están vacíos, vuelve a solicitar el ingreso
    if (nombre === "" && apellido === "") {
        crearUsuario();

    }
    else {
        // Crear un objeto usuario con la información ingresada
        let id = usuarios.length();
        let usuario =[{
            id:id,
            nombre:nombre,
            apellido:apellido,

        }]
        usuarios.push(usuario)

        usuarios.map(usuario => (console.log(usuario)))
    }

}


function editarUsuario() {
    let usuario = prompt("Ingrese nuevo Usuario")
}
function eliminarUsuario() {
    let usuario = prompt("Eliminar usuario")
}






