function fizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
    if (num % 3 === 0) {
       return "fizz"
  }
  if (num % 5 === 0) {
    return "buzz";
  } else {
    return false;
  }
    // Si "num" es divisible entre 3, retorna "fizz".
  // Si "num" es divisible entre 5, retorna "buzz".
  // Si "num" es divisible entre 3 y 5 (ambos), retorna "fizzbuzz".
  // De lo contrario, retorna false.
  // Tu código:
}

console.log(fizzBuzz(9))
console.log(fizzBuzz(15))
console.log(fizzBuzz(25))
module.exports = fizzBuzz;
