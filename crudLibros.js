import PromptSync from "prompt-sync"
import { libros, usuarios } from "./data.js";

const prompt = PromptSync();

function crearLibro() {
    let titulo = prompt("Ingrese nuevo nombre Titulo")
    let autor = prompt("Ingrese nuevo autor")
    // Si el titulo o autor  no esten  vacíos, vuelvo a solicitar el ingreso
    if (titulo === "" && autor === "") {
        crearLibro();

    }
    else {
        // Crear un libro con la información ingresada import PromptSync from "prompt-sync"
        let id = Math.floor(Math.random() * 100000000000)
        console.log("creacion libro id: ", id);

        let libro = {
            id: id,
            titulo: titulo,
            autor: autor,

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
    mostrarLibros()
    let libroAEliminar = Number(prompt("elija el id de libro a eliminar"));
    let indice = libros.findIndex(libro => libro.id === libroAEliminar);
    let libroEliminado = libros.splice(indice, 1)
    console.log("Libro eliminado", libroEliminado);
}


function mostrarLibros() {
    console.log("Lista de libros:");
    libros.forEach(libro => {
        console.log(`ID: ${libro.id}, Título: ${libro.titulo}, Autor: ${libro.autor}`);
    });
}



function buscarLibrosPrestados() {
    console.log("Libros prestados:");
    for (let index = 0; index < libros.length; index++) {
        const element = libros[index];
        for (let index = 0; index < usuarios.length; index++) {
            const u = usuarios[index];
            if(u.id === element.prestado){
                console.log(`${u.nombre} ${u.apellido} tiene el libro ${element.titulo}`);
                
            }
        }
    }
}
export { crearLibro, editarLibro, eliminarLibro, mostrarLibros ,buscarLibrosPrestados}
