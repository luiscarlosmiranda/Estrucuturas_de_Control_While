/* 4. Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas. */

let palabras = [];

while (true) {
    let palabra = prompt("Ingrese una palabra (deje en blanco para terminar)");
    if (palabra === "" ) {
        break;
    }
    palabras.push(palabra);
}

let resultado = palabras.join("");

document.write(resultado);