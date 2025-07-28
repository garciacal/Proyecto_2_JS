// 1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises. 

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul");

for (let i = 0; i < countries.length; i++) {
  const li = document.createElement("li");
  li.textContent = countries[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminanodos = document.querySelectorAll(".fn-remove-me");

eliminanodos.forEach(nodo => {
  nodo.parentNode.removeChild(nodo);
});

// 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere". const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul2 = document.createElement("ul");

for (let i = 0; i < cars.length; i++) {
  const li = document.createElement("li");
  li.textContent = cars[i];
  ul2.appendChild(li);
}

const buscarprint = document.querySelector('div[data-function="printHere"]');

if (buscarprint) {
  buscarprint.appendChild(ul2);
}


// 1.4 Crea dinamiclamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro eemento img para la imagen. 

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 

for (let i = 0; i < countries2.length; i++) {
  const div = document.createElement("div");

  const titulo = document.createElement("h4");
  titulo.textContent = countries2[i].title;

  const imagen = document.createElement("img");
  imagen.src = countries2[i].imgUrl;

  div.appendChild(titulo);
  div.appendChild(imagen);

  const botonEliminarIndividual = document.createElement("button");
  botonEliminarIndividual.textContent = "Eliminar este";


  botonEliminarIndividual.addEventListener("click", () => {
  div.remove();
  });

  div.appendChild(titulo);
  div.appendChild(imagen);
  div.appendChild(botonEliminarIndividual);

  document.body.appendChild(div);
}

//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el últimoelemento de la serie de divs.

const botonEliminar = document.createElement("button");
botonEliminar.textContent = "Eliminar";
document.body.appendChild(botonEliminar);

botonEliminar.addEventListener("click", () => {
  const divs = document.querySelectorAll("body > div");

  if (divs.length > 0) {
    const ultimoDiv = divs[divs.length - 1];
    ultimoDiv.remove();
  }
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.

//Añadido!!!//