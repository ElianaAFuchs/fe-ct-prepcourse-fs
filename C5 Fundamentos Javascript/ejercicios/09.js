function esNuloOIndefinido(valor) {
  if (valor === null || typeof valor === "undefined") {
    return true;
  } else {return false;
  }
}

console.log(esNuloOIndefinido(5))

  // La función recibe un argumento llamado valor.
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // null ---> true 
  // undefined ---> true 
  // 22 ---> false
  // "texto" ---> false
  // Tu código:

module.exports = esNuloOIndefinido;