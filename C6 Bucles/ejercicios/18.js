function productoEntreNúmeros(a, b) {
  let producto = 1
  for ( let i = a; i <= 5; i++) {
  producto *= i  
}
  return producto;
  
  
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
}

let resultado = productoEntreNúmeros(2,5);
console.log(resultado);
module.exports = productoEntreNúmeros;