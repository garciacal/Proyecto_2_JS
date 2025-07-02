// Ejercicio 25
// Dada una lista de películas, cuenta cuántas son de antes del año 2000 y cuántas son posteriores, utilizando un bucle.

// Imprime ambos conteos por consola.

const movies = [
  { title: 'The Matrix', releaseYear: 1999 },
  { title: 'Star Wars: Episode IV – A New Hope', releaseYear: 1977 },
  { title: 'Inception', releaseYear: 2010 },
  { title: 'Jurassic Park', releaseYear: 1993 },
  { title: 'The Shawshank Redemption', releaseYear: 1994 },
  { title: 'Pulp Fiction', releaseYear: 1994 },
  { title: 'Avatar', releaseYear: 2009 },
  { title: 'The Dark Knight', releaseYear: 2008 },
  { title: 'Fight Club', releaseYear: 1999 },
  { title: 'Forrest Gump', releaseYear: 1994 }
];

// Añade tu código de bucle aquí

let pre2000 = 0;
let post2000 = 0;

for (let i = 0; i < movies.length; i++) {
  if (movies[i].releaseYear < 2000) {
  pre2000 = pre2000 + 1;
  }
  else {
    post2000 = post2000 + 1
  }
}

console.log("Antes del 2000 són " + pre2000 + " peliculas")
console.log("Despues del 2000 són " + post2000 + " peliculas")