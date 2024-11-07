// import PromptSync from "prompt-sync"

// const prompt = PromptSync()

// const libro = {
//     titulo: "Cien años de Soledad",
//     autor: "Gabriel Garcia Marquez"
// }

//console.log(libro)//muestra el obj
//  console.log(libro.titulo) //accedo  a la propiedad del obj
// libro.titulo = "juan"
// console.log (libro.titulo)
const libros = [
    {
        id:1,
        titulo :"La Gallina Degollada",
        autor:"Horacio Quiroga"
    },
    {   
        id:2,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes"
    },
    {
        id:3,
        titulo: "1984",
        autor: "George Orwell"
    },
    {
        id:4,
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry"
    }
]
 // console.log(libros[1].autor)
// console.log(libros[0],libros[1],libros[2]);
// console.log(libros[0].titulo,libros[1].titulo,libros[2].titulo);

// libros.map(libro =>(console.log(libro)));//mostrar libro

// libros.push({titulo:"Harry Potter",autor:"James Lily"})
// libros.map(libro =>(console.log(libro)));//mostrar libro

// libros.shift()
// libros.pop()

// libros.unshift({titulo:"Harry Potter",autor:"James Lily"}) agrega al principio

// libros.map(libro =>(console.log(libro)));//mostrar libro

// libros.splice(1,4,    {
//     titulo: "Tres Cerditos",
//     autor: "Gabriel Garcia"
// }
// )
// console.log("-------------------------------------------------");

// libros.map(libro =>(console.log(libro)));//mostrar libro

// delete libros[0].autor;
// delete libros[1].autor;

// console.log("-------------------------------------------------");

// libros.map(libro =>(console.log(libro)));//mostrar libro

 //libros.map(libro =>(console.log(libro)));//mostrar libro
// let texto = prompt("Ingrese texto")

// if(texto == "" || texto == " " || texto == "  " ){
//     console.log("escriba un texto");
    
// }

// console.log(texto);

// function crearlibro(){
//    let titulo= prompt("ingrese el titulo del libro")
//    let autor= prompt("ingrese el titulo del autor")


//    if ( autor == ""){
//     console.log("escriba un autor");
    
//    }
   
//  libros.push(
//     {
//         titulo:titulo,
//         autor:autor
//     }
//    )
//    libros.map(libro =>(console.log(libro)))
   
// }
// crearlibro()

let id = 4;

for (let i = 0; i < libros.length; i++) {
    if (libros[i].id == id){
        console.log(libros[i].titulo);
    }
    
}