function esImpar(num) {
  if (num % 2 != 0) {
    return true;
  } else {
    return false;
  }
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es impar.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 15 ---> true
  // 14 ---> false
  // Tu código:
}

console.log(esImpar(5))
console.log(esImpar(4))
module.exports = esImpar;