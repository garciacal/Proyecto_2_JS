// Ejercicio 29

// Agrupa las películas de Star Wars por década de lanzamiento en un objeto donde las claves son las décadas y los valores son arrays de películas.

// Utiliza bucles para lograrlo e imprime el objeto final por consola.

const starWarsMovies = [
  { title: 'A New Hope', releaseYear: 1977 },
  { title: 'The Empire Strikes Back', releaseYear: 1980 },
  { title: 'Return of the Jedi', releaseYear: 1983 },
  { title: 'The Phantom Menace', releaseYear: 1999 },
  { title: 'Attack of the Clones', releaseYear: 2002 },
  { title: 'Revenge of the Sith', releaseYear: 2005 },
  { title: 'The Force Awakens', releaseYear: 2015 },
  { title: 'The Last Jedi', releaseYear: 2017 },
  { title: 'The Rise of Skywalker', releaseYear: 2019 },
  { title: 'Rogue One', releaseYear: 2016 },
  { title: 'Solo', releaseYear: 2018 }
];

// Añade tu código de bucle aquí


const decada70 = []
const decada80 = []
const decada90 = []
const decada2000 = []
const decada2010 = []


for (let i = 0; i < starWarsMovies.length; i++) {
  if (starWarsMovies[i].releaseYear < 1980) {
    decada70.push(starWarsMovies[i].title)
  }
  else if (starWarsMovies[i].releaseYear < 1990) {
    decada80.push(starWarsMovies[i].title)
  }
  else if (starWarsMovies[i].releaseYear < 2000) {
    decada90.push(starWarsMovies[i].title)
  }
  else if (starWarsMovies[i].releaseYear < 2010) {
  decada2000.push(starWarsMovies[i].title)
  }
  else {
  decada2010.push(starWarsMovies[i].title)
  }
}

console.log("Decada de los 70 = " + decada70)
console.log("Decada de los 80 = " + decada80)
console.log("Decada de los 90 = " + decada90)
console.log("Decada del 2000 = " + decada2000)
console.log("Decada del 2010 = " + decada2010)