import PromptSync from "prompt-sync"
import { libros } from "./data.js";

const prompt = PromptSync();

function crearLibro() {
    let titulo = prompt("Ingrese nuevo nombre Titulo")
    let autor = prompt("Ingrese nuevo autor")
    // Si el titulo o autor  no esten  vacíos, vuelvo a solicitar el ingreso
    if (titulo === "" || autor === "") {
        crearLibro();

    }
    else {
        // Crear un libro con la información ingresada import PromptSync from "prompt-sync"
        let id = Math.floor(Math.random() * 100000000000)
        console.log("creacion libro id: ", id);

        let libro = {
            id: id,
            titulo: titulo,
            atutor: autor,

        }
        libros.push(libro)

        libros.map(libro => (console.log(libro)))
    }

}

function editarLibro() {

    let id = Number(prompt("Ingrese id del libro"))

    let libro = libros.find(libro => libro.id === id)
    if (libro) {
        libro.titulo = prompt("Ingrese nuevo nombre del Titulo")
        libro.autor = prompt("Ingrese nuevo apellido del autor")

        libros.map(id => (console.log(id)))
    }
}


function eliminarLibro() {
    let id = Number(prompt("Eliminar un Libro"));
    let libro = libros.splice(libro => libro.id == id)
    if (libro) {
        libro.libro = prompt("Eliminar un Libro")
        console.log("Libro eliminado")

    }
}
function mostrarLibros() {
    console.log("Lista de libros:");
    libros.forEach(libro => {
        console.log(`ID: ${libro.id}, Título: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}


export { crearLibro, editarLibro, eliminarLibro,mostrarLibros }
