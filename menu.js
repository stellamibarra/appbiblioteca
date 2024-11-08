import PromptSync from "prompt-sync";
import{crearUsuario, editarUsuario, eliminarUsuario}from "./crudUsuarios.js"


function menu (){


const prompt = PromptSync();
let option = Number(prompt("1. crear usuario,2. editar usuario ,3.eliminar usuario "))
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

    default:

}
}

menu()

















