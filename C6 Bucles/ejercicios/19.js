function sumarHastaN(n) {
  
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  let sumaTotal = 0
  for (i = 1 ; i <= n ; i++) {
    sumaTotal += i ;
  }
  return sumaTotal;
}

let resultado = sumarHastaN(5);
console.log(resultado);

module.exports = sumarHastaN;
