// Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, 
// la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon, es decir, del 1 al 151.

// Los Pokemon no solo tienen una imagen, si no que tendrán muchas, 
// hay que hallar la manera de encontrar la que más os guste.


// Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, 
// aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

// Documentación: https://pokeapi.co/

// URL: https://pokeapi.co/api/v2/pokemon/1

// Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, 
// debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.

document.getElementById("Boton").addEventListener("click", async () => {

    const numeropokemon = Math.floor(Math.random() * 1010) + 1;

    const url = `https://pokeapi.co/api/v2/pokemon/${numeropokemon}/`;

    try {

        const res = await fetch(url);
        if (!res.ok) throw new Error("Error al obtener el Pokémon");

        const info = await res.json();
        const nombre = info.name;
        const urlfoto = info.sprites.front_default;

        document.getElementById("Nombre").textContent = nombre;
        const getelementimagen = document.getElementById("random-image");
        getelementimagen.src = urlfoto;
        getelementimagen.style.display = urlfoto ? 'block' : 'none';

    } catch (err) {
        console.error(err);
        document.getElementById("Nombre").textContent = "Error";
    }
});
