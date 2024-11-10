import PromptSync from "prompt-sync";
import { buscarLibrosPrestados, crearLibro, editarLibro, eliminarLibro, mostrarLibros } from "./crudLibros.js"


export function menuLibros() {


    const prompt = PromptSync();
    let opcion = Number(prompt("1. Crear Libro,2. Editar Libro,3.Eliminar Libro ,4.Mostrar Libros,5.Buscar Libros Prestados ,6.Menu Principal"))
    console.log(opcion)

    switch (opcion) {
        case 1:
            crearLibro()
            menuLibros()

            break;
        case 2:
            editarLibro()
            menuLibros()
            break;
        case 3:
            eliminarLibro()
            menuLibros()
            break;
        case 4:
            mostrarLibros()
            menuLibros()
            break;
        case 5:
            buscarLibrosPrestados()
            menuLibros()
            break;
            case 6:
                menu()
                break;




        default:

    }
}

