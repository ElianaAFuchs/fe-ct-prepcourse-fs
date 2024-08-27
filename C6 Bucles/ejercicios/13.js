function esEntero(num) {
  return Number.isInteger(num);
  // Retorna true si "num" es un entero, ya sea positivo, negativo o cero.
  // Ejemplo: 0.8   ---> false
  // Ejemplo: 1     ---> true
  // Ejemplo: (-10) ---> true
  // De lo contrario, retorna false.
  // Tu código:
}

console.log(esEntero(-1.2))
console.log(esEntero(5))

module.exports = esEntero;
