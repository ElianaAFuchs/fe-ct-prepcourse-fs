// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function elevarAlCuadrado(num) {
  return Math.pow (num,2) ;
  // La función recibe un argumento llamado num el cual es un numero.
  // Debes Retorna el valor de "num" elevado al cuadrado.
  // Por ejemplo: 
  // 6 ---> 36
  // 0 ---> 0
  // Tu código:
}

var numAlCuadrado = elevarAlCuadrado(4)
console.log(numAlCuadrado)
module.exports = elevarAlCuadrado;
// Si queremos utilizar el objeto global "Math" podemos implementat en nuesto codigo 
//Math.pow() que calcula la base elevada a la potencia de exponente