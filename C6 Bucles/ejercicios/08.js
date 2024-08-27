function esPositivoOInferiorA10(a) {
   if (a > 0 && a < 10) {
      return true;
   } else {
      return false;
   }
   // La función recibe un número "a" por parámetro.
   // Retorna true si es positivo y menor que 10.
   // Retorna false en caso contrario.
   // Tu código:
}

console.log(esPositivoOInferiorA10(5))
console.log(esPositivoOInferiorA10(11))
module.exports = esPositivoOInferiorA10;
