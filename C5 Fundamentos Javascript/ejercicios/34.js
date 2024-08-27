// ⛔️ Recuerda que debes utilizar el objeto global "Math".

function redondearNumero(num) {
   return Math.round(num);
   // La función recibe un argumento llamado num el cual es un numero.
   // Debes redondear "num" al entero más próximo y retornarlo.
   // Por ejemplo: 
   // 1.5 ---> 2
   // 0.1 ---> 0
   // Tu código:
}

var NumeroRedondeado = redondearNumero(1.2)
console.log(NumeroRedondeado)
module.exports = redondearNumero;
