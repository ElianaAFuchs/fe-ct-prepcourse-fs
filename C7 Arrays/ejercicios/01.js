function devolverPrimerElemento(array) {
  // Retornar el primer elemento del arreglo recibido.
  // Tu código:


  function devolverPrimerElemento(array) {
    // Verificar si el arreglo no está vacío
    if (array.length > 0) {
      // Si no está vacío, retornar el primer elemento
      return array[0];
    } else {
      // Si está vacío, retornar undefined o cualquier otro valor deseado
      return undefined;
    }
  }
}

// Definir un arreglo
var miArreglo = [10, 20, 30, 40, 50];

// Llamar a la función devolverPrimerElemento con el arreglo como argumento
var primerElemento = devolverPrimerElemento(miArreglo);

// Imprimir el resultado
console.log("El primer elemento del arreglo es:", primerElemento);

module.exports = devolverPrimerElemento;
