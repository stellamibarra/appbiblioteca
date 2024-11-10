import PromptSync from "prompt-sync";
import{crearLibro,editarLibro,eliminarLibro,mostrarLibros}from "./crudLibros.js"


function menu (){


const prompt = PromptSync();
let option = Number(prompt("1. Crear Libro,2. Editar Libro,3.Eliminar Libro ,4.Mostrar Libros"))
console.log(option)

switch (option) {
    case 1:
        crearLibro()
        menu()
        
        break;
    case 2:
        editarLibro()
        menu()
        break;
    case 3:
        eliminarLibro()
        menu()
        break;
        case 4:
            mostrarLibros()
            menu()
            break;
            

    default:

}
}

menu()