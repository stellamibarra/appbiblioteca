import PromptSync from "prompt-sync"

const prompt = PromptSync();

function crearlibro() {
    let titulo = prompt("Ingrese el titulo")
    let autor = prompt("Ingrese autor")
    if (autor == ""){
        console.log("Escriba un  nuevo autor")
    } 
    libros.push(
       {
           titulo:titulo,
           autor:autor
       }
      )
      libros.map(libro =>(console.log(libro)))
      
   }
   crearlibro()
   
     

function editarLibbro() {
    let titulo = prompt("Ingrese nuevo titulo")
    let nombre = prompt("Ingrese nuevo autor")


 function eliminarLibro() {
    let titulo = prompt("Eliminar titulo")
    let autor = prompt("Eliminar autor")

}
function actualizarLibro() {
    let titulo = prompt("Actualizar titulo")
    let autor = prompt("Actualizar autor")
}
}