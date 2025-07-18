// Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados.

// Pista: puedes generar un nuevo array y devolverlo.

// Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
  let quitaduplicados = [];
  let valoractual = "";

  for (let i = 0; i < list.length; i++) {
    valoractual = list[i];

    if (!quitaduplicados.includes(valoractual)) {
      quitaduplicados.push(valoractual);
    }
  }

  return quitaduplicados;
}

console.log(removeDuplicates(duplicates));