function tieneTresDigitos(num) {
  var longitud = num.toString().length;
  if (longitud===3) {
    return true;
  } else {
    return false;
  }
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
}

console.log(tieneTresDigitos(176))
console.log(tieneTresDigitos(2))

//convertimos el número a una cadena usando toString() y 
//luego obtenemos la longitud de esa cadena utilizando length. 
//Después, verificamos si la longitud es igual a tres. 
//Si lo es, retornamos true; de lo contrario, retornamos false. 
//Esto nos permite determinar si el número tiene exactamente tres dígitos.
module.exports = tieneTresDigitos;
