function menosQueNoventa(num) {
  if (num < 90 ) {
    return true;
  } else { 
    return false;
  }
  // La función recibe un argumento llamado num.
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 50 ---> true
  // 91 ---> false
  // Tu código:
}
console.log(menosQueNoventa(5))
console.log(menosQueNoventa(102))

module.exports = menosQueNoventa;