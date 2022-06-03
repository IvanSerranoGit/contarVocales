// Creamos un array con todas las vocales
const vocales = ["a", "e", "i", "o", "u"];

// Generamos la función  contadorVocales que 
//tendrá como parámetro un string
function contadorVocales(str) {
    // iniciamos una variable con valor en 0 
    let contador = 0;
    //usaremos el bucle for of
    //Modificamos str a minúsculas
    for (let value of str.toLowerCase()) {
        if (vocales.includes(value)) {
            contador++;
        }
    }

    return contador
}
//Llamamos a nuestra función
// Guardamos el valor de la función 
const resultado = contadorVocales("Gatito");
//imprimimos en consola
console.log(resultado);

// let animal = "gato";
// for (let value of animal) {
//   console.log(value);
// }

//g
//a
//t
//o