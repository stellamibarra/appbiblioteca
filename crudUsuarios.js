import PromptSync from "prompt-sync"
import { usuarios } from "./data.js";

const prompt = PromptSync();

function crearUsuario() {
    let nombre = prompt("Ingrese nuevo nombre del usuario")
    let apellido = prompt("Ingrese nuevo apellido usuario")
    // Si el nombre o apellido están vacíos, vuelve a solicitar el ingreso
    if (nombre === "" && apellido === "") {
        crearUsuario();

    }
    else {
        // Crear un usuario con la información ingresada 
        let id = Math.floor(Math.random() * 100000000000)
        console.log("creacion usuario id: ", id);

        let usuario = {
            id: id,
            nombre: nombre,
            apellido: apellido,

        }
        usuarios.push(usuario)

        usuarios.map(usuario => (console.log(usuario)))
    }

}



function editarUsuario() {
    let id = Number(prompt("Ingrese id del usuario"))
    let usuario = usuarios.find(usuario => usuario.id === id)
    if (usuario) {
        usuario.nombre = prompt("Ingrese nuevo nombre del usuario")
        usuario.apellido = prompt("Ingrese nuevo apellido del usuario")
        usuarios.map(id => (console.log(id)))
    }
}

function eliminarUsuario() {
    mostrarUsuarios()
    let usuarioAEliminar = Number(prompt("elija el id de usuario a eliminar"));
    let indice = usuarios.findIndex(usuario => usuario.id === usuarioAEliminar); 
    let usuarioEliminado = usuarios.splice(indice,1)
    console.log("Usuario eliminado",usuarioEliminado);
}

function mostrarUsuarios() {
    console.log("Lista de Usuarios:");

    usuarios.forEach(usuario => {
        console.log(`ID: ${usuario.id}, Nombre: ${usuario.nombre}, Apellido: ${usuario.apellido}`);
    });
}

export { crearUsuario, editarUsuario, eliminarUsuario, mostrarUsuarios }





