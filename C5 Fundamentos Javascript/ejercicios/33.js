// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevar(num, exponent) {
  return Math.pow(num, exponent);
  // La función recibe dos argumentos llamados "num" y "exponent" los cuales son numeros.
  // Debes Retorna el valor de "num" elevado al "exponent".
  // Por ejemplo: 
  // 2, 2 ---> 4
  // 0, 5 ---> 0
  // Tu código:
}

var elevado = elevar(2,3)
console.log(elevado)

module.exports = elevar;