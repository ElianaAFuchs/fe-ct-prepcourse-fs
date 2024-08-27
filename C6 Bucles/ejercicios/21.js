function esPotenciaDeDos(numero) {
  // La función recibe un "numero" por argumento.
  // Determina si es una potencia de 2.
  // Devuelve true si lo es, sino devuelve false.
  // PISTA: Utiliza un bucle while.
  // Tu código:
  let producto = 2;

  // Multiplicamos "producto" * 2 hasta alcanzar o sobrepasar el valor del parámetro "numero"

  while (producto < numero) {
    producto *= 2;
  };

//------------------------------------------------------------------------------------------------------------//

  // Comparamos el valor del "producto" con el valor del parámetro para saber si es potencia de 2

  if (producto > numero) {
    return false;
  } else if (producto === numero) {
    return true;
  };

  }

  console.log(esPotenciaDeDos(20));

module.exports = esPotenciaDeDos;
