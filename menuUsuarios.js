import PromptSync from "prompt-sync";
import{crearUsuario, editarUsuario, eliminarUsuario, mostrarUsuarios}from "./crudUsuarios.js"
import{menu}from "./menu.js"


 export function menuUsuarios (){


const prompt = PromptSync();
let opcion = Number(prompt("1. Crear usuario,2. Editar usuario ,3.Eliminar usuario ,4.Mostrar Usuarios,5.Menu Principal"))
console.log(opcion)

switch (opcion) {
    case 1:
        crearUsuario()
        menuUsuarios()
        
        break;
    case 2:
        editarUsuario()
        menuUsuarios()
        break;
    case 3:
        eliminarUsuario()
        menu()
        break;
case 4:
    mostrarUsuarios()
    menuUsuarios()
    
    break;
    case 5:
        menu()
        break;
    default:

}
}



















