//2.1 Inserta dinamicamente en un html un div vacio con javascript.

const divnuevo = document.createElement("div");
document.body.appendChild(divnuevo);  

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.

const divp = document.createElement("div");  
const p = document.createElement("p");
p.textContent = "parrafo dentro del div test adadawdsadcadafsaaf";      
divp.appendChild(p);
document.body.appendChild(divp);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const divp2 = document.createElement("div");

for (let i = 1; i <= 6; i++) {
  const p2 = document.createElement("p");
  p2.textContent = "parrafo dentro del div ejercicio 3 test adjkajlñd";
  divp2.appendChild(p2);
}

document.body.appendChild(divp2);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const pdinamico = document.createElement("p")
pdinamico.textContent = "Soy dinámico!"
document.body.appendChild(pdinamico);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.

const h2 = document.querySelector(".fn-insert-here");
h2.textContent = "Wubba Lubba dub dub";

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array. 

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement("ul");

for (let i = 0; i < apps.length; i++) {
  const li = document.createElement("li");
  li.textContent = apps[i];
  ul.appendChild(li);
}

document.body.appendChild(ul);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me

const eliminanodos = document.querySelectorAll(".fn-remove-me");

eliminanodos.forEach(nodo => {
  nodo.parentNode.removeChild(nodo);
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. Recuerda que no solo puedes insertar elementos con .appendChild.

const pmedio = document.createElement("p")
pmedio.textContent = "Voy en medio!"
document.body.insertBefore(pmedio, divp2);

// 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const pdentro = document.querySelectorAll(".fn-insert-here");

pdentro.forEach(div => {
  const pdentro = document.createElement("p");
  pdentro.textContent = "Voy dentro!";
  div.appendChild(pdentro);
});