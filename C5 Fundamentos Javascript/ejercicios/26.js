function obtenerSaludo(nombre) {
  return "Hola" + " " + nombre + "!" ;
  // La función recibe un argumento llamado nombre el cual es un string. 
  // Toma el string "nombre" y concatena otros string en la cadena para que tome la siguiente forma:
  // Ejemplo: "Martin" ---> "Hola Martin!"
  // Retorna el nuevo string. 
  // Tu código:
}

var saludo = obtenerSaludo("pippin")

console.log(saludo)
module.exports = obtenerSaludo;