function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:

  // Empezamos la iteración en 2 para obviar la división por 1, ya que no queremos que nuestra condición dentro del "if" se cumpla.
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    };
  };
  
  //--------------------------------------------------//

  return true;
}

console.log(esNumeroPrimo(8))

module.exports = esNumeroPrimo;
