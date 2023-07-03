/*5. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.*/

while (true) {
    let dia = prompt("Ingrese un día de la semana");
    if (dia === "lunes") {
        alert("¡Buen comienzo de semana!");
    } else if (dia === "martes") {
        alert("¡Ánimo, ya es martes!");
    } else if (dia === "miercoles") {
        alert("¡Mitad de semana!");
    } else if (dia === "jueves") {
        alert("¡Ya casi es viernes!");
    } else if (dia === "viernes") {
        alert("¡Feliz viernes!");
    } else if (dia === "sabado") {
        alert("¡Buen fin de semana!");
    } else if (dia === "domingo") {
        alert("Ve a descansar");
        break;
    } else {
        alert("Día no válido");
    }
}