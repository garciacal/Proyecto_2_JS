// Ejercicio 31
// Dada una lista de artistas con sus influencias, utiliza bucles anidados para listar todos los artistas y sus influencias directas e imprime cada par por consola.

const artists = [
  { name: 'Kurt Cobain', influences: ['The Beatles', 'Pixies', 'Lead Belly'] },
  { name: 'David Bowie', influences: ['Little Richard', 'Chuck Berry', 'The Velvet Underground'] },
  { name: 'Eddie Vedder', influences: ['The Who', 'Neil Young', 'Jim Morrison'] },
  { name: 'Freddie Mercury', influences: ['Liza Minnelli', 'Jimi Hendrix', 'Aretha Franklin'] },
  { name: 'John Lennon', influences: ['Elvis Presley', 'Chuck Berry', 'Buddy Holly'] }
];

// Añade tu código de bucle aquí

let artista;
const influencia = [];

for (let i = 0; i < artists.length; i++) {
  let artista = artists[i].name;
  console.log("El artista " + artista + " se ha influenciado en:");

  let influencias = artists[i].influences;
  for (let j = 0; j < influencias.length; j++) {
    console.log(influencias[j]);
  }
}
