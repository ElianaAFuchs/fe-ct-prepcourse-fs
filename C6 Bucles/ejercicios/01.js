function esIgualYNegativo(a, b) {
  if (a===b && a>0 && b>0) {
    return true;
  } else {
    return false;
  }
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
}

console.log(esIgualYNegativo(3,3))
console.log(esIgualYNegativo(1,6))
module.exports = esIgualYNegativo;
