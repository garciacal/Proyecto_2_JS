// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

  const boton = document.querySelector(".showme");
  console.log(boton);

// 1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

  const h1 = document.querySelector("#pillado");
  console.log(h1.textContent);

// 1.3 Usa querySelector para mostrar por consola todos los p

  const todoslosp = document.querySelectorAll("p");
  todoslosp.forEach(p => {
    console.log(p.textContent);
  });

// 1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

  const todospokemon = document.querySelectorAll(".pokemon");
  todospokemon.forEach(pokemon => {
    console.log(pokemon.textContent);
  });

// 1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo data-function="testMe".

  const testme = document.querySelectorAll('[data-function="testMe"]');
  testme.forEach(personaje => {
    console.log(personaje.textContent);
  });

// 1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo data-function="testMe".

const Personaje3 = testme[2];
console.log(Personaje3.textContent);