
// Tu calificación.

/*
var calificacion = parseInt(prompt("¿Cuál es tu calificación? "))

if (calificacion == 0) {
    console.log("¿Es eso posible?")
} else if (calificacion > 1 && calificacion < 6) {
    console.log("Reprobado")
} else if (calificacion >= 6 && calificacion <= 8) {
    console.log("Bien")
} else if (calificacion >=9 && calificacion <= 10) {
    console.log("Excelente")
} else {
    console.log("No es un número válido")
}
*/

// Número impar. 

var impar; 
var limite = 100;

for (let index = parseInt(prompt("Ingresa un número menor a 100: ")); index <= limite; index++) {
    if (index % 2 != 0) {
        impar = index
        console.log(impar + " es un número impar.")
    } 
    
}