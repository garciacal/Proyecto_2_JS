// Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array. 
// Esta función comprueba si existe el elemento, y en caso de que exista nos devuelve un true y la posición de dicho elemento y por la contra un false.

// Puedes usar este array para probar tu función:

const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

let nombredado = "Logan"

function nameFinder(nameList, nombredado) {
  for (let i = 0; i < nameList.length; i++) {
    let nombreactual = nameList[i];
    if (nombreactual === nombredado) {
      return { found: true, index: i };
    }
  }
  return { found: false, index: -1 };
}


let resultado = nameFinder(names, "Logan");
console.log(resultado);