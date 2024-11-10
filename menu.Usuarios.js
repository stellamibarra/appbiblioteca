import PromptSync from "prompt-sync";
import{crearUsuario, editarUsuario, eliminarUsuario, mostrarUsuarios}from "./crudUsuarios.js"


function menu (){


const prompt = PromptSync();
let option = Number(prompt("1. Crear usuario,2. Editar usuario ,3.Eliminar usuario ,4.Mostrar Usuarios"))
console.log(option)

switch (option) {
    case 1:
        crearUsuario()
        menu()
        
        break;
    case 2:
        editarUsuario()
        menu()
        break;
    case 3:
        eliminarUsuario()
        menu()
        break;
case 4:
    mostrarUsuarios()
    menu()
    break;
    default:

}
}

menu()

















