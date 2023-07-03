/* Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. */

let numero = prompt("Introduce un número:");
let i = 1;
let resultado = "";
while (i <= numero) {
  if (i % 5 === 0) {
    resultado += i + " ";
  }
  i++;
}
document.write(resultado);