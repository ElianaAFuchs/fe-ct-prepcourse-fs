function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return "Allowed"
  } else {
    return "Not allowed"
  }
  // Determinar si la persona puede ingresar al evento según su edad.
  // Si tiene 18 años o más, retorna el string: "Allowed".
  // Caso contrario: "Not allowed".
  // Tu código:
}

console.log(mayoriaDeEdad(15))
console.log(mayoriaDeEdad(18))
module.exports = mayoriaDeEdad;
