function esPositivo(num) {
  if (num > 0) {
    return "Es positivo";
  }
  if (num < 0) {
    return "Es negativo";
  } else {
    return "Es nulo";
  }
  // La función recibe un argumento llamado num el cual es un numero entero.
  // Retorna como resultado un string que indica si el número es positivo o negativo.
  // Por ejemplo: 
  // Si el número es positivo ---> "Es positivo".
  // Si el número es negativo ---> "Es negativo".
  // Si el número es 0, devuelve false.
  // Tu código:
}

console.log(esPositivo(4))
console.log(esPositivo(0))
console.log(esPositivo(-5))

module.exports = esPositivo;