function divide(x, y) {
  if (y===0){
    return "No se puede dividir por cero"
  } else {
    return (x / y); 
  }
  // La función recibe dos argumentos llamados "x" e "y" que son números.
  // Retorna el resultado de la division de estos argumentos.
  // Por ejemplo: 
  // 10, 5 ---> 2
  // 5, 5 ---> 1
  // Tu código:
}
 
console.log(divide(50,5))
module.exports = divide;