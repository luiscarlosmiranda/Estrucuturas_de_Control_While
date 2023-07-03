2. /*Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.*/

let num1 = parseInt(prompt("Ingrese el primer número entre 1 y 50"));
let num2 = parseInt(prompt("Ingrese el segundo número entre 1 y 50"));

while (num1 <= num2) {
    if (num1 === 1) {
        document.write(num1 + " ¡Lotería! <br>");
    } else if (num1  === 0) {
        document.write(num1 + " ¡Lotería! <br>");
    } else {
        document.write(num1 + "<br>");
    }
    num1++;
}

