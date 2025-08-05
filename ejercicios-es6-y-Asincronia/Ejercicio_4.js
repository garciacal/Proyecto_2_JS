// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];


const mayoresEdad = ages.filter(edad => edad >= 18);
console.log(mayoresEdad);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.

const pares = ages.filter(edad => edad % 2 === 0);
console.log(pares)

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];

const jugadoresdelol = streamers.filter(juego => juego.gameMorePlayed === "League of Legends");

console.log(jugadoresdelol)

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.

const streamersu = streamers.filter(nombre => nombre.name.includes("u"));

//4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.

const jugadoresdelolmayores = streamers.filter(streamer => streamer.gameMorePlayed.includes("Legends")) .map(streamer => {
    if (streamer.age > 35) {
      return {
        ...streamer,
        gameMorePlayed: streamer.gameMorePlayed.toUpperCase()
      };
    }
    return streamer;
  });

console.log(jugadoresdelolmayores);
