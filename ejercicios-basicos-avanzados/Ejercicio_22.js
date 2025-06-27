// Ejercicio 22
// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

// Recuerda no usar frutas duplicadas.

// Finalmente, imprime el array resultante.

const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
]

const arrayfinal = [];
let fruitIndex = 0;

for (let i = 0; i < foodSchedule.length; i++) {
  if (foodSchedule[i].isVegan) {
    arrayfinal.push(foodSchedule[i]);

  } else {

    if (fruitIndex < fruits.length) {
      arrayfinal.push({ name: fruits[fruitIndex], isVegan: true });
      fruitIndex++;
    } else {
      arrayfinal.push({ name: "Fruit", isVegan: true });
    }
  }
}

console.log(arrayfinal);