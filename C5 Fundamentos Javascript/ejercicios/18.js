function esVocal(letra) {
  // Convertimos la letra a minúscula para hacer la comparación más fácil
  letra = letra.toLowerCase();
  
  if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}
  
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:


console.log(esVocal(a))
console.log(esVocal(y))
console.log(esVocal(asdasdasd))


// utilizamos el letra = letra.toLowerCase para que si ponen una vocal en mayuscula como A, la consola nos devuelva "es vocal", de caso contrario el codigo seria sensible a las mayusculas
module.exports = esVocal;
