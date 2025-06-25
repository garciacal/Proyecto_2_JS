// Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.

function greaterNumber(numberOne , numberTwo) {
  if (numberOne > numberTwo) return numberOne;
  if (numberOne < numberTwo) return numberTwo;
}

console.log(greaterNumber(32, 21));
console.log(greaterNumber(12, 35));