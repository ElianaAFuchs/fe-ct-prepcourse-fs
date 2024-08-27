function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es par.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 14 ---> true
  // 15 ---> false
  // Tu código:
}

console.log(esPar(7))
console.log(esPar(4))
module.exports = esPar;
