import PromptSync from "prompt-sync"
import{menuLibros} from "./menuLibros.js"
import{menuUsuarios} from "./menuUsuarios.js"

export function menu(){

const prompt = PromptSync();
let opcion =Number(prompt("1.menu libros , 2.menu usuarios"))
console.log(opcion);

switch (opcion) {
    case 1:
        menuLibros()
        break;
    case 2:
        menuUsuarios()
        break;

    default:
        break;
}
}
menu()