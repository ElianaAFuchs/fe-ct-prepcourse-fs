function estaEnRango(num) {
  if (num < 50 && num > 20) {
    return true;
  } else {
    return false;
  }
  // Retorna true si "num" es menor que 50 y mayor que 20.
  // De lo contrario, retornar false.
  // Tu código:
}

console.log(estaEnRango(5))
console.log(estaEnRango(30))

module.exports = estaEnRango;
